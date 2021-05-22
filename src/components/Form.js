import React from "react";


const Form = (props) => {

    const [formData, setFormData] = React.useState({
        searchTerm: "",
    });

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.jobSearch(formData.searchTerm)
    };

    return (
      <div>
          <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name= "searchTerm"
                onChange={handleChange}
                value={formData.searchTerm}/>
              <input type="submit" value="search"/>
          </form>
      </div>
  );
};

export default Form;