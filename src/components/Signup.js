import React from "react";
import { useState } from "react";
//Bulma
import {Form, Button} from "react-bulma-components";

const Signup = (props) => {

    const userURL = "https://proj3-backend.herokuapp.com/auth/";
    // const userURL = "http://localhost:8080/auth/"

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
        <div className="signup-container">
            <section className="login-title-container">
                <h1>Sign Up</h1>
            </section>
            <section className="signup-content">
              <form onSubmit={handleSubmit}>
                <Form.Field>
                    <Form.Label className="auth-label">Username</Form.Label>
                    <Form.Input className="auth-input"  type="text" name="username" value={formData.username} onChange={handleChange}/>
                    <Form.Label className="auth-label">Password</Form.Label>
                    <Form.Input className="auth-input"  type="password" name="password" value={formData.password} onChange={handleChange}/>
                    <Button type="submit" value="Signup">Sign up</Button>
                </Form.Field>
              </form>
            </section>
        </div>
    );
};

export default Signup;