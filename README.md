# APP TITLE
 
- **Authors:** Kyle Rasmussen, Matthew Turner, Mohammed Idris, Valerie Larson
- **Link to Live Site:** www.google.com
 
 
## Project Summary
 
 
<img src="https://i.imgur.com/SULQoZm.png" width="250"> 
 
<img src="https://i.imgur.com/glleQcN.png" width="250"> 
 
 
 
## Technology Used
- Javascript
- HTML
- CSS
- Express
- React
- Github
- Mongoose
- MongoDB
 
## Models
***JobSchema***
- Title: String
- Company_name: String
- Job_type: String
- Candidate_required_location: String
- Salary: String
- Url: String
- Notes
- Applied
- Interviewed
- Cover_letter
- Resume 
 
 
## Route Map
 
| Method | Endpoint | Resource/View |
|--------|----------|---------------|
|INDEX PAGE - GET| "/jobs" | Display a list of saved jobs |
|SEARCH PAGE - GET| "/jobs/new" | Shows form for jobs with parameters |
|DELETE| "/jobs/:id" | Deletes a job from DB |
|PUT| "/jobs/:id" | Updates form for notes|
|POST| "/jobs" | Adds a new job to DB |
|GET| "jobs/:id" | Shows information about one job |

 
 ## User Stories 
- AAU I would like to see all my saved jobs
- AAU I would like to edit a job
- AAU I would like to delete a job
- AAU I would like to search for jobs using an API
- AAU I would like to create a new saved job from the API results 
 
***Stretch Goals***
- AAU I would like to see a sign up page
- AAU I would like to see a login in page 
- AAU I would like to see a logout option
 
## Challenges
 
 
 
## Existing Bugs
