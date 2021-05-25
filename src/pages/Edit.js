import { useState } from "react"
import { Link } from "react-router-dom"


function Edit(props) {
  const id = props.match.params.id;
  const jobs = props.jobs;
  const job = jobs.find(p => p._id === id);

  // state for form
  const [editForm, setEditForm] = useState(job);

  // handleChange function for form
  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value })
  }

  // handlesubmit for form
const handleSubmit = event => {
  console.log(editForm);
    event.preventDefault();
    props.updateJobs(editForm, job._id);
  // redirect jobs to index
    props.history.push(`/jobs/${id}`);
}

    const removeJobs = () => {
      console.log(job._id);
      props.deleteJobs(job._id);
      props.history.push(`/jobs`);
    };


  return (
      <div className='job'>
  <form onSubmit={handleSubmit}>
    <h1>Edit Form</h1>
    <textarea value={editForm.notes} name="notes" placeholder="Notes" onChange={handleChange}></textarea><br></br>
    <label for="Apply">Applied</label>
    <input type="checkbox" value={editForm.applied} name="applied" onChange={handleChange}></input><br></br>
    <label for="Interview">Interviewed</label>
    <input type="checkbox" value={editForm.interviewed} name="interviewed" onChange={handleChange}></input><br></br>
    <label for="Cover_letter">Cover Letter</label>
   <input type="checkbox" value={editForm.cover_letter} name="cover_letter" onChange={handleChange}></input><br></br>
    <label for="Resume">Resume</label>
    <input type="checkbox" value={editForm.resume} name="resume" onChange={handleChange}></input>
    <br></br>
    <input type="submit" value="UPDATE" />
  </form>
      </div>
    );
  };

export default Edit;