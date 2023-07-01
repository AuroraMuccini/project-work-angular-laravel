import { Component } from '@angular/core';

import { Shop } from '../shop.model';
import { ShopService } from '../shop.service';



@Component({
  selector: 'app-shops-list',
  templateUrl: './shops-list.component.html',
  styleUrls: ['./shops-list.component.css']
})
export class ShopsListComponent {
shopsList: Shop[] | undefined;

  constructor(private shopService: ShopService) { }
  ngOnInit(): void {
    this.shopService.getShopList().then((x) => {
      this.shopsList = x;
    });
  }
}
