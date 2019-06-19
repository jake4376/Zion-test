import Unsplash from 'unsplash-js';

import { ACCESS_KEY, SECRET_KEY } from './const';

export const unsplashClient = new Unsplash({
  applicationId: ACCESS_KEY,
  secret: SECRET_KEY
});