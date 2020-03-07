import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'customer', loadChildren: './customer/customer.module#CustomerPageModule' },  { path: 'student-create', loadChildren: './crudTuto/student-create/student-create.module#StudentCreatePageModule' },
  { path: 'student-edit', loadChildren: './crudTuto/student-edit/student-edit.module#StudentEditPageModule' },
  { path: 'student-list', loadChildren: './crudTuto/student-list/student-list.module#StudentListPageModule' },
  { path: 'student-detail', loadChildren: './crudTuto/student-detail/student-detail.module#StudentDetailPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
