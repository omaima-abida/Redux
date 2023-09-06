import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Initialize Firebase

const app = initializeApp({
    apiKey: "AIzaSyAzC_aE1B3AzweXXkSxhYnNNT62qcxiZ5U",
    authDomain: "reduximages-fc607.firebaseapp.com",
    projectId: "reduximages-fc607",
    storageBucket: "reduximages-fc607.appspot.com",
    messagingSenderId: "518130818856",
    appId: "1:518130818856:web:d6559014c518db0aadfa1d"
});
// Firebase storage reference
const storage = getStorage(app);
export default storage