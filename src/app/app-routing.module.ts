import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboared/dashboared.component';

const routes: Routes = [
  {path : '', component : DashboardComponent},
  {path : 'products',
    loadChildren :() =>
    import('./shared/components/products/products/products.module')
      .then((m)=>m.ProductsModule)
},
{
  path : 'users',
  loadChildren :() =>
  import('./shared/components/users/users/users.module').then((m)=>m.UsersModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log('App module is work');
    
  }
}
