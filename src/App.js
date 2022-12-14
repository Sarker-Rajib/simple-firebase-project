import './App.css';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase/firebase.init';
import { useState } from 'react';


const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookAuthProvider = new FacebookAuthProvider();

  const handleFbSignIn = () => {
    signInWithPopup(auth, facebookAuthProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.error('error', error);
      })
  }

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.error('error', error);
      })
  }

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      })
  }

  const handleGithubSignOut = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.error('error', error);
      })
  }


  return (
    <div className="App">

      {(!user.uid) ?
        <>
          <br />
          <button onClick={handleGoogleSignIn}>Google Sign in</button>
          <br />
          <button onClick={handleGithubSignOut}>github Sign in</button>
          <br />
          <button onClick={handleFbSignIn}>Fb Sign in</button>
        </>
        :
        <>
          <br /> <br />
          <button onClick={handleGoogleSignOut}>Sign Out</button>
        </>
      }

      {user.uid && <div>
        <p>User Name : {user.displayName}</p>
        {user.email &&
          <p>Email : {user.email}</p>
        }
        <img src={user.photoURL} alt={user.displayName} />
      </div>}
    </div>
  );
}

export default App;