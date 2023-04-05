import { EcommerceService } from './../../services/ecommerce.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/models/models';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
})
export class CartItemsComponent {
  @Input() items: IProduct[] = [];
  @Input() style: string = '';
  @Input() style2: string = '';
  @Input() isBanner: boolean = false;

  totalPrice: number = 0;

  constructor(private EcommerceService: EcommerceService) {}

  ngOnInit(): void {
    // this.itemTotal();
    this.totalPrice = this.itemTotal();
    console.log('t', this.totalPrice);
    console.log('ts', this.itemTotal());
    // this.getBasket();
  }
  // getBasket() {
  //   this.EcommerceService.getProduct('basket').subscribe(res => {
  //     this.items = res;
  //   });
  // }

  itemsPlus(item: IProduct) {
    const index = this.items.findIndex(i => i.id === item.id);
    console.log(item);
    if (index > -1) {
      item.count++;
      console.log(item);
      // this.itemTotal();
      this.totalPrice = this.itemTotal();
      this.EcommerceService.postx(item).subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  itemsMinus(item: IProduct) {
    const index = this.items.findIndex(i => i.id === item.id);
    if (index > -1) {
      // this.itemTotal();
      // console.log(this.totalPrice);
      if (item.count > 1) {
        item.count--;
        this.EcommerceService.postx(item).subscribe(res => {
          console.log(res);
        });
      }
      this.totalPrice = this.itemTotal();
    }
  }

  itemTotal() {
    let totalPric = 0;
    this.items.forEach(item => {
      totalPric += item.count * item.price;
      console.log(item);
    });
    return totalPric;
  }

  delete(item: IProduct) {
    const index = this.items.findIndex(i => i.id === item.id); //! array da olan itemslarin indexsi yoxdursa sorgu atmasin
    if (index > -1) {
      this.EcommerceService.delete(item).subscribe(res => {
        console.log(res);
        // this.getBasket();
      });
    } else {
      console.log('delete error');
    }
  }

  @Output() buttonClicked = new EventEmitter<void>();

  onClick(item: IProduct) {
    this.buttonClicked.emit();
    this.itemsMinus(item);
  }
  onClick2(item: IProduct) {
    this.buttonClicked.emit();
    this.itemsPlus(item);
  }
  clear(item: IProduct) {
    this.buttonClicked.emit();
    this.delete(item);
  }
}
