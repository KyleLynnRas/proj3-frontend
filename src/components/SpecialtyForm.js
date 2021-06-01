import React from "react";
//Bulma
import {Form, Button} from "react-bulma-components";
//icons
import {ImSearch} from "react-icons/im";

const SpecialtyForm = (props) => {

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
        <form className="spec-form-container" onSubmit={handleSubmit}>
          <Form.Field>
            <Form.Label className="search-form-label">Specialty</Form.Label>
              <Form.Control className="spec-control">
                <Form.Select className="spec-input" name="searchTerm" value={formData.searchTerm} onChange={handleChange}>
                    <option id="Form" value="front%20end">Front End</option>
                    <option id="Form" value="back%20end">Back End</option>
                    <option id="Form" value="full%20stack">Full Stack</option>
                </Form.Select>
                <Button className="spec-btn" type="submit" value="search"><ImSearch /></Button>
              </Form.Control>
          </Form.Field>
        </form>
    );
};

export default SpecialtyForm;
