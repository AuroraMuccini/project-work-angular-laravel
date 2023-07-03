import { Input, Component } from '@angular/core';

import { Shop } from '../shop.model';
import { ShopService } from '../shop.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

  
export class ShopComponent {

  @Input() productsList: Shop | undefined = undefined;
dynamicUrlImage:string = "";

  id = this.activatedRoute.snapshot.paramMap.get('id');
  constructor(private shopService: ShopService,
    private activatedRoute: ActivatedRoute) { }
    ngOnInit(): void {
        console.log('ShopComponent.ngOnInit(): shop id=', this.id);
        if(this.id != null ){
            this.shopService.getShop(this.id).then((x) => {
                this.productsList = x;
                
                if(this.productsList?.nome == "Zara"){
                  this.dynamicUrlImage= "../../assets/Zara-Logo.png"
                }else if(this.productsList?.nome == "Bershka"){
                  this.dynamicUrlImage= "../../assets/Bershka-Logo.png"
                }else{
                  this.dynamicUrlImage= "../../assets/Dior-Logo.png"
                }
            })

            
          }
    }
        
        
      }
      
    
    
   
    


  
  


