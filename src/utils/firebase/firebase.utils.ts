import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { Category } from "../../store/categories/category.types";

const firebaseConfig = {
  apiKey: "AIzaSyAJ0u_V-LQXTWTvh-7hYXwsWHPEdGsKg7Y",
  authDomain: "crwn-clothing-db-2022.firebaseapp.com",
  projectId: "crwn-clothing-db-2022",
  storageBucket: "crwn-clothing-db-2022.appspot.com",
  messagingSenderId: "901532404776",
  appId: "1:901532404776:web:96296e803dc93a8cb2f91d",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Authentication properties
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export type AdditionalInfo = {
  displayName?: string;
};

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

// Firestore properties
export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInfo = {} as AdditionalInfo
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;

  const { uid, email, displayName, photoURL } = userAuth;
  const userDocRef = doc(db, "users", uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    // Create document
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        photoURL,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("Error creating the user", error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export type ObjectToAdd = {
  title: String;
};

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: ObjectToAdd[]
) => {
  const colRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(colRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const colRef = collection(db, "categories");
  const q = query(colRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category
  );
};

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
