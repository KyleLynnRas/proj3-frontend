import React from "react";
import {useState, useEffect} from "react";
import SpecialtyForm from "../components/SpecialtyForm";
import CompanyForm from "../components/CompanyForm";
import Result from "../components/Result";
//Bulma
import {Card} from "react-bulma-components";
//icons
import {BiLinkAlt} from "react-icons/bi";

function Search(props){
  //api data 
  const [job, setJob] = useState(null);

  //Api func to set job state 
  const jobSearch = async (searchTerm, parameter) => {
    const response = await fetch(`https://remotive.io/api/remote-jobs?${parameter}=${searchTerm}`);
    const data = await response.json();
    setJob(data);
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
    props.createJob(newJob);
    props.history.push("/jobs");
  };


  const loaded = () => {
    const jobArr = job.jobs;
    if (jobArr.length === 0) {
      return(
        <div className="loading">
          <h1>Sorry no results this time, please try another company</h1>
        </div>
      ) 
    } else {
    //map through API results and create Result component for each
    return(
      <div className="search-loaded">
        <section className="loaded-title">
          <h1>Results</h1>
        </section>
        <section className="result-list-container">
            {jobArr.map((ele, index) => {
              if (index <= 14) {
                return <Result key={index} id={index} title={ele.title} company_name={ele.company_name} 
                candidate_required_location={ele.candidate_required_location} salary={ele.salary} 
                url={ele.url} job_type={ele.job_type} handleChange={handleChange}/>
              };
            })}
        </section>
        <section className="remotive-blurb">
        <p><span><BiLinkAlt /></span><a href="https://remotive.io/" target='_blank' rel='noreferrer'>Results from Remotive's API</a></p>
        </section>
      </div>
      );
    };
  };

  const loading = () => {
    return(
      <div className="loading">
        <h1>Search for a job to begin</h1>
      </div>
    ) 
  };

  useEffect(() => {
    if (props.token) {
    } else {
      props.history.push('/auth/login')
    }
  }, [])

  return(
    <div className="search-container">
      <section className="search-title-container">
          <Card className="search-box">
            <SpecialtyForm jobSearch={jobSearch} />
          </Card>
          <h1>Search for jobs</h1>
          <Card className="search-box-2">
            <CompanyForm jobSearch={jobSearch} />
          </Card>
      </section>
      {job ? loaded() : loading()}
    </div>
    );
  };
  
  export default Search;
