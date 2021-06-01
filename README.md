# NPM START CAREER
 
- **Authors:** Kyle Rasmussen, Matthew Turner, Mohammed Idris, Valerie Larson
- **Link to Live Site:** https://npmstartcareer.netlify.app/
 
 
## Project Summary
 
 
<img src="https://i.imgur.com/SULQoZm.png" width="250"> 
 
<img src="https://i.imgur.com/glleQcN.png" width="250"> 
 
<img src="https://i.imgur.com/2tW3tyg.png" width="250"> 
 
## Technology Used
- Javascript
- HTML
- CSS
- Express
- React
- Github
- Mongoose
- MongoDB
- JSON Web Token
 
## Models
***JobSchema***
- Title: String
- Company_name: String
- Job_type: String
- Candidate_required_location: String
- Salary: String
- Url: String
- Notes: String
- Applied: Boolean
- Interviewed: Boolean
- Cover_letter: Boolean
- Resume: Boolean
 
 
## Route Map
 
| Method | Endpoint | Resource/View |
|--------|----------|---------------|
|INDEX PAGE - GET| "/jobs" | Display a list of saved jobs |
|SEARCH PAGE - GET| "/jobs/search" | Shows form for jobs with parameters |
|DELETE| "/jobs/:id" | Deletes a job from DB |
|PUT| "/jobs/:id" | Updates form for notes about job|
|POST| "/jobs" | Adds a new job to DB from API |
|GET| "jobs/:id" | Shows information about one job |
|POST| "auth/signup" | Allows user to signup |  
|POST| "auth/login" | Allows user to login | 
 
 ## User Stories 
- AAU I would like to see all my saved jobs
- AAU I would like to edit notes about a job
- AAU I would like to delete a job
- AAU I would like to search for jobs using an API
- AAU I would like to create a new saved job from the API results 
- AAU I would like to login
- AAU I would like to signup

## Future Goals
- Create a relationship between jobs and users 
- Creating a logout option
 
## Existing Bugs
- Navigation bar color issue 
