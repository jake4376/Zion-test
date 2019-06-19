import { createAction } from 'redux-actions';

export const actionTypes = {
  USERS: '[USERS] - Get users',
  USERS_SUCCESS: '[USERS] - Get users Success',
  USERS_FAILURE: '[USERS] - Get users Failure',
  USERS_SELECTED: '[USERS] - Selected User',
  USRES_END: '[USERS] - Reac End',
  USERS_UPDATE: '[USERS] - Update user search filter',
};

export const FetchUsers = createAction(actionTypes.USERS);
export const FetchUsersSuccess = createAction(actionTypes.USERS_SUCCESS);
export const FetchUsersFailure = createAction(actionTypes.USERS_FAILURE);
export const UpdateSearchFilter = createAction(actionTypes.USERS_UPDATE);
export const UserSelected = createAction(actionTypes.USERS_SELECTED);