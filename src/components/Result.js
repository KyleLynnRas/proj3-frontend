import React from "react";

const Result = (props) => {

  return (
    <div className="result-container">
        <h1>Title: {props.title}</h1>
        <h2>Company: {props.company_name}</h2>
        <h2>Location: {props.candidate_required_location}</h2>
        <h2>Salary: {props.salary}</h2>
        <h2>Description: {props.description}</h2>
        <a href={props.url}>Live app on Remotive</a>
    </div>
  );
};


export default Result;