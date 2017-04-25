import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAes6qqoHkXIRYUy5SvdmDgq1w9xBy2C5I",
    authDomain: "mead-todo-app-e5d05.firebaseapp.com",
    databaseURL: "https://mead-todo-app-e5d05.firebaseio.com",
    projectId: "mead-todo-app-e5d05",
    storageBucket: "mead-todo-app-e5d05.appspot.com",
    messagingSenderId: "725707856634"
};
firebase.initializeApp(config);

firebase.database().ref().set({
    appName: 'Todo App'
});