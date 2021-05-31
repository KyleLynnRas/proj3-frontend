import { useState } from "react"
import {Form} from "react-bulma-components";

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

  return (
      <div className='edit-container'>
        <h1>Edit Form</h1>
        <form onSubmit={handleSubmit}>
          <textarea value={editForm.notes} name="notes" placeholder="Notes" onChange={handleChange}></textarea><br></br>
          <label for="Apply">Applied</label>
          <input type="checkbox" value={editForm.applied ? false : true} name="applied" onChange={handleChange}></input><br></br>
          <label for="Interview">Interviewed</label>
          <input type="checkbox" value={editForm.interviewed ? false : true} name="interviewed" onChange={handleChange}></input><br></br>
          <label for="Cover_letter">Cover Letter</label>
          <input type="checkbox" value={editForm.cover_letter ? false : true} name="cover_letter" onChange={handleChange}></input><br></br>
          <label for="Resume">Resume</label>
          <input type="checkbox" value={editForm.resume ? false : true} name="resume" onChange={handleChange}></input><br></br>
          <input type="submit" value="UPDATE" />
        </form>
      </div>
    );
  };

export default Edit;