import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Search from "../pages/Search";
import Edit from "../pages/Edit";


function Main(props){

  const URL = "https://proj3-backend.herokuapp.com/jobs/";

  const [jobs, setJobs] = useState(null);

  const getJobs = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setJobs(data);
  };

  //create new job from api results
  const createJob = async (newJob) => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob)
    });
    getJobs();
  };
    
  const deleteJobs = async (id) => {
    await fetch(URL + id, {
      method: 'delete'
    });
    getJobs();
  };

  useEffect(() => getJobs(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/jobs">
          <Index jobs={jobs}/>
        </Route>
        <Route 
          path="/jobs/search"
          render={(rp) => (
            <Search
            jobs={jobs}
            createJob={createJob}
              {...rp}
            />
          )}
        />
        <Route 
          path="/jobs/:id/edit"
          render={(rp) => (
            <Edit
            jobs={jobs}
              {...rp}
            />
          )}
        />
        <Route
          path="/jobs/:id"
          render={(rp) => (
            <Show jobs={jobs}
            deleteJobs={deleteJobs}
              {...rp}
            />
          )}
        />
      </Switch>
    </main>
  );
};
  
export default Main;
