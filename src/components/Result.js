import React from "react";
//Bulma
import {Card, Button} from "react-bulma-components";
//icons
import {BiLinkAlt} from "react-icons/bi";

const Result = (props) => {

  return (
      <Card className="result-container">
        <Card.Content className="result-card-content">
          <h1 className="search-res-title">{props.title}</h1>
          <h2>Company: {props.company_name}</h2>
          <h2>Location: {props.candidate_required_location}</h2>
          <h2>{props.salary}</h2>
          <h2>Type: {props.job_type}</h2>
          <section className="result-card-btn-box">
            <a href={props.url} target="_blank" rel="noreferrer" className="result-link result-btn"><BiLinkAlt /></a><br/>
            <Button className="save-btn result-btn" onClick={props.handleChange} id={props.id}><i id={props.id}class="fas fa-file-download"></i></Button>
          </section>
        </Card.Content>
      </Card>
  );
};


export default Result;