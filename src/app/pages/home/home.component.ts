import { IProduct, Img, Ar, Ibasket } from './../../models/models';
import { EcommerceService } from './../../services/ecommerce.service';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items: IProduct[] = [];
  basketItems: IProduct[] = [];
  cartShop: IProduct[] = [];
  count: number = 0;

  constructor(private EcommerceService: EcommerceService) {}

  ngOnInit(): void {
    this.getItems();
    this.getBasket();
  }

  getItems() {
    this.EcommerceService.getProduct('items').subscribe(res => {
      this.items = res;
      this.cartShop = res;
    });
  }

  getBasket() {
    this.EcommerceService.getProduct('basket').subscribe(res => {
      this.basketItems = res;
    });
  }

  post(item: IProduct | any) {
    let a = this.basketItems.find(i => i.id === item.id);
    if (!a) {
      this.EcommerceService.post(item).subscribe(
        res => {
          this.getBasket();
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log('Post Error');
    }
  }

  plus(item: any) {
    const index = this.basketItems.findIndex(i => i.id === item.id);
    if (index > -1) {
      this.basketItems[index].count++;
      this.basketItems[index] = item;
      this.EcommerceService.postx(item).subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log('boss');
    }
  }

  delete(item: IProduct) {
    const index = this.basketItems.findIndex(i => i.id === item.id); //! array da olan itemslarin indexsi yoxdursa sorgu atmasin
    if (index > -1) {
      this.EcommerceService.delete(item).subscribe(res => {
        console.log(res);
        this.getBasket();
      });
    } else {
      console.log('delete error');
    }
  }
}
