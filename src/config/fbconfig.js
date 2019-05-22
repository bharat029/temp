import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyAmwNvpWiUVmxf7bDN2vBUwoP2AlWQzl1E",
  authDomain: "personalwebsite-118af.firebaseapp.com",
  databaseURL: "https://personalwebsite-118af.firebaseio.com",
  projectId: "personalwebsite-118af",
  storageBucket: "personalwebsite-118af.appspot.com",
  messagingSenderId: "173442798699",
  appId: "1:173442798699:web:57cc5f10cb945c90"
}

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true })

const storage = firebase.storage()

export {
    storage, firebase as default 
}