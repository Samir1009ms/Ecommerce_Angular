import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdressRoutingModule } from './adress-routing.module';
import { AdressComponent } from './adress.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdressComponent],
  imports: [CommonModule, ReactiveFormsModule, AdressRoutingModule],
})
export class AdressModule {}
