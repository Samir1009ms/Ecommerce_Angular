import { AuthService } from 'src/app/services/auth.service';
import { IProduct, Img, Ar, Ibasket } from './../../models/models';
import { EcommerceService } from './../../services/ecommerce.service';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { Router } from '@angular/router';

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
  userId: any;

  constructor(private EcommerceService: EcommerceService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.getItems();
    setTimeout(() => {
      console.log(this?.userId);
      this.getBasket(this?.userId);
    }, 100);
    this.getId();
  }

  getItems() {
    this.EcommerceService.getProduct('getPosts').subscribe(res => {
      this.items = res;
      console.log(res);
      this.cartShop = res;
    });
  }

  getId() {
    this.userId = this.authService.getUsers();
    console.log(this.authService.getUsers());
    console.log(this.userId, 'id');
  }

  getBasket(userId?: any) {
    if (this.authService.isLoggedIn()) {
      this.EcommerceService.getBasket(userId).subscribe(res => {
        console.log(res);
        this.basketItems = res;
        console.log(this.userId);
      });
    }
  }

  post(item: any) {
    // let a = this.basketItems.find(i => i._id === item.id);
    // const userId = this.authService.getUserId();
    // const params = { userId: userId };
    // console.log(params, 'sss');
    console.log(item);
    if (this.authService.isLoggedIn()) {
      this.EcommerceService.post(item, this.userId).subscribe(
        res => {
          this.getBasket(this.userId);
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log('Post Error');
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  plus(item: any) {
    const index = this.basketItems.findIndex(i => i._id === item.id);
    if (index > -1) {
      this.basketItems[index].count++;
      this.basketItems[index] = item;
      console.log(this.basketItems[index]);
      // this.EcommerceService.postx(item, this.userId, this.basketItems[index]).subscribe(
      //   res => {
      //     console.log(res);
      //   },
      //   error => {
      //     console.log(error);
      //   }
      // );
    } else {
      console.log('boss');
    }
  }

  delete(item: IProduct) {
    const index = this.basketItems.findIndex(i => i._id === item._id); //! array da olan itemslarin indexsi yoxdursa sorgu atmasin
    if (index > -1) {
      this.EcommerceService.delete(item._id, this.userId).subscribe(res => {
        console.log(res);
        this.getBasket(this.userId);
      });
    } else {
      console.log('delete error');
    }
  }
}
