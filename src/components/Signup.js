import React from "react";
import { useState } from "react"

const Signup = (props) => {

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
        <div className="Signup">
            <h1>Sign-in</h1>
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