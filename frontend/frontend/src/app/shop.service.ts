import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from './shop.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  //chiamata che legge tutti i negozi
  getShopList(): Promise<Shop[] | undefined> {
    return this.http.get<Shop[]>('http://localhost:8000/api/shops')
    .toPromise();
    }

  //chiamata che legge i negozi con i relativi prodotti
  getShop(shop_id:string | null): Promise<Shop | undefined> {
    return this.http.get<Shop>('http://localhost:8000/api/shops/'+ shop_id)
    .toPromise();
    }
 
}
