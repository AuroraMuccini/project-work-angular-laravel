import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shop } from './shop.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {



  constructor(private http: HttpClient) { }

  getShopList(): Promise<Shop[] | undefined> {
    return this.http.get<Shop[]>('http://localhost:8000/api/shops')
    .toPromise();
    }
 
}
