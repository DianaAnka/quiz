import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { User } from '../models/user';
import * as UserActions from './user.actions';

export const usersFeatureKey = 'users';

export interface UserState extends EntityState<User> {
  isLoading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: UserState = adapter.getInitialState({
  isLoading: true,
  error: null
});

export const reducer = createReducer(
  initialState,
  on(UserActions.addUser,
    (state, action) => adapter.addOne(action.user, state)
  ),
  on(UserActions.updateUser,
    (state, action) => adapter.updateOne(action.user, state)
  ),
  on(UserActions.deleteUser,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(UserActions.loadUsers,
    (state, action) => adapter.setAll(action.users, {
        ...state,
        isLoading: false
    })
  ),
  on(UserActions.requestLoadUsers,
    (state, action) => adapter.setAll([], {
      ...state,
      isLoading: true
  })
  )
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectIsLoading = (state: UserState) => state.isLoading;
export const selectError = (state: UserState) => state.error;
