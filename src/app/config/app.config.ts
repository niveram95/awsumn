import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  routes: {
    home: '/',
    heroes: 'item',
    settings: 'settings',
    error404: '404'
  },
  endpoints: {
    heroes: 'https://nodejs-example-app.herokuapp.com/heroes',
    materials: 'C:\Users\ldubb\Documents\Github\angular5-example-app\src\app\items\shared\materials.json'
  },
  votesLimit: 3,
  topHeroesLimit: 4,
  repositoryURL: 'https://github.com/Ismaestro/angular5-example-app'
};
