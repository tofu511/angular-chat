// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "YOUR API KEY",
    authDomain: "angular-chat-f6169.firebaseapp.com",
    databaseURL: "https://angular-chat-f6169.firebaseio.com",
    projectId: "angular-chat-f6169",
    storageBucket: "angular-chat-f6169.appspot.com",
    messagingSenderId: "134202540003"
  }
};
