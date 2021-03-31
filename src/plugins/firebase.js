// import {firebase} from "@firebase/app";
// import "@firebase/firestore";
// import "firebase/auth";
// import "@firebase/functions";

// const firebaseConfig = {
  
//   apiKey: "AIzaSyAud1ZUlWt9ED9Z0YcXcDOjOcN0wMqnrF4",
//   authDomain: "word-helper-reader.firebaseapp.com",
//   databaseURL: "https://word-helper-reader.firebaseio.com",
//     projectId: "word-helper-reader",
//     storageBucket: "word-helper-reader.appspot.com",
//     messagingSenderId: "345786730681",
//     appId: "1:345786730681:web:82226ed986c828106f3368"
// };

// firebase.initializeApp({
//   //add your api keys
//   apiKey: "AIzaSyAud1ZUlWt9ED9Z0YcXcDOjOcN0wMqnrF4",
//   databaseURL: "https://word-helper-reader.firebaseio.com",
//   authDomain: "word-helper-reader.firebaseapp.com",
//   projectId: "word-helper-reader",
//   storageBucket: "word-helper-reader.appspot.com",
//   messagingSenderId: "345786730681",
//   appId: "1:345786730681:web:82226ed986c828106f3368"

// });

// export const db = firebase.firestore();
  
// export {db}

// firebase.initializeApp(firebaseConfig);

// export default firebase;
import { firebase } from "@firebase/app";
import "@firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAud1ZUlWt9ED9Z0YcXcDOjOcN0wMqnrF4",
    authDomain: "word-helper-reader.firebaseapp.com",
    projectId: "word-helper-reader",
    storageBucket: "word-helper-reader.appspot.com",
    messagingSenderId: "345786730681",
    appId: "1:345786730681:web:82226ed986c828106f3368"
}

// export default firebase
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app();
// const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

  // const db = firebase.firestore();
  // const sectionsCollection = db.collection("sections").doc('sections');
  // const storageCollection = firebase.default.storage();

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// export const db = firebaseApp.firestore();

export default {
  install(Vue, options) {

    // merge default options with arg options
    // let userOptions = {...options};


    // define a global property
    // Vue.VERSION = 'v2.6.11';



    // define an instance method
    Vue.prototype.$db = firebase.firestore()

    // console.log(' ---➜ pl ', this, this.$db)

    // // add a custom directive
    // Vue.directive('focus', {
    //   // When the bound element is inserted into the DOM...
    //   inserted: function (el) {
    //     // Focus the element
    //     el.focus();
    //   }
    // })
  }
}

// export {
//   // db,
//   // sectionsCollection,
//   // storageCollection
// }
// export default firebase

