import { NgModule } from '@angular/core';
import { HeaderComponent } from './../../shared/header/header.component';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from 'src/app/components/search/search.component';
import { BagItemsComponent } from 'src/app/components/bag-items/bag-items.component';

@NgModule({
  declarations: [LayoutsComponent, HeaderComponent],
  imports: [CommonModule, LayoutsRoutingModule, FormsModule],
})
export class LayoutsModule {}
