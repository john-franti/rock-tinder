import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyBdBf_4SVxMbZICnrA5KzvlAfOowQlvlSw",
  authDomain: "rock-tinder.firebaseapp.com",
  databaseURL: "https://rock-tinder.firebaseio.com",
  projectId: "rock-tinder",
  storageBucket: "",
  messagingSenderId: "962230384259",
  appId: "1:962230384259:web:dd2c65812d2767ba"
};
var fire = firebase.initializeApp(firebaseConfig);
export default fire;
