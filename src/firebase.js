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

export default firebase
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = firebase.firestore();
  const sectionsCollection = db.collection("sections").doc('sections');
  // const storageCollection = firebase.default.storage();

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// export const db = firebaseApp.firestore();

export {
  db,
  sectionsCollection,
  // storageCollection
}
// export default firebase
