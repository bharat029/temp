import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCMhV1PgQa9g5ql_JxHW8WFSQ9doeXdTG4",
    authDomain: "personawebsite-d3cae.firebaseapp.com",
    databaseURL: "https://personawebsite-d3cae.firebaseio.com",
    projectId: "personawebsite-d3cae",
    storageBucket: "personawebsite-d3cae.appspot.com",
    messagingSenderId: "371482197651",
    appId: "1:371482197651:web:e03f81182e25d983"
}

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export {
    storage, firebase as default 
}