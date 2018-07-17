import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken('app.config');
export const SERVER_URL = 'http://localhost:8087';

const API_ROOT = SERVER_URL + '/estacionamiento/api';

export const AppConfig = {
  endpoints: {
    owners: API_ROOT + '/vehiculos'
  },
  snackBarDuration: 4000,
 
  actions: {
    VIEW: 'view',
    CREATE: 'create',
    UPDATE: 'update',
    DELETE: 'delete',
    SHOW_FORM: 'showForm',
  }
};

