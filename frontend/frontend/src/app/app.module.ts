import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShopsListComponent } from './shops-list/shops-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';



const routes: Routes = [
  { path: '', component: ShopsListComponent },
  { path: 'shops', component: ShopsListComponent },
  { path: 'shops/:id', component: ShopComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({

  declarations: [
    AppComponent,
    ShopsListComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
