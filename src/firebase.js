import firebase from 'firebase'

const firebaseApp =firebase.initializeApp( {
    apiKey: "AIzaSyB02VGTQKeszEfWQ9TzCwZKHb6_wmGk6hM",
    authDomain: "e-clone-43320.firebaseapp.com",
    projectId: "e-clone-43320",
    storageBucket: "e-clone-43320.appspot.com",
    messagingSenderId: "554578920187",
    appId: "1:554578920187:web:d7b8d32969858814fba65e"
  });

  const auth=firebase.auth();

  export {auth};