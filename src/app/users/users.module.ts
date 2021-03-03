import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './container/users/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserEffects } from './store/user.effects';
import * as fromUser from './store/user.reducer';
import { UserPageComponent } from './container/user-page/user-page.component';

@NgModule({
  declarations: [UsersComponent, UserPageComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature(fromUser.usersFeatureKey, fromUser.reducer),
    EffectsModule.forFeature([UserEffects]),
    SharedModule
  ]
})
export class UsersModule { }
