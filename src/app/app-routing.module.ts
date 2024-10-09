import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HelpComponent } from './pages/help/help.component';
import { ExchangeReturnComponent } from './pages/exchange-return/exchange-return.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductDetailsComponent } from './container/product-details/product-details.component';
import { ShopNowComponent } from './pages/shop-now/shop-now.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'electronics', component: ProductListComponent},
  {path: 'jewelery', component: ProductListComponent},
  {path: "men's clothing", component: ProductListComponent},
  {path: "women's clothing", component: ProductListComponent},
  {path: 'help', component: HelpComponent},
  {path: 'exchange-return', component: ExchangeReturnComponent},
  {path: 'shop-now', component: ShopNowComponent},
  {path: "product/:id", component: ProductDetailsComponent},
  {path: "favorite", component: FavoriteComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
