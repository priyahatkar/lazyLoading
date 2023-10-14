import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DashboardComponent } from './shared/components/dashboared/dashboared.component';
import { MobileComponent } from './shared/components/products/product-dashboared/mobile/mobile.component';
import { LaptopComponent } from './shared/components/products/product-dashboared/laptop/laptop.component';
import { TabComponent } from './shared/components/products/product-dashboared/tab/tab.component';
import { HeadphoneComponent } from './shared/components/products/product-dashboared/headphone/headphone.component';
import { ActivatedUserComponent } from './shared/components/users/users-dashboared/activated-user/activated-user.component';
import { InActivatedUsersComponent } from './shared/components/users/users-dashboared/in-activated-users/in-activated-users.component';
import { ProductDashboaredComponent } from './shared/components/products/product-dashboared/product-dashboared.component';
import { UsersDashboaredComponent } from './shared/components/users/users-dashboared/users-dashboared.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ProductDashboaredComponent,
    UsersDashboaredComponent,
    MobileComponent,
    LaptopComponent,
    TabComponent,
    HeadphoneComponent,
    ActivatedUserComponent,
    InActivatedUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
