import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { User } from '../models/user';

export const requestLoadUsers = createAction(
  '[User/API] Request Load Users',
  props< {pageNum: string} >()
);

export const loadUsers = createAction(
  '[User/API] Load Users',
  props<{ users: User[] }>()
);

export const addUser = createAction(
  '[User/API] Add User',
  props<{ user: User }>()
);

export const updateUser = createAction(
  '[User/API] Update User',
  props<{ user: Update<User> }>()
);

export const deleteUser = createAction(
  '[User/API] Delete User',
  props<{ id: string }>()
);

export const searchUser = createAction(
  '[User/API] Search Users',
  props<{ searchQuery: string }>()
);
