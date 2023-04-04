import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BagRoutingModule } from './bag-routing.module';
import { BagComponent } from './bag.component';
import { BagItemsModule } from 'src/app/components/bag-items/bag-items.module';
import { CartItemsModule } from 'src/app/components/cart-items/cart-items.module';

@NgModule({
  declarations: [BagComponent],
  imports: [CommonModule, BagRoutingModule, BagItemsModule, CartItemsModule],
})
export class BagModule {}
