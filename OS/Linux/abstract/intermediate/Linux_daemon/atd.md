# atd: at daemon

### about

- atd is background process in linux, that facilitates the scheduling and execution of commands or scripts at a specified time in the future.
- Work one-time execute. (Cron is for recurring tasks with regular intervals)

### sequence

1. Job scheduling       : With 'at' cm followed time user can make schedule with one execute logic.
2. Time Speicification  : User can specify the time and date with various format.
3. Queue Management     : The atd daemon manages a queue of scheduled job. The job is executed on set time.
4. Job Execution        : At the scheduled time, atd retrieves the job from the queue and executes it in a separate shell enviroment, and after end mail to user.