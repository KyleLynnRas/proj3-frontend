import React from "react";

const Result = (props) => {

  return (
    <div className="result-container">
        <h1>{props.title}</h1>
        <h2>Company: {props.company_name}</h2>
        <h2>Location: {props.candidate_required_location}</h2>
        <h2>Salary: {props.salary}</h2>
        <h2>Type: {props.job_type}</h2>
        <a href={props.url} target="_blank">Live app on Remotive</a>
        <button onClick={props.handleChange} id={props.id}>Save</button>
    </div>
  );
};


export default Result;