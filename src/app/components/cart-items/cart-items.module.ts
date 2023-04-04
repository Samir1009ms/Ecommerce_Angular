import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemsComponent } from './cart-items.component';

@NgModule({
  declarations: [CartItemsComponent],
  imports: [CommonModule],
  exports: [CartItemsComponent],
})
export class CartItemsModule {}
