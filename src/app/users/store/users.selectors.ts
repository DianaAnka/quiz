import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from './user.reducer';

const usersSelector = createFeatureSelector<fromStore.UserState>(fromStore.usersFeatureKey);

export const isLoading = createSelector(usersSelector, fromStore.selectIsLoading);
export const users = createSelector(usersSelector, fromStore.selectAll);
export const error = createSelector(usersSelector, fromStore.selectError);
