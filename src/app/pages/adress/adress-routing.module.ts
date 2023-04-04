import { AngularMaterialModule } from './../../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdressComponent } from './adress.component';

const routes: Routes = [
  {
    path: '',
    component: AdressComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, AngularMaterialModule],
})
export class AdressRoutingModule {}
