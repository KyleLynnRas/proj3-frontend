import React from "react";
import { useState } from "react"

const Login = (props) => {

    const [formData, setFormData] = React.useState({
        username: "",
        password: ""
    });
    
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createUser(formData)
    };
    
    return (
        <div className="Login">
            <h1>Log-in</h1>
            <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange}/>
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange}/>
            <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;

