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

  constructor(private activeRoute: ActivatedRoute, private EcommerceService: EcommerceService) {}

  ngOnInit(): void {
    this.activeRoute.params.pipe(first()).subscribe(({ id }) => {
      this.getItemId(id);
    });

    this.getBasket();
  }

  getItemId(id: number) {
    this.EcommerceService.getItemDetails(id).subscribe(res => {
      this.items = res;
      this.src = this.items.img[0];
    });
  }

  getImg(event: string | any) {
    const target = event.target as HTMLImageElement;
    this.src = target.src;
    console.log(this.src);
  }

  getBasket() {
    return this.EcommerceService.getProduct('basket').subscribe(res => {
      this.basketItems = res;
    });
  }

  basketPost(item: IProduct | any) {
    const index = this.basketItems.find(i => i.id === item.id);
    if (!index) {
      this.EcommerceService.post(item).subscribe(res => {
        console.log(res);
        this.getBasket();
      });
    }
  }
}
