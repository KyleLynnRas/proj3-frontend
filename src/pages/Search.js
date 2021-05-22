import React from "react";
import {useState} from "react";
import Form from "../components/Form"

function Search(props){

  const [job, setJob] = useState(null)

  //Api link
  const api = `https://remotive.io/api/remote-jobs?category=software-dev&limit=15&search=`

  //Api func
  const jobSearch = async (searchTerm) => {
    const response = await fetch(api)
    const data = await response.json()
    setJob(data)
  }

  const loaded = () => {
    //map through API results and create Result component for each
    return <h1>Results</h1>
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