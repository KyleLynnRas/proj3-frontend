import JobCard from "../components/JobCard";

function Index(props){
    
  const loaded = () => {
    return props.jobs.map((job) => (
      <JobCard key={job._id} id={job._id} title={job.title} salary={job.salary} candidate_required_location={job.candidate_required_location} type={job.job_type}/>
    ));
  };
 
  const loading = () => {
    return(
      <div className="index-loading">
        <h1>Loading...</h1>
      </div>
    );
  };
  
  return(
    <div className="index-container">
      <section className="index-title-container">
        <h1>npm Start Career</h1>
      </section>
      <section className="section">
        {props.jobs ? loaded() : loading()}
      </section>
    </div>
    );
  };
  
  export default Index;