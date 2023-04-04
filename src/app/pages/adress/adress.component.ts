import { EcommerceService } from './../../services/ecommerce.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.scss'],
})
export class AdressComponent {
  form = new FormGroup({
    fullName: new FormControl(null, Validators.required),
    streetName: new FormControl(null, Validators.required),
    city: new FormControl(null, Validators.required),
    state: new FormControl(null, Validators.required),
    country: new FormControl(null, Validators.required),
    ck: new FormControl(false),
    id: new FormControl(1),
  });

  constructor(private EcommerceService: EcommerceService, private router: Router) {}

  submitForm() {
    if (this.form.invalid || !this.form.value.ck) {
      return;
    }
    let formValue = { ...this.form.value };
    delete formValue.ck;
    console.log(formValue);
    this.EcommerceService.Adrespost(formValue, 'adress').subscribe(res => {
      this.router.navigate(['/checkout']);
    });
  }
}
