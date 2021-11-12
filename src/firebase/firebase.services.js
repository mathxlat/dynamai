import { collection, addDoc, Timestamp } from "firebase/firestore";
import { logEvent } from "firebase/analytics";

import { analytics, firestore } from "./firebase.connect";

export const firebaseAnalytics = data => {
    logEvent(analytics, data)
}

export const createUser = async (nameCollection, user) => {
    try {
        await addDoc(collection(firestore, nameCollection), {
            date: Timestamp.fromDate(new Date()),
            user
        });
    } catch(e) {
        console.error(e);
    }
}