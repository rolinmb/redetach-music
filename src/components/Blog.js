import './Blog.css';
import React, { useRef, useState } from 'react';
import { firebaseConfig } from '../fbase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const Blog = () => {
  const [user] = useAuthState(auth);

  return (
    <div id='blog-wrap'>
      <div id='blog-header-wrap'>
        <h3>re detach blog</h3>
        <SignOut />
      </div>
      <div id='blog-body-wrap'>
        {user ? <BlogPosts /> : <SignIn/>}
      </div>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div id='signin-wrap'>
      <button id='signin-btn' onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
}

function SignOut() {
  return auth.currentUser && (
    <div id='signout-wrap'>
      <button id='signout-btn' onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
}

function BlogPosts() {
  const dummy = useRef();
  const postsRef = db.collection('posts');
  const query = postsRef.orderBy('createdAt').limit(25);
  const [posts] = useCollectionData(query, { idField: 'id'});
  const [formValue, setFormValue] = useState('');

  const createPost = async(e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await postsRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid: uid,
      photoURL: photoURL,
      likes: 0,
    });
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  function PostForm() {
    return (
      <form id='post-form' onSubmit={createPost}>
        <input id='post-text-input' value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder='say something!'/>
        <button type='submit' disabled={!formValue}>Submit Post</button>
      </form>
    );
  }

  function Post(props) {
    const { text, uid, createdAt, photoURL, likes } = props.content;
    const [curLikes, setCurLikes] = useState(likes);
    const messageClass = uid === auth.currentUser.uid ? 'submitted' : 'posted';
    const incrementLikes = async(e) => {
      const postRef = db.collection('posts').doc(props.key);
      try {
        const doc = await postRef.get();
        if (doc.exists) {
          const currentLikes = doc.data().likes;
          setCurLikes(currentLikes + 1);
          await postRef.update({likes: currentLikes + 1});
        }
      } catch (error) {
        console.error("Error incrementing likes:", error);
      }
    }
    return (
      <div id={'message '+messageClass}>
        <img alt='' src={photoURL || 'ttps://api.adorable.io/avatars/23/abott@adorable.png'} />
        <p>{createdAt && createdAt.toDate().toLocaleString()}</p>
        <p>{text}</p>
        {/*<p>Likes: {curLikes}</p>
        <button onClick={e => incrementLikes(e)}>👍</button>*/}
      </div>
    );
  }

  return (
    <div id='posts-wrap'>
      <div id='live-posts-wrap'>
        {posts && posts.map((post) => <Post key={post.id} content={post} />)}
        <span ref={dummy}></span>
      </div>
      {auth.currentUser && (auth.currentUser.email === 'rmbmusicmgmt@gmail.com') ? <PostForm /> : <></>}
    </div>
  ); 
}

export default Blog;