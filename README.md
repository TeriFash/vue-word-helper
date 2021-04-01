## Anchor text helper project

> `yarn install`

🏃 Runs the Project setup <br />

🗃️ Create in directory `./src` the file `config.js` <br />
And insert firebase structure into it
```js script
  const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  }

  export {
    firebaseConfig
  }
```

> `yarn serve`

🚚 Runs the app in the development mode. Compiles and hot-reloads <br />
Open [localhost:8080](http://localhost:8080) to view it in the browser.

> `yarn build`

🎁 Builds the app for production. Compiles and minifies for production.<br />
It correctly bundles Vue in production mode and optimizes the build for the best performance.

See the section about [Configuration Reference](https://cli.vuejs.org/config/) for more information.

