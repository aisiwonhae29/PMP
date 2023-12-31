# Cache

### About

- cache is a hardware or software component that stores data temporarily to speed up subsequent access to that data. It's a high-speed data storage layer that 
  holds a subset of frequently accessed or recently used information, allowing future requests for that data to be served more quickly

### Character of Cache

1. Speed
2. Temporary Storage
3. Data Subset

### How Caches Work

- Data Retrieval: When a system requests data, the cache is checked first. If the data is found in the cache (cache hit), it's served directly from the cache, 
  avoiding the need to fetch it from the original source.
- Cache Miss: If the requested data isn't in the cache (cache miss), the system fetches it from the original source and also stores a copy in the cache
  for future requests.

### Types of Caches

1. Browser Cache: Web browsers store cached copies of web pages, images, stylesheets, scripts, and other resources to speed up subsequent visits to websites

2. Server-Side Cache: Servers and applications use caches to store frequently accessed data, improving response times for clients making requests.

3. Content Delivery network (CDN) Cache: CDNs cache website content across distributed edge servers to serve content faster to users around the world