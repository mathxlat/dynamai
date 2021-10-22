import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

import { firebaseConfig } from './firebase.config';


const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const analytics = getAnalytics(app);
