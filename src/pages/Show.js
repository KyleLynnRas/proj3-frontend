import {useState} from "react";
import {Link} from 'react-router-dom';

function Show(props){
  const id = props.match.params.id;
  const jobs = props.jobs;
  const job = jobs.find(p => p._id === id);

  // State for form
  const [editForm, setEditForm] = useState(job);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm({...editForm, [event.target.name]: event.target.value});
  };

  // handleSubmit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateJobs(editForm);
    // Redirect back to index
    props.history.push('/');
  };

  const removeJobs = () => {
    console.log(job._id);
    props.deleteJobs(job._id);
    props.history.push('/jobs');
  };

    return (
      <div className='job'>
        <h1>{job.title} - {job.job_type}</h1>
        <h2>{job.company_name}</h2>
        <h2>{job.candidate_required_location} - {job.salary}</h2>
        <p>Apply at <a href={job.url}>{job.url}</a>!</p>
        <p>{job.description}</p>
        <p>Notes: {job.notes}</p>
      <div className='buttons'>
        <Link to={`/jobs/${id}/edit`}>
          <button id='edit'>EDIT</button>
        </Link>
        <button id="delete" onClick={removeJobs}> DELETE </button>
      </div>
      </div>
    );
  }; 
  
  export default Show;


  