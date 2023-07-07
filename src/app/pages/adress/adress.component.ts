import { EcommerceService } from './../../services/ecommerce.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.scss'],
})
export class AdressComponent implements OnInit {
  userId: string;
  adressValue: any;
  form = new FormGroup({
    fullName: new FormControl(null, Validators.required),
    street: new FormControl(null, Validators.required),
    city: new FormControl(null, Validators.required),
    state: new FormControl(null, Validators.required),
    country: new FormControl(null, Validators.required),
    ck: new FormControl(false),
  });

  ngOnInit(): void {
    this.getId();
    this.getAdress();
  }

  constructor(private EcommerceService: EcommerceService, private router: Router, private authService: AuthService) {}

  getId() {
    this.userId = this.authService.getUsers();
    console.log(this.userId);
  }

  submitForm() {
    if (this.form.invalid || !this.form.value.ck) {
      return;
    }
    let formValue = { ...this.form.value };
    delete formValue.ck;
    console.log(formValue);
    console.log(this.adressValue);
    if (this.adressValue === undefined) {
      console.log('bos');
      this.EcommerceService.Adrespost(formValue, this.userId).subscribe(res => {
        this.router.navigate(['/checkout']);
      });
    } else {
      console.log('dolu');
      this.EcommerceService.updateAdres(formValue, this.userId).subscribe(res => {
        this.router.navigate(['/checkout']);
      });
    }
  }

  getAdress() {
    this.EcommerceService.getAdress(this.userId).subscribe(res => {
      console.log(res);
      this.adressValue = res;

      console.log(this.adressValue.fullName);
      this.form.patchValue({
        fullName: this.adressValue.fullName,
        street: this.adressValue.street,
        city: this.adressValue.city,
        state: this.adressValue.state,
        country: this.adressValue.country,
      });
    });
  }
}
