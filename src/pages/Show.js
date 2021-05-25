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
        <p>Apply at <a href={job.url} target='_blank' rel='noreferrer'>{job.url}</a>!</p>
        <p>Notes: {job.notes}</p>
        <div className='checkBoxes'>
          <p>I have <b>{job.applied === true ? '' : 'not'}</b> applied to this job.</p>
          <p>I have <b>{job.interviewed === true ? '' : 'not'}</b> interviewed at this job.</p>
          <p>I have <b>{job.cover_letter === true ? '' : 'not'}</b> submitted my cover letter.</p>
          <p>I have <b>{job.resume === true ? '' : 'not'}</b> submitted my resume.</p>
        </div>
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


  