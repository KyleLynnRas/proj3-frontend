import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";


function Auth() {
  return (
    <div className="Auth">
      <Signup />
      <Login />
    </div>
  );
}

export default Auth;