import React, { useState } from "react";
import "../styles/Style.scss";
import avatar from "../images/Avatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase/Config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate ,Link} from "react-router-dom";

function Register() {
  const [error, setError] = useState(false);
  const NavigateTo = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const Password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, Password);
      console.log(res);
      // image upload start

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
        },
        (error) => {
          setError(true);
          console.log("here");
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "user", res.user.uid), {
              displayName,
              uid: res.user.uid,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChat", res.user.uid), {});
            NavigateTo("/");
          });
        }
      );

      //image upload end
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="formControl">
      <div className="formWrapper">
        <span className="logo">HurryUp</span>
        <br />
        <span className="formName">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" name="Name" placeholder="Name.." />
          <input type="email" name="email" placeholder="Email..." />
          <input type="password" name="password" placeholder="Password..." />
          <input
            style={{ display: "none", cursor: "pointer" }}
            type="file"
            id="file"
          />
          <label htmlFor="file">
            <img src={avatar} alt="Nothing" />
            <p>Add a logo</p>
          </label>
          <button type="submit">Register</button>
          {error && (
            <span style={{ color: "red" }}>Error Something went wrong</span>
          )}
        </form>
        <p>Do you have an account? <Link to='/login' >Login</Link></p>
      </div>
    </div>
  );
}

export default Register;
