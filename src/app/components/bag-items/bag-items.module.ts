import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BagItemsComponent } from './bag-items.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [BagItemsComponent],
  imports: [CommonModule, RouterLink],
  exports: [BagItemsComponent],
})
export class BagItemsModule {}
