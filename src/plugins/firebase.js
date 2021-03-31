import {firebase} from "@firebase/app";
import "@firebase/firestore";
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

firebase.initializeApp({
  //add your api keys
  apiKey: "AIzaSyAud1ZUlWt9ED9Z0YcXcDOjOcN0wMqnrF4",
  databaseURL: "https://word-helper-reader.firebaseio.com",
  authDomain: "word-helper-reader.firebaseapp.com",
  projectId: "word-helper-reader",
  storageBucket: "word-helper-reader.appspot.com",
  messagingSenderId: "345786730681",
  appId: "1:345786730681:web:82226ed986c828106f3368"

});

// export const db = firebase.firestore();
  
// export {db}

// firebase.initializeApp(firebaseConfig);

export default firebase;
