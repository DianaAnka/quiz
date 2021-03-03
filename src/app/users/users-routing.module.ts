import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './container/user-page/user-page.component';

import { UsersComponent } from './container/users/users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'user/:id', component: UserPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
