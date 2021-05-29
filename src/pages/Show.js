import {Link} from 'react-router-dom';
//icons
import {BiLinkAlt} from "react-icons/bi";
import {FiXCircle, FiCheckCircle} from "react-icons/fi";

function Show(props){
  const id = props.match.params.id;
  const jobs = props.jobs;
  const job = jobs.find(p => p._id === id);

  const removeJobs = () => {
    console.log(job._id);
    props.deleteJobs(job._id);
    props.history.push('/jobs');
  };

    return (
      <div className="show-container">
          <section className="show-title-container">
            <h1 className="show-title-text">{job.title}</h1>
          </section>
        <section className="show-content">
            <h1>Your-MacBook-Air: User$ cd unit-3-project</h1>
            <h1>Your-MacBook-Air:unit-3-project User$ npm start career</h1>
            <h1 className="show-console-one">{job.title} - {job.job_type}</h1>
            <h2>Company: {job.company_name}</h2>
            <h2>Location: {job.candidate_required_location}</h2>
            <h2>Salary: {job.salary}</h2>
            <a href={job.url} target='_blank' rel='noreferrer' className="console-link">Apply on Remotive<span className="console-link-span"><BiLinkAlt className="console-link-i"/></span></a>
            <section className="show-notes">
              <h2>Your-MacBook-Air:unit-3-project User$ cd Notes</h2>
              <p>{job.notes}</p>
            </section>
            <div className="show-checkBoxes">
              <h2>Progress:</h2>
              <p><span className="show-icon-span">{job.applied === true ? <FiCheckCircle className="show-check-yes"/>: <FiXCircle className="show-check-no"/> }</span>I have applied to this job</p>
              <p><span className="show-icon-span">{job.applied === true ? <FiCheckCircle className="show-check-yes"/>: <FiXCircle className="show-check-no"/> }</span>I have interviewed at this job</p>
              <p><span className="show-icon-span">{job.applied === true ? <FiCheckCircle className="show-check-yes"/>: <FiXCircle className="show-check-no"/> }</span>I have submitted my cover letter</p>
              <p><span className="show-icon-span">{job.applied === true ? <FiCheckCircle className="show-check-yes"/>: <FiXCircle className="show-check-no"/> }</span>I have submitted my resume</p>
            </div>
          </section>
          <section className='show-buttons'>
            <Link to={`/jobs/${id}/edit`}>
              <button id='edit'><i class="fas fa-edit"></i></button>
            </Link>
            <button id="delete" onClick={removeJobs}><i class="fas fa-trash"></i></button>
          </section>
      </div>
    );
  }; 
  
  export default Show;


  