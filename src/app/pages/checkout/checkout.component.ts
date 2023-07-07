import { AuthService } from './../../services/auth.service';
import { IAdres, Icard, IProduct } from 'src/app/models/models';
import { EcommerceService } from './../../services/ecommerce.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  basketValues: [any];
  adressValues: IAdres[] = [];
  type: boolean = true;
  totalPrice: number = 0;
  item: any;
  userId: any;

  constructor(private EcommerceService: EcommerceService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getBasket(this.userId);
      this.getAdress(this.userId);
    }, 100);

    this.getCard();
    this.getId();
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

  handleClick(link: string) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate([link]);
    } else {
      this.router.navigate(['/login']);
    }
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

  getAdress(userId: any) {
    this.EcommerceService.getAdress(userId).subscribe(res => {
      this.adressValues = [res];
      console.log(this.adressValues);
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
