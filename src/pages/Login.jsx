import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [err, setErr] = useState(false);
  const NavigateTo = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          NavigateTo("/");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div className="formControl">
      <div className="formWrapper">
        <span className="logo">HurryUp</span>
        <br />
        <span className="formName">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email..." />
          <input type="password" name="password" placeholder="Password..." />
          <button type="submit">Sign in</button>
          {err && <span style={{ color: "red" }}>Something went wrong</span>}
        </form>
        <p>
          Do you have an account? <Link to="/signup"> Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
