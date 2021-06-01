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
          <h1>Applied</h1>
            <label for="Apply">Done</label>
            <input type="checkbox" value={true} name="applied" onChange={handleChange}></input><br></br>
            <label for="Apply">Not done</label>
            <input type="checkbox" value={false} name="applied" onChange={handleChange}></input><br></br>
          <h1>Interviewed</h1>
            <label for="Interview">Done</label>
            <input type="checkbox" value={true} name="interviewed" onChange={handleChange}></input><br></br>
            <label for="Interview">Not done</label>
            <input type="checkbox" value={false} name="interviewed" onChange={handleChange}></input><br></br>
          <h1>Cover Letter</h1>
            <label for="Cover_letter">Done</label>
            <input type="checkbox" value={true} name="cover_letter" onChange={handleChange}></input><br></br>
            <label for="Cover_letter">Not done</label>
            <input type="checkbox" value={false} name="cover_letter" onChange={handleChange}></input><br></br>
          <h1>Resume</h1>
            <label for="Resume">Done</label>
            <input type="checkbox" value={true} name="resume" onChange={handleChange}></input><br></br>
            <label for="Resume">Not done</label>
            <input type="checkbox" value={false} name="resume" onChange={handleChange}></input><br></br>
            <input type="submit" value="UPDATE" />
        </form>
      </div>
    );
  };

export default Edit;