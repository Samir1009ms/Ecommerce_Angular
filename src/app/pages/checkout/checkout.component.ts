import { IAdres, Icard, IProduct } from 'src/app/models/models';
import { EcommerceService } from './../../services/ecommerce.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  basketValues: IProduct[] = [];
  adressValues: IAdres[] = [];
  type: boolean = true;
  totalPrice: number = 0;
  item: any;

  constructor(private EcommerceService: EcommerceService) {}

  ngOnInit(): void {
    this.getBasket();
    this.getAdress();
    this.getCard();
  }

  getBasket() {
    this.EcommerceService.getProduct('basket').subscribe(res => {
      this.basketValues = res;
      setTimeout(() => {
        this.totalPrice = this.itemTotal();
      }, 10);
    });
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

  getAdress() {
    this.EcommerceService.getAdress().subscribe(res => {
      this.adressValues = res;
    });
    // console.log(localStorage.getItem('id'));
  }

  cards: Icard | null = null;
  getCard() {
    let id = localStorage.getItem('id');
    this.EcommerceService.getCardsId(id).subscribe(res => {
      this.cards = res;
      console.log(this.cards);
    });
  }
}
