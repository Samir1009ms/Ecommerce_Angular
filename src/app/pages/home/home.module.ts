import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { FormsModule } from '@angular/forms';
import { BagItemsComponent } from 'src/app/components/bag-items/bag-items.component';
import { BagItemsModule } from 'src/app/components/bag-items/bag-items.module';
// import { SearchModule } from 'src/app/components/search/search.module';

@NgModule({
  declarations: [HomeComponent, SearchComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, BagItemsModule],
})
export class HomeModule {}
