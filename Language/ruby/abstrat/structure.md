# Structure

### list

\# app/model

- DB and business logic
- Use ApplicationRecord to interacts with the database table.
- model extends chain
  ```
  User(model representing a table)
   └── ApplicationRecord
        └── ActiveRecord::Base
             └── Object
                  └── BasicObject
  ```

\# app/controller

- Handle requests and responses
- Sends data to the views or responds with JSON
- Controller extends chain
    ```
    Controller
     └── ApplicationController
          └── ActionController::Base
                └── Object
                    └── BasicObject
    ```

\# routes

- Define URL routing
- Routes extends chain
    ```
    Routes
     └── ActionDispatch::Routing::Mapper
          └── Object
               └── BasicObject
    ```

\# app/view

- Define HTML output and UI
- View extends chain
  ```
  Views (Helpers)
   └── ApplicationHelper
        └── ActionView::Base
             └── Object
                  └── BasicObject
  ```

\# db/migrate

- Modify database structure

\# app/assets

- Store images, CSS, and JavaScript

\# spec or test

- Write test code

\# config

- Store configuration files

\# app/helpers

- Define helper methods

\# app/controllers/api

