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
          {/* For Job Title Search */}
        <form onSubmit={handleSubmit}>
              {/* <input 
                type="text" 
                name="searchTerm"
                onChange={handleChange}
                value={formData.searchTerm}/> */}
              <input type="text" value="Description"/>
                <select name="searchTerm" value={formData.searchTerm} onChange={handleChange}>
                    <option value="front%20end">Front End</option>
                    <option value="back%20end">Back End</option>
                    <option value="full%20stack">Full Stack</option>
                </select>
              <input type="submit" value="search"/>
        </form>
      </div>
    );
};

export default Form;