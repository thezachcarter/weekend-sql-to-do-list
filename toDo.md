#Weekend To-Do List... To-Do List

#NEW BRANCHES FOR NEW FEATURES

##Create Files & Folders
[x] index.html, style.css, client.js, server.js, router.js, 
[x] source and link files as needed 
[x] npm init, npm install, npm start, check packages
[ ] set up server, check for success

##Set Up Database
[ ] make db and table in postico -Use the name `weekend-to-do-app
[ ] include a `database.sql` text file in your repo that includes all of your `CREATE TABLE` queries

## Connect Server and Datatbase
[ ] get
[ ] post
[ ] put
[ ] delete
[ ] pool

##Create The App
[ ] create a function that allows users to create a task and add it to a lis on the DOM
    [ ] store created task in database
    [ ] clear and refresh DOM whenever a new task is created so that the list i
[ ] each task should have options to mark as completed or to delete 
    [ ] completed tasks should change in appearance on the DOM
    [ ] complete vs incomplete should also be stored in the db
    [ ] deleted tasks should also be deleted form db

## Stretch Goals

For each of your strech goals, you will be practicing git branching. Please refer to the branching notes for a reminder on commands. Each branch will be merged into main using `--no-ff`. This will allow us to see that you branched your feature when you turn in your code.

- `feature-styling-bootstrap` 

    - [ ]  Add Bootstrap to the front end and style it up!
      -  Buttons -- make the creation buttons and completion buttons green and the delete red.
      -  Inputs -- make your text inputs styled in the bootstrap way
      -  Responsive -- make your app responsive to different screen sizes -- check out the [Layout](https://getbootstrap.com/docs/4.1/layout/overview/) section

- `feature-confirm-delete`

    - [ ]  In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task.
        - Some styled options are [Bootstrap Modal](https://getbootstrap.com/docs/4.0/components/modal/) or [Sweet Alerts](https://sweetalert.js.org/guides/): Use the CDN option.

- `feature-ordering-task-query` 

    - [ ]  Research [Query Params](https://expressjs.com/en/api.html#req.query) to have the request reverse the order of the returned todos. 
    
- `feature-time-completed` 

    - [ ]  Add the ability to record when a task was completed. Show the completed date on the frontend in a pretty format.