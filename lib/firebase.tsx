import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5yWb6CPWykfWdZez9obxu3S4BB7aOB-8",
    authDomain: "forum-b06ac.firebaseapp.com",
    projectId: "forum-b06ac",
    storageBucket: "forum-b06ac.appspot.com",
    messagingSenderId: "390478223263",
    appId: "1:390478223263:web:a72ed5ab52444253f6cfaa",
    measurementId: "G-NXZB7N7478"
  };

  if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }


  export const auth = firebase.auth();
  export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  export const firestore = firebase.firestore();
  export const storage = firebase.storage();
  export const fromMillis = firebase.firestore.Timestamp.fromMillis;


  ///Helper functions

  /**
   * Get a users/{uid} document with username
   * @param {string} username 
   */

  export async function getUserWithUsername(username) {
      const userRef = firestore.collection('users');
      const query = userRef.where('username', '==', username);
      const userDoc = (await query.get()).docs[0];
      return userDoc;
  }

  /**
   * 
   * @param {DocumentSnapShot} doc 
   */

  export function postToJSON(doc){
      const data = doc.data();
      return {
          ...data,
          createdAt: data.createdAt.toMillis() || 0,
          updatedAt: data.updatedAt.toMillis() || 0,
      };
  }