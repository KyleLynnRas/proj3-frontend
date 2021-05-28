import React from "react";
//Bulma
import {Form, Button} from "react-bulma-components";
//icons
import {ImSearch} from "react-icons/im";

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
        <form className="co-form" onSubmit={handleSubmit2}>
          <Form.Field className="co-form">
            <Form.Label className="search-form-label">Company</Form.Label>
              <Form.Control className="co-control">
                <Form.Input
                  className="co-input"
                  id="Company"
                  type="text" 
                  name="searchTerm"
                  onChange={handleChange2}
                  value={formData.searchTerm}>
                </Form.Input>
                <Button className="co-btn" type="submit" value="search"><ImSearch /></Button>
              </Form.Control>
          </Form.Field>
        </form>
        </div>
    );
};

export default CompanyForm;
