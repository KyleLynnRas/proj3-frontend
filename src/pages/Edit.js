import { useState } from "react"
import {Form, Button} from "react-bulma-components";

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
        <section className="edit-title-container"><h1>Edit Form</h1></section>
        <section className="form-container">
        <form onSubmit={handleSubmit}>
          <Form.Field>
            <Form.Control>
              <Form.Label className="form-label-container">Notes</Form.Label><br></br>
              <Form.Textarea value={editForm.notes} name="notes" placeholder="Notes" onChange={handleChange}/><br></br>
              <h1>Applied</h1>
              <Form.Label for="Apply">Done</Form.Label>
              <Form.Checkbox type="checkbox" value={true} name="applied" onChange={handleChange}/><br></br>
              <Form.Label for="Apply">Not done</Form.Label>
              <Form.Checkbox type="checkbox" value={false} name="applied" onChange={handleChange}/><br></br>
              <h1>Interviewed</h1>
              <Form.Label for="Interview">Done</Form.Label>
              <Form.Checkbox type="checkbox" value={true} name="interviewed" onChange={handleChange}/><br></br>
              <Form.Label for="Interview">Not done</Form.Label>
              <Form.Checkbox type="checkbox" value={false} name="interviewed" onChange={handleChange}/><br></br>
              <h1>Cover Letter</h1>
              <Form.Label for="Cover_letter">Done</Form.Label>
              <Form.Checkbox type="checkbox" value={true} name="cover_letter" onChange={handleChange}/><br></br>
              <Form.Label for="Cover_letter">Not done</Form.Label>
              <Form.Checkbox type="checkbox" value={false} name="cover_letter" onChange={handleChange}/><br></br>
              <h1>Resume</h1>
              <Form.Label for="Resume">Done</Form.Label>
              <Form.Checkbox type="checkbox" value={true} name="resume" onChange={handleChange}/><br></br>
              <Form.Label for="Resume">Not done</Form.Label>
              <Form.Checkbox type="checkbox" value={false} name="resume" onChange={handleChange}/><br></br>
              <Button type="submit" value="UPDATE">UPDATE</Button>
            </Form.Control>
          </Form.Field>
        </form>
      </section>
    </div>
    );
  };

export default Edit;