import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCe51vwBZUxxGL_ejrRNDIMlAaVgjLwCck",
  authDomain: "sub-portal.firebaseapp.com",
  projectId: "sub-portal",
  storageBucket: "sub-portal.firebasestorage.app",
  messagingSenderId: "96365968406",
  appId: "1:96365968406:web:22f1d4c44e5903bcb14937",
  measurementId: "G-H7RG38R0Y2"
};
const app =
initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider =
new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});