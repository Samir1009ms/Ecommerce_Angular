import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,

    children: [
      {
        path: '',
        loadChildren: () => import('../../pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'info/:id',
        loadChildren: () => import('../../pages/item-view/item-view.module').then(m => m.ItemViewModule),
      },
      {
        path: 'bag',
        loadChildren: () => import('../../pages/bag/bag.module').then(m => m.BagModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutsRoutingModule {}
