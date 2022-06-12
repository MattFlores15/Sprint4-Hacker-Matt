// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDoc, query, where, getDocs, orderBy } from "firebase/firestore";

// We get the keys from our .env file. You can use these files to store
// sensitive information so you don't put this in git.
// Ideally you'll want this stored in the backend so it doesn't get
// outputted to the frontend entirely.
// Learn more here: https://www.freecodecamp.org/news/heres-how-you-can-actually-use-node-environment-variables-8fdf98f53a0a/

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIREBASE_APIKEY}`,
  authDomain: `${import.meta.env.VITE_FIREBASE_AUTHDOMAIN}`,
  projectId: `${import.meta.env.VITE_FIREBASE_PROJECTID}`,
  databaseURL: `${import.meta.env.VITE_FIREBASE_DATABASEURL}`,
  storageBucket: `${import.meta.env.VITE_FIREBASE_STORAGEBUCKET}`,
  messagingSenderId: `${import.meta.env.VITE_FIREBASE_MESSASINGSENDERID}`,
  appId: `${import.meta.env.VITE_FIREBASE_APPID}`,
};

console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const writeUserData = async (name, points) => {
  console.log("send data");

  const docRef = await addDoc(collection(db, "Students"), {
        name: name,
        points: points
        });
  
}

//Export data from FB
export const getStudents = async () =>{
//   console.log("get data");

    // const q = query(collection(db, "Students"), where("name", "==", "Winnie the Pooh"));
    const students = []
    const querySnapshot = await getDocs(collection(db, "Students"), orderBy("points"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        students.push(doc.data())
      });
  return students
}

// const readData = function readData() {


// }
// export default readData
