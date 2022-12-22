import { useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { useAuthState } from "react-firebase-hooks/auth";
import {  Routes , Route, useNavigate } from "react-router-dom";
import { auth, provider } from "./firebase";

function App() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [showSidebar, setShowSidebar] = useState(false);

  const sidebar = () => {
    showSidebar === false ? setShowSidebar(true) : setShowSidebar(false);
  };

  const Signin = () => {
    auth
      .signInWithPopup(provider)
      .then(() => navigate("/"))
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      {!user ? Signin()  : <Routes>
        <Route exact path="/" element={
          <>
          <Header showSidebar={sidebar} /> 
          <Home showSidebar={showSidebar}  />
        </>
        }
        />
      </Routes>}
    </div>
  );
}

export default App;
