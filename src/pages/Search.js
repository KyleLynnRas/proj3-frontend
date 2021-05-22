import React from "react";
import {useState} from "react";
import Form from "../components/Form"

function Search(props){
  //api data 
  const [job, setJob] = useState(null)

  //Api func to set job state 
  const jobSearch = async (searchTerm) => {
    const response = await fetch(`https://remotive.io/api/remote-jobs?search=${searchTerm}`)
    const data = await response.json()
    setJob(data)
  }

  const loaded = () => {
    console.log(job)
    //map through API results and create Result component for each
    return(
        <>
        <h1>results</h1>
        <p>location: {job.jobs[0].candidate_required_location}</p>
        </>
      )
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return(
    <div className="search-container">
      <h1>Search for jobs</h1>
      <Form jobSearch={jobSearch} />
      {job ? loaded() : loading()}
    </div>
    )
  } 
  
  export default Search;
