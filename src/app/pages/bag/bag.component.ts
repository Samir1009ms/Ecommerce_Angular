import { IProduct } from 'src/app/models/models';
import { EcommerceService } from './../../services/ecommerce.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss'],
})
export class BagComponent implements OnInit {
  basketValues: [any];
  type: boolean = true;
  totalPrice: number = 0;
  item: any;
  userId: any;
  constructor(private EcommerceService: EcommerceService, private authService: AuthService) {}

  ngOnInit(): void {
    this.getId();
    setTimeout(() => {
      this.getBasket(this.userId);
    }, 100);
  }

  getId() {
    this.userId = this.authService.getUsers();
  }

  getBasket(userId: any) {
    this.EcommerceService.getBasket(userId).subscribe(res => {
      this.basketValues = res;
      setTimeout(() => {
        this.totalPrice = this.itemTotal();
      }, 10);
    });
  }
  onButtonClicked() {
    setTimeout(() => {
      // this.getBasket(this.userId);
      this.totalPrice = this.itemTotal();
    }, 150);
  }

  getItems() {
    setTimeout(() => {
      this.getBasket(this.userId);
    }, 100);
  }

  itemTotal() {
    let totalPrice = 0;
    let total;
    this.basketValues.forEach(item => {
      totalPrice += item.count * item.product.price;
      console.log(item);
    });
    console.log(totalPrice.toFixed(2));
    total = Number(totalPrice.toFixed(2));
    return total;
  }
}
