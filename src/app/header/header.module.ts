import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [HeaderComponent,SearchPipe],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
