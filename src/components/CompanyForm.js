import React from "react";


const CompanyForm = (props) => {

    const [formData, setFormData] = React.useState({
        searchTerm: "",
    });

    const handleChange2 = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    };

    const handleSubmit2 = (event) => {
        event.preventDefault();
        props.jobSearch(formData.searchTerm)
    };

    return (
      <div>
        <form onSubmit={handleSubmit2}>
              <input 
                type="text" 
                name="searchTerm"
                onChange={handleChange2}
                value={formData.searchTerm}/>
                <input type="text" value="Company"/>
              <input type="submit" value="search"/>
        </form>
      </div>
    );
};

export default CompanyForm;