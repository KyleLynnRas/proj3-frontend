import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router"
import Index from "../pages/Index";
import Show from "../pages/Show";
import Search from "../pages/Search";
import Edit from "../pages/Edit";
import Login from "./Login";
import Signup from "./Signup";
import Home from "../pages/Home";

function Main(props){

  
  const URL = "https://proj3-backend.herokuapp.com/jobs/";
  // const URL = "http://localhost:8080/jobs/";
  
  const [token, setToken] = useState(null) 
  
  const getToken = (t) => {
   setToken(t)
  }

  const logOut = () => {
    setToken('')
  }

  const [jobs, setJobs] = useState(null);

  const getJobs = async () => {
    const response = await fetch(URL, {
      headers: {
        'x-access-token': token
      }
    });
    const data = await response.json();
    setJobs(data);
  };

  //create new job from api results
  const createJob = async (newJob) => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token
      },
      body: JSON.stringify(newJob)
    });
    getJobs();
  };
    
  const deleteJobs = async (id) => {
    await fetch(URL + id, {
      method: 'delete',
      headers: {
       'x-access-token': token
      }
    });
    getJobs();
  };

  const updateJobs = async (job, id) => {
    // Make update request to update jobs
    await fetch(URL + id, {
      method: 'put',
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token
      },
      body: JSON.stringify(job)
    })
    // Update jobs
    getJobs()
  }

  useEffect(() => {
    if(token){
      getJobs();
    } else {
      Redirect('/auth/login')
    }
  }, [token]);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/jobs" render={(rp) => <Index jobs={jobs} token={token} {...rp}/>}/>
        <Route 
          path="/jobs/search"
          render={(rp) => (
            <Search
            jobs={jobs}
            token={token}
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
            updateJobs={updateJobs}
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
        <Route path="/auth/signup" 
          render={(rp) => ( 
            <Signup {...rp} />
          )}
        />
        <Route path="/auth/login" 
          render={(rp) => (
            <Login {...rp} getToken={getToken}/>
          )}
        />
      </Switch>
    </main>
  );
};
  
export default Main;
