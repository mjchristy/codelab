/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyDWxyTHyQQLq2ZlnRTmZCXUjOJmO8dA-xw",
  authDomain: "ux-codelab-demo.firebaseapp.com",
  databaseURL: "https://ux-codelab-demo-default-rtdb.firebaseio.com",
  projectId: "ux-codelab-demo",
  storageBucket: "ux-codelab-demo.appspot.com",
  messagingSenderId: "118009539228",
  appId: "1:118009539228:web:fbb33d8037705a773f1b59",
  measurementId: "G-PZ1GDSZNBN"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}