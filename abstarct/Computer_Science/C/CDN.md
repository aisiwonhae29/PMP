# CDN (Content Delivery Network)

### About

- CDN is a network of distributed servers strategically positioned across various geographical locations. its primary purpose is to deliver web content more
  efficiently to users by reducing latency and improving website performance.

### How CDNs Work

1. Server Distribution: CDNs consist of multiple servers, often referred to as edge servers or points of presence, spread across different locations worldwide

2. Content Caching: When a user requests content from a website that uses a CDN, the CDN serves that content from the server located closest to the user. This server
   might have cached copies of the website's files (like images, CSS, JavaScript, videos, etc).
3. Reduced Latency: By serving content from servers closer to the user, CDNs minimize the physical distance data needs to travel. This reduces latency, making content
   load faster
4. Load Distribution: CDNs can handle high traffic loads by distributing requests across their network. This helps prevent server overloads and improves website performance
   during traffic spikes

### How Websites Use CDNs

1. Resource Hosting: Websites can host static resources (like images, CSS files, JavaScript libraries) on CDNs, allowing these resources to be served faster to users

2. Dynamic Content Acceleration: Some CDNs offers features to accelerate the delivery of dynamic content by optimizing the delivery route and caching dynamic content better

3. Security: CDNs often provide security features like DDoS protection, web application firewalls, and SSL/TLS encryption to enhance website security

### To determine what server to use

1. Geolocation DNS Resolution
   
2. Anycast Routing

3. IP Geolocation

4. Client-Side Measurements

5. HTTP Header Information

6. Load Balancing Algorithms