// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAkfHDChKn3IShBedvdGl67ik2NGi-ncUc",

  authDomain: "bocadillogeneratorweb.firebaseapp.com",

  projectId: "bocadillogeneratorweb",

  storageBucket: "bocadillogeneratorweb.appspot.com",

  messagingSenderId: "227649395609",

  appId: "1:227649395609:web:0ac163ca2370734d151108",

  measurementId: "G-BZ857GFN68"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const db = getFirestore(app);