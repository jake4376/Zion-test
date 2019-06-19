import { unsplashClient } from './unsplash';

export const searchUsers = (keyword, page, perPage = 20) =>
  unsplashClient.search.users(keyword, page, perPage)
    .then(response => response.json());

export const getPhotos = (username, page, perPage = 20, orderBy='latest') =>
  unsplashClient.users.photos(username, page, perPage, orderBy)
    .then(response => response.json());