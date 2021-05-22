import {useState} from "react"

function Show(props){
  const id = props.match.params.id
  const jobs = props.jobs
  const job = jobs.find(p => p._id === id)

  // State for form
  const [editForm, setEditForm] = useState(job)

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm({...editForm, [event.target.name]: event.target.value})
  }

  // handleSubmit function for form
  const handleSubmit = (event) => {
    event.preventDefault()
    props.updateJobs(editForm)
    // Redirect back to index
    props.history.push('/')
  }

  const removeJobs = () => {
    props.deletejobs(job._id)
    props.history.push('/')
  }

    return (
      <div className='job'>
        <h1>{job.title} - {job.job_type}</h1>
        <h2>{job.company_name}</h2>
        <h2>{job.candidate_required_location} - {job.salary}</h2>
        <p>Apply at <a href={job.url}>{job.url}</a>!</p>
        <p>{job.description}</p>
        <p>Notes: {job.notes}</p>
      <div className='buttons'>
        <button id="delete" onClick={removeJobs}> DELETE </button>
      </div>
      </div>
    )
  } 
  
  export default Show;