import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemViewRoutingModule } from './item-view-routing.module';
import { ItemViewComponent } from './item-view.component';
import { BagItemsModule } from 'src/app/components/bag-items/bag-items.module';

@NgModule({
  declarations: [ItemViewComponent],
  imports: [CommonModule, ItemViewRoutingModule, BagItemsModule],
})
export class ItemViewModule {}
