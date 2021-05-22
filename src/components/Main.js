import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Search from "../pages/Search";


function Main(props){

  const URL = "https://proj3-backend.herokuapp.com/jobs";

  const [jobs, setJobs] = useState(null);

  const getJobs = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setJobs(data);
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
              {...rp}
            />
          )}
        />
        <Route
          path="/jobs/:id"
          render={(rp) => (
            <Show jobs={jobs}
              {...rp}
            />
          )}
        />
      </Switch>
    </main>
  );
}
  
  export default Main;