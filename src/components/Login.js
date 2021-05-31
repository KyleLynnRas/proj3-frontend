import React from "react";
//Bulma
import {Form, Button} from "react-bulma-components";

const Login = (props) => {

   const userURL = "https://proj3-backend.herokuapp.com/auth/";
  //  const userURL = "http://localhost:8080/auth/";

    const userLogIn = async (loggedInUser) => {
        const response = await fetch(userURL + "login", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loggedInUser)
        });
        const data = await response.json()
        props.getToken(data.data.token)
        props.history.push('/jobs');
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
        userLogIn(formData)
    };
    
    return (
        <div className="login-container">
           <section className="login-title-container">
            <h1>Log-in</h1>
          </section>
          <section className="login-content">
            <form onSubmit={handleSubmit}>
              <Form.Field>
                <Form.Label className="auth-label">Username</Form.Label>
                <Form.Input className="auth-input" type="text" name="username" value={formData.username} onChange={handleChange}/>
                <Form.Label className="auth-label">Password</Form.Label>
                <Form.Input className="auth-input" type="password" name="password" value={formData.password} onChange={handleChange}/>
                <Button className="auth-btn is-small" type="submit" value="Login">Login</Button>
              </Form.Field>
            </form>
          </section>
          <section className="signup-box">
              <p>Or sign up <a href='/auth/signup'>here</a>!</p>
          </section>
        </div>
    );
};

export default Login;

