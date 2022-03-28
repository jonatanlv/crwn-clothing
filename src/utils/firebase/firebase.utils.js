import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJ0u_V-LQXTWTvh-7hYXwsWHPEdGsKg7Y",
  authDomain: "crwn-clothing-db-2022.firebaseapp.com",
  projectId: "crwn-clothing-db-2022",
  storageBucket: "crwn-clothing-db-2022.appspot.com",
  messagingSenderId: "901532404776",
  appId: "1:901532404776:web:96296e803dc93a8cb2f91d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Authentication properties
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Firestore properties
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const { uid, email, displayName, photoURL } = userAuth;
  const userDocRef = doc(db, "users", uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    // Create document
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt, photoURL });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  } else {
    return userDocRef;
  }
};
