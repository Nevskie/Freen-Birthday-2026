// Firebase Configuration

const firebaseConfig = {
  apiKey: "AIzaSyDHpeJrpPkZkbY0nSJ0XzF6QNNP0Edbqm4",
  authDomain: "freen-birthday-2026.firebaseapp.com",
  projectId: "freen-birthday-2026",
  storageBucket: "freen-birthday-2026.firebasestorage.app",
  messagingSenderId: "524544431030",
  appId: "1:524544431030:web:9a76fe4fdbc91073d56717",
  measurementId: "G-ZH7TY98B01"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Create Firestore database
const db = firebase.firestore();


console.log("Firebase Connected 💜");