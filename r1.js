// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW8rJcsaC1VXigYA4V12LZQ0u6njZJH3k",
  authDomain: "ieeewie-75caa.firebaseapp.com",
  projectId: "ieeewie-75caa",
  storageBucket: "ieeewie-75caa.appspot.com",
  messagingSenderId: "19064670085",
  appId: "1:19064670085:web:08cb17bcdbd85c34d926ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

document.getElementById("submit").addEventListener('click',function(e){
    set(ref(db,'user/' + document.getElementById("name").value),
    {
    name: document.getElementById("name").value,
    email:document.getElementById("email-id").value,
    PhoneNumber:document.getElementById("phonee").value
    })
    alert("Login Successfull !!")
})