import { EcommerceService } from './../../services/ecommerce.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCalendar, MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  form = new FormGroup({
    id: new FormControl(1),
    cartType: new FormControl(''),
    fullName: new FormControl(null, Validators.required),
    card: new FormControl(null, [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
    date: new FormControl(null, Validators.required),
    cvc: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
    checkbox: new FormControl(false),
  });

  constructor(private EcommerceService: EcommerceService, private router: Router) {}

  say = 0;
  submitForm() {
    if (this.form.invalid || !this.form.value.checkbox) {
      return;
    }
    this.say++;
    console.log(this.form.value.card);
    this.form.value.id = this.say;
    let formValue = { ...this.form.value };
    delete formValue.checkbox;
    console.log(this.say);

    this.EcommerceService.Adrespost(formValue, 'card').subscribe(res => {
      console.log(res);
      this.router.navigate(['/checkout']);
    });
  }

  updateCardType(event: Event) {
    const cardNumber = (event.target as HTMLInputElement).value;
    // const regexVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;
    // const regexMastercard = /^5[1-5][0-9]{14}$/;
    const regexVisa = /^4/;
    const regexMastercard = /^5[1-5]/;
    let cartType: string | null;
    if (cardNumber.match(regexVisa)) {
      console.log('Visa');
      cartType = 'Visa';
    } else if (cardNumber.match(regexMastercard)) {
      console.log('Mastercard');
      cartType = 'Mastercard';
    } else {
      cartType = 'yoxdu';
      console.log('Card type not recognized');
      console.log(typeof cardNumber);
    }
    this.form.patchValue({ cartType });
  }
}
