import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "_",
  authDomain: "_",
  projectId: "_",
  storageBucket: "_",
  messagingSenderId: "_",
  appId: "_"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(email, password);
    console.log('Successfully signed in!');
    alert('Successfully signed in!');
  } catch (err) {
    switch (err.code) {
      case 'auth/missing-email':
        console.error('Please enter an email address.');
        alert('Please enter an email address.');
        break;
      case 'auth/invalid-email':
        console.error('Entered email address is invalid (potentially untrustworthy) or missing');
        alert('Entered email address is invalid (potentially untrustworthy) or missing');
        break;
      case 'auth/missing-password':
        console.error('Password is invalid or missing.');
        alert('Password is invalid or missing.');
        break;
      case 'auth/operation-not-allowed':
        console.error('Error during login.');
        alert('Error during login.');
        break;
      default:
        console.error(err.message);
        alert(err.message);
        break;
      }
  }
}

const logOut = () => {
  signOut(auth);
}

const createNewPost = async (textContent, postId) => {
  try {
    addDoc(collection(db, "posts"), {
      postID: postId,
      creator: String(auth.currentUser),
      timestamp: postId,
      content: textContent
    });
  } catch (err) {
    switch (err.code) {
      default:
        console.error(err.message);
        alert(err.message);
        break;
    }
  }
}

const fetchPosts = async () => {
  const snapshot = await getDocs(collection(db, 'posts'));
  return snapshot;
}

export { firebaseConfig, auth, db, createNewPost, fetchPosts, logInWithEmailAndPassword, logOut };