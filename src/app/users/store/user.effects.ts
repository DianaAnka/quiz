import { users } from './users.selectors';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, debounceTime, delay, tap } from 'rxjs/operators';

import { UserService } from '../service/user.service';
import { loadUsers, requestLoadUsers, searchUser } from './user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private service: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestLoadUsers),
      switchMap((action) =>
        this.service.load(action.pageNum).pipe(
          tap(console.log),
          delay(3000),
          map((data) => loadUsers({ users: data.data }))
        )
      )
    )
  );

  searchUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchUser),
      switchMap((action) =>
        this.service.search(action.searchQuery).pipe(
          delay(1000),
          map((data) => loadUsers({ users: data }))
        )
      )
    )
  );
}
