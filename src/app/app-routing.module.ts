import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'customer', loadChildren: './customer/customer.module#CustomerPageModule' },
  { path: 'add-customer', loadChildren: './add-customer/add-customer.module#AddCustomerPageModule' },
  { path: 'show-customer', loadChildren: './show-customer/show-customer.module#ShowCustomerPageModule' },
  { path: 'detail/:id', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'edit/:id', loadChildren: './edit/edit.module#EditPageModule' },  { path: 'create', loadChildren: './create/create.module#CreatePageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
