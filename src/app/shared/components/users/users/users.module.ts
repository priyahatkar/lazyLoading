import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersDashboaredComponent } from '../users-dashboared/users-dashboared.component';
import { ActivatedUserComponent } from '../users-dashboared/activated-user/activated-user.component';
import { InActivatedUsersComponent } from '../users-dashboared/in-activated-users/in-activated-users.component';

const routes : Routes = [
  {path : '', component: UsersDashboaredComponent,
      children : [
        {path : '', component : ActivatedUserComponent, pathMatch :'full'},
        {path : 'activatedUser', component : ActivatedUserComponent},
        {path : 'inActivatedUsers', component : InActivatedUsersComponent},
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
export class UsersModule { 
  constructor(){
    console.log('user module is work');
  }
}
