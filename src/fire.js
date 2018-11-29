import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCCIh3YpL8NXEh-p7sqYIae1GLumblK0xw",
    authDomain: "reactnative-chatapp-c2322.firebaseapp.com",
    databaseURL: "https://reactnative-chatapp-c2322.firebaseio.com",
    projectId: "reactnative-chatapp-c2322",
    storageBucket: "reactnative-chatapp-c2322.appspot.com",
    messagingSenderId: "318133957734"
};
var fire = firebase.initializeApp(config);
export default fire;