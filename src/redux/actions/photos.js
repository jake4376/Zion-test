import { createAction } from 'redux-actions';

export const actionTypes = {
  PHOTOS: '[PHOTOS] - Get photos',
  PHOTOS_SUCCESS: '[PHOTOS] - Get photos Success',
  PHOTOS_FAILURE: '[PHOTOS] - Get photos Failure',
  PHOTOS_UPDATE: '[PHOTOS] - Update Order',
  PHOTOS_END: '[PHOTOS] - Reach End',
};

export const UpdateOrder = createAction(actionTypes.PHOTOS_UPDATE);
export const FetchPhotos = createAction(actionTypes.PHOTOS);
export const FetchPhotosSuccess = createAction(actionTypes.PHOTOS_SUCCESS);
export const FetchPhotosFailure = createAction(actionTypes.PHOTOS_FAILURE);