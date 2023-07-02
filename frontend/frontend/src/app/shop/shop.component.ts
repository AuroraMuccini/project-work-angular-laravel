import { Input, Component } from '@angular/core';

import { Shop } from '../shop.model';
import { ShopService } from '../shop.service';
import { UntypedFormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

  
export class ShopComponent {
  // @Input() shop: Shop[];
  productsList: Shop[] |any| undefined;
  
  
  id = this.activatedRoute.snapshot.paramMap.get('id');
  constructor(private shopService: ShopService,
    private activatedRoute: ActivatedRoute) { }
    ngOnInit(): void {
        console.log('FilmComponent.ngOnInit(): film id=', this.id);
        if(this.id != null ){
            this.shopService.getShop(this.id).then((x) => {
                this.productsList = x;
                console.log(this.productsList)
        
            })
 
   
}}}

      // console.log('FilmComponent.ngOnInit(): product id=', id);
      // if (id != null) {
      //   this.shop = this.shopService.getShop(Number(id));
      //   console.log('FilmComponent.ngOnInit(): film ', this.shop);
      //   }
    
   
    


  
  
