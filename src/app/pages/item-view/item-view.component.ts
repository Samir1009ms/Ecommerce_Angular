import { AuthService } from './../../services/auth.service';
import { EcommerceService } from './../../services/ecommerce.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { Ar, IProduct, Img } from 'src/app/models/models';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss'],
})
export class ItemViewComponent implements OnInit {
  items: IProduct | null = null;
  basketItems: IProduct[] = [];
  src = '';
  userId: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private EcommerceService: EcommerceService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.pipe(first()).subscribe(({ id }) => {
      this.getItemId(id);
    });
    this.getId();

    setTimeout(() => {
      this.getBasket(this.userId);
    }, 100);
  }

  getItemId(_id: number) {
    this.EcommerceService.getItemDetails(_id).subscribe(res => {
      this.items = res;
      this.src = this.items.img[0];
      console.log(res);
    });
  }

  getId() {
    this.userId = this.authService.getUsers();
  }

  getImg(event: string | any) {
    const target = event.target as HTMLImageElement;
    this.src = target.src;
    console.log(this.src);
  }

  getBasket(userId: any) {
    return this.EcommerceService.getBasket(userId).subscribe(res => {
      // this.basketItems = res;
    });
  }

  basketPost(item: IProduct | any) {
    const index = this.basketItems.find(i => i._id === item.id);
    if (!index) {
      // this.EcommerceService.post(item).subscribe(res => {
      //   console.log(res);
      //   this.getBasket();
      // });
    }
  }
}
