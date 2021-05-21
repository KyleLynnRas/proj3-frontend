import JobCard from "../components/JobCard"

function Index(props){
    
  const loaded = () => {
    return props.jobs.map((job) => (
      <JobCard key={job._id} id={job._id} title={job.title} salary={job.salary} candidate_required_location={job.candidate_required_location} type={job.job_type}/>
    ))
  }
 
  const loading = () => {
    return <h1>Loading..</h1>
  }
  
  return(
    <div className="index-container">
      <h1>App Title</h1>
      {props.jobs ? loaded() : loading()}
    </div>
    )
  } 
  
  export default Index;