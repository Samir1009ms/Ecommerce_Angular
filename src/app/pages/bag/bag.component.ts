import { IProduct } from 'src/app/models/models';
import { EcommerceService } from './../../services/ecommerce.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss'],
})
export class BagComponent implements OnInit {
  basketValues: IProduct[] = [];
  type: boolean = true;
  totalPrice: number = 0;
  item: any;

  constructor(private EcommerceService: EcommerceService) {}

  ngOnInit(): void {
    this.getBasket();
  }

  getBasket() {
    this.EcommerceService.getProduct('basket').subscribe(res => {
      this.basketValues = res;
      setTimeout(() => {
        this.totalPrice = this.itemTotal();
      }, 10);
    });
  }
  onButtonClicked() {
    setTimeout(() => {
      this.getBasket();
      this.totalPrice = this.itemTotal();
    }, 10);
  }
  itemTotal() {
    let totalPrice = 0;
    let total;
    this.basketValues.forEach(item => {
      totalPrice += item.count * item.price;
      console.log(item);
    });
    console.log(totalPrice.toFixed(2));
    total = Number(totalPrice.toFixed(2));
    return total;
  }
}
