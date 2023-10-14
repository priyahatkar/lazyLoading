import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboaredComponent } from '../product-dashboared/product-dashboared.component';
import { RouterModule, Routes } from '@angular/router';
import { LaptopComponent } from '../product-dashboared/laptop/laptop.component';
import { MobileComponent } from '../product-dashboared/mobile/mobile.component';
import { TabComponent } from '../product-dashboared/tab/tab.component';
import { HeadphoneComponent } from '../product-dashboared/headphone/headphone.component';

const routes : Routes = [
  {path : '', component : ProductDashboaredComponent,
    children : [
      {path : '', component : LaptopComponent},
      {path : 'laptop', component : LaptopComponent},
      {path : 'mobile', component : MobileComponent},
      {path : 'tab', component : TabComponent},
      {path : 'headphone', component : HeadphoneComponent},
    ]
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { 
  constructor(){
    console.log('products module is work');
    
  }
}
