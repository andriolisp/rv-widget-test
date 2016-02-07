# Widgets Single Page App Demo
This is a simple multi-page HTML site. The goal of this project is to take this hardcoded HTML site, and make it hit an API for showing/listing user and widget information.


## Features
- A user view that displays a list of users (data via api `/users`), each user should have a method of clicking to viewing all the details of that user (`/user/:id`)
- A widget view that displays a list of widgets (`/widgets`), each widget should have a method of clicking to view the details of that widget (`/widget/:id`)
- A search/filter on the user and widget list views
- A method of creating a new widget (POST `/widgets`)
- A method of updating an existing widget (PUT `/widgets/:id`)


# API Documentation
There's an API available at `http://spa.tglrw.com:4000` for retrieving the data used to make this app. The hard-coded data in the existing HTML is only a placeholder for style. The API returns and expects to receive JSON-encoded data.


## The endpoints are as follows:
- GET `/users` [http://spa.tglrw.com:4000/users](http://spa.tglrw.com:4000/users)
- GET `/users/:id` [http://spa.tglrw.com:4000/users/:id](http://spa.tglrw.com:4000/users/:id)
- GET `/widgets` [http://spa.tglrw.com:4000/widgets](http://spa.tglrw.com:4000/widgets)
- GET `/widgets/:id` [http://spa.tglrw.com:4000/widgets/:id](http://spa.tglrw.com:4000/widgets/:id)
- POST `/widgets` for creating new widgets [http://spa.tglrw.com:4000/widgets](http://spa.tglrw.com:4000/widgets)
- PUT `/widgets/:id` for updating existing widgets [http://spa.tglrw.com:4000/widgets/:id](http://spa.tglrw.com:4000/widgets/:id)

# Local Development and Instructions
- To use the local endpoints, after the command 'npm install' stop your mongodb service, change the files 'public/js/user/UserService.js' and 'public/js/widget/WidgetService.js' and comment the line with the variable ENDPOINT_URI to use the localhost.
- After that if you want to run with the local API run the command 'npm start' to run the local mongodb and run the initial scripts to load the initial data.
- The command 'npm stop' drop the test database and stops the mongodb service
- If you want only to run the application on the remote API, run the command node index.js

Open in your browser the address 'http://localhost:4000' to open the application

## The local endpoints are as follows:
- GET `/users` [http://localhost:4000/users](http://localhost:4000/users)
- GET `/users/:id` [http://localhost:4000/users/:id](http://localhost:4000/users/:id)
- GET `/widgets` [http://localhost:4000/widgets](http://localhost:4000/widgets)
- GET `/widgets/:id` [http://localhost:4000/widgets/:id](http://localhost:4000/widgets/:id)
- POST `/widgets` for creating new widgets [http://localhost:4000/widgets](http://localhost:4000/widgets)
- PUT `/widgets/:id` for updating existing widgets [http://localhost:4000/widgets/:id](http://localhost:4000/widgets/:id)
