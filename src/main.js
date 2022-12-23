import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBr0KVWusFMqi6R9YG-gKrhUyrUsVyGsEk",
    authDomain: "jackspets-ba169.firebaseapp.com",
    projectId: "jackspets-ba169",
    storageBucket: "jackspets-ba169.appspot.com",
    messagingSenderId: "1004901249560",
    appId: "1:1004901249560:web:a66db2f4280023bf8e496d",
    measurementId: "G-0E8VYHL8Y2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(router).mount('#app')





