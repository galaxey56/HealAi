import "./App.css";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard";
import SignUpIn from "./Pages/SignUp_In";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false);
  // const auth = getAuth();
  // const user = auth.currentUser;
  console.log(user);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setUser(true);
      // ...
    } else {
      // User is signed out
      // ...
      setUser(false);
    }
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route
          element={!user ? <SignUpIn /> : <Navigate to="/dashboard" />}
          path="/account"
        />
        <Route
          element={
            user ? (
              <>
                <NavBar />
                <DashBoard />
              </>
            ) : (
              <Navigate to="/account" />
            )
          }
          path="/dashboard"
        />
      </Routes>
    </div>
  );
}

export default App;
