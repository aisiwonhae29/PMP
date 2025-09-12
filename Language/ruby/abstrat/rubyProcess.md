# ruby process

### list

\# zeitwerk

- The default autoloader in Rails
- This is the autoloading system, and dynamically maps the file paths to Ruby constants.

\# project concept

- synchronous
- multi-threaded
- concurrent processing
- background job
- event-driven programming

- require: loads the library and files.
  - This not neccessary in ruby.
    - Don't must
      1. Models
      2. Controllers
      3. Helpers
      4. Gems from Gemfile
    -  must
      1. Custom ruby files(e.g., files in lib/)
      2. Non-rails standard libraries
      3. Manual configuration 