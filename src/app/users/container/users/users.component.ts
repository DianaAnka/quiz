import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromActions from '../../store/user.actions';
import * as fromStore from '../../store/user.reducer';
import * as fromSelector from '../../store/users.selectors';
import { User } from './../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  users$: Observable<User[]>;
  pageNum: number = 1;
  end: boolean = false;
  start: boolean = true;

  constructor(private store: Store) {
    this.store.dispatch(
      fromActions.requestLoadUsers({ pageNum: String(this.pageNum) })
    );
    this.users$ = this.store.select(fromSelector.users);
    this.isLoading$ = this.store.select(fromSelector.isLoading);
    this.error$ = this.store.select(fromSelector.error);
  }

  ngOnInit(): void {}

  getData() {
    this.store.dispatch(
      fromActions.requestLoadUsers({ pageNum: String(this.pageNum) })
    );
    this.users$ = this.store.select(fromSelector.users);
    this.isLoading$ = this.store.select(fromSelector.isLoading);
    this.error$ = this.store.select(fromSelector.error);
  }
  nextPage() {
    this.pageNum += 1;
    this.getData();
    this.checkPage();
  }
  previousPage() {
    this.pageNum -= 1;
    this.getData();
    this.checkPage();
  }
  checkPage() {
    if (this.pageNum == 1) {
      this.start = true;
      this.end = false;
    } else if (this.pageNum == 2) {
      this.end = true;
      this.start = false;
    }
  }
}
