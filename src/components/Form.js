import React from "react";


const Form = (props) => {

    const [formData, setFormData] = React.useState({
        searchTerm: "front%20end",
        parameter: "search"
    });

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.jobSearch(formData.searchTerm, formData.parameter)
    };

    return (
      <div>
        <h3>Specialty</h3>
        <form onSubmit={handleSubmit}>
                <select name="searchTerm" value={formData.searchTerm} onChange={handleChange}>
                    <option id="Form" value="front%20end">Front End</option>
                    <option id="Form" value="back%20end">Back End</option>
                    <option id="Form" value="full%20stack">Full Stack</option>
                </select>
              <input type="submit" value="search"/>
        </form>
      </div>
    );
};

export default Form;
