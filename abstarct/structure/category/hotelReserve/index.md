# hotelReserve

### about

- Because of project is large, high amount of user traffic needed to be processed.
- So to manage these, we need to follow micro-service architecture.
- This means we have to divide the system into small chunks for each type of task.


### Part of coding

- Hotel Management Service
- Customer Service (Search + Booking)
- View Booking Service
- Final Design

### role

\# Hotel Management Service

- Manage hotel's related information.
- Initial request is been sent to the load balancer, then the load balancer distributes the request.
- The hotel service interats with the hotel DB cluster which follows the master-slave architecture to reduce the load in the database.