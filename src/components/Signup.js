import React from "react";
import { useState } from "react"

const Signup = (props) => {

    // const userURL = "https://proj3-backend.herokuapp.com/auth/";
    const userURL = "http://localhost:8080/auth/"

    const createUser = async (newUser) => {
        await fetch(userURL + "signup", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser)
        });
        props.history.push('/auth/login')
        console.log(newUser)
      };

    const [formData, setFormData] = React.useState({
        username: "",
        password: ""
    });
    
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        createUser(formData)
    };
    
    return (
        <div className="Signup">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange}/>
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange}/>
            <input type="submit" value="Signup" />
            </form>
        </div>
    );
};

export default Signup;