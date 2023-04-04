import { IProduct } from './../../models/models';
import { EcommerceService } from './../../services/ecommerce.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bag-items',
  templateUrl: './bag-items.component.html',
  styleUrls: ['./bag-items.component.scss'],
})
export class BagItemsComponent implements OnInit {
  // items: IProduct[] = [];
  count: number = 0;
  @Input() items: IProduct[] = [];
  @Input() isBanner: boolean = false;
  @Input() total: number = 0;
  @Input() btntxt: string = '';
  @Input() link: string = '';

  constructor(private EcommerceService: EcommerceService) {}
  ngOnInit() {}
}
