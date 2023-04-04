import { CheckoutComponent } from './checkout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    // children: [
    //   {
    //     path: 'payment',
    //     loadChildren: () => import('../../pages/payment/payment.module').then(m => m.PaymentModule),
    //   },
    // ],
  },
  {
    path: 'payment',
    loadChildren: () => import('../../pages/payment/payment.module').then(m => m.PaymentModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
