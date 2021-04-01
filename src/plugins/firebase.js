import { firebase } from "@firebase/app";
import "@firebase/firestore";
import { firebaseConfig } from "@/config";

// const firebaseConfig = {
//   apiKey: "",
//     authDomain: "",
//     projectId: "",
//     storageBucket: "",
//     messagingSenderId: "",
//     appId: ""
// }

firebase.initializeApp(firebaseConfig);

// export default firebase
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app();

  // const db = firebase.firestore();
  // const sectionsCollection = db.collection("sections").doc('sections');
  // const storageCollection = firebase.default.storage();

export default {
  install(Vue, options) {
    // const { job } = options
    Vue.VERSION = 'v2.6.11';
    Vue.prototype.$db = firebase.firestore()
    // Vue.prototype.$myInfo = (name, age) => info(name, age, job)

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

