import React from "react";
import {useState} from "react";
import Form from "../components/Form";
import Result from "../components/Result";

function Search(props){
  //api data 
  const [job, setJob] = useState(null);

  //Api func to set job state 
  const jobSearch = async (searchTerm) => {
    const response = await fetch(`https://remotive.io/api/remote-jobs?search=${searchTerm}`);
    const data = await response.json();
    setJob(data)
  };

  //add job to db
  const handleChange = (e) => {
    const jobId = e.target.id;
    const savedJob = job.jobs[jobId];
    //job to add
    const newJob = {
      title: savedJob.title,
      company_name: savedJob.company_name,
      job_type: savedJob.job_type,
      candidate_required_location: savedJob.candidate_required_location,
      salary: savedJob.salary,
      url: savedJob.url
    };
    props.createJob(newJob)
    props.history.push("/jobs")
  };


  const loaded = () => {
    const jobArr = job.jobs;
    //map through API results and create Result component for each
    return(
        <div className="result-list-container">
          <h1>Results</h1>
            {jobArr.map((ele, index) => {
              if (index <= 14) {
                return <Result key={index} id={index} title={ele.title} company_name={ele.company_name} 
                candidate_required_location={ele.candidate_required_location} salary={ele.salary} 
                url={ele.url} job_type={ele.job_type} handleChange={handleChange}/>
              };
            })};
        </div>
      );
  };

  const loading = () => {
    return <h1>Search for a job to begin</h1>
  };

  return(
    <div className="search-container">
      <h1>Search for jobs</h1>
      <Form jobSearch={jobSearch} />
      {job ? loaded() : loading()}
    </div>
    );
  };
  
  export default Search;
