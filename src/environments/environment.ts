// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDtfd3S2MgPdOfYZtH2AkbzV5--pBMFAf8',
    authDomain: 'dev-meetings-chat.firebaseapp.com',
    databaseURL: 'https://dev-meetings-chat.firebaseio.com',
    projectId: 'dev-meetings-chat',
    storageBucket: 'dev-meetings-chat.appspot.com',
    messagingSenderId: '733168859783'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
