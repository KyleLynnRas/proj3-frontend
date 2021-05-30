import JobCard from "../components/JobCard";

function Index(props){
    
  const loaded = () => {
    return props.jobs.map((job) => (
      <JobCard key={job._id} id={job._id} title={job.title} salary={job.salary} candidate_required_location={job.candidate_required_location} type={job.job_type}/>
    ));
  };
 
  const loading = () => {
    return(
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  };
  
  useEffect(() => {
    console.log(props.token)
    if (props.token) {
    } else {
      props.history.push('/auth/login')
    }
  }, [])

  return(
    <div className="index-container">
      <section className="title-container">
        <h1>npm Start Career</h1>
      </section>
      <section className="index-title-container">
        <h2>My jobs</h2>
      </section>
      <section className="section">
      {props.jobs && props.jobs instanceof Array ? loaded() : loading()}
      </section>
    </div>
    );
  };
  
  export default Index;