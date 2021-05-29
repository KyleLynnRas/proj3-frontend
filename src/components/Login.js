import React from "react";

const Login = (props) => {

   const userURL = "https://proj3-backend.herokuapp.com/auth/";
    // const userURL = "http://localhost:8080/auth/"

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
        <div className="Login">
            <h1>Log-in</h1>
            <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange}/>
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange}/>
            <input type="submit" value="Login" />
            </form>
            <p>Or sign up <a href='/auth/signup'>here</a>!</p>
        </div>
    );
};

export default Login;

