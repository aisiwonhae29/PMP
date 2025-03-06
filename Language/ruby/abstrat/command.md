# Ruby command

### list

\# project start

- rails new [name] (--): Create a new rails project

- **Sequence**

1. bin/rails execution
2. require loads cofnig/boot.rb
3. config/application.rb is loaded
4. config/environment.rb is loaded
5. rail server is started
6. web server (puma) listens for requests
7. handling requests
8. Logs and Output


\# running the app

- rails server, rails s (-p [port]) (-e [environment])

\# generating components

- bundle install: Install all the gems in the Gemfile

\# Command-line interface(CLI)

- rails console, rails c: Open the rails console

\# DB related

- rails db:create   : Create the database
- rails db:migrate  : Migrate the database
- rails db:rollback : Rollback the database
- rails generate migration [name]: Generate a migration file

\# view routes

- rails routes: List all the routes

\# generate components

- rails genrate model Post title:string body:text
- rails generate controller Posts index show