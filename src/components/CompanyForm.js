import React from "react";


const CompanyForm = (props) => {

    const [formData, setFormData] = React.useState({
        searchTerm: "",
        parameter: "company_name"
    });

    const handleChange2 = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    };

    const handleSubmit2 = (event) => {
        event.preventDefault();
        props.jobSearch(formData.searchTerm, formData.parameter)
    };

    return (
      <div>
        <h3>Company</h3>
        <form onSubmit={handleSubmit2}>
              <input id="Company"
                type="text" 
                name="searchTerm"
                onChange={handleChange2}
                value={formData.searchTerm}/>

              <input type="submit" value="search"/>
        </form>
      </div>
    );
};

export default CompanyForm;