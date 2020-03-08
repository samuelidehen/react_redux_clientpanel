import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { createFirestoreInstance } from "redux-firestore";
import notifyReducer from "./reducers/notifyReducer";

const firebaseConfig = {
  apiKey: "AIzaSyA4rog0vk35CUpjTC903niVGUyjA82-rm4",
  authDomain: "react-reduxclientpanel.firebaseapp.com",
  databaseURL: "https://react-reduxclientpanel.firebaseio.com",
  projectId: "react-reduxclientpanel",
  storageBucket: "react-reduxclientpanel.appspot.com",
  messagingSenderId: "735046187259",
  appId: "1:735046187259:web:2a81f52657da4faf04985e",
  measurementId: "G-DPRZZKVPR5"
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const initialState = {};

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer
});

const store = createStore(
  rootReducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};
export default store;
