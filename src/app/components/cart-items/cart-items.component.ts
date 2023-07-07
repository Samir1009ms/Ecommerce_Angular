import { EcommerceService } from './../../services/ecommerce.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IProduct } from 'src/app/models/models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
})
export class CartItemsComponent {
  @Input() items: any;
  @Input() style: string = '';
  @Input() style2: string = '';
  @Input() isBanner: boolean = false;

  totalPrice: number = 0;
  userId: string;

  constructor(private EcommerceService: EcommerceService, private authService: AuthService, private route: Router) {}

  ngOnInit(): void {
    this.itemTotal();
    this.totalPrice = this.itemTotal();
    console.log('t', this.totalPrice);
    console.log('ts', this.itemTotal());
    // this.getBasket();
    this.getId();
    console.log(this.items);
  }
  // getBasket() {
  //   this.EcommerceService.getProduct('basket').subscribe(res => {
  //     this.items = res;
  //   });
  // }

  getId() {
    this.userId = this.authService.getUsers();
  }

  itemsPlus(item: any, inde: number) {
    if (this.authService.isLoggedIn()) {
      let id = this.items[inde].product._id;
      let i = this.items[inde];
      console.log(i);
      console.log(item.count++);
      console.log(item);

      // item++;
      this.totalPrice = this.itemTotal();
      this.EcommerceService.postx(id, this.userId, item.count).subscribe(
        res => {},
        error => {}
      );
    } else {
      this.route.navigate(['/login']);
    }
  }
  itemsMinus(item: any, index: number) {
    if (this.authService.isLoggedIn()) {
      let id = this.items[index].product._id;
      if (item.count > 1) {
        item.count--;
        this.totalPrice = this.itemTotal();
        this.EcommerceService.postx(id, this.userId, item.count).subscribe(
          res => {},
          error => {}
        );
      }
    } else {
      this.route.navigate(['/login']);
    }
  }

  itemTotal() {
    let totalPric = 0;
    // this.items.forEach(item => {
    //   totalPric += item.count * item.price;
    //   console.log(item);
    // });
    return totalPric;
  }

  delete(item: any) {
    console.log(this.items);

    const index = this.items.includes(item);
    if (index > -1) {
      console.log(this.userId);
      this.items.splice(index, 1);

      this.EcommerceService.delete(item._id, this.userId).subscribe(res => {
        console.log(res);
        // this.getBasket();
      });
      console.log('s');
    }

    console.log(index);
    console.log(item._id);
  }

  @Output() buttonClicked = new EventEmitter<void>();
  @Output() itemsData = new EventEmitter<void>();

  onClick(item: number, index: number) {
    setTimeout(() => {
      this.buttonClicked.emit();
    }, 150);
    this.itemsMinus(item, index);
  }
  onClick2(item: any, index: any) {
    setTimeout(() => {
      this.buttonClicked.emit();
    }, 100);
    this.itemsPlus(item, index);
  }
  clear(item: IProduct) {
    // setTimeout(() => {
    //   this.itemsData.emit();
    // }, 150);
    this.delete(item);
  }
}
