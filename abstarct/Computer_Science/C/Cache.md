# Cache

### About

- cache is a hardware or software component that stores data temporarily to speed up subsequent access to that data. It's a high-speed data storage layer that 
  holds a subset of frequently accessed or recently used information, allowing future requests for that data to be served more quickly
- code [click!](../../../Language/Javascript/node/implement/C_cache.js)

### Pros and Cons

\# pros

- Reduces latency
- Improves I/O

\# Cons

- Corruption
- Performance: If huge data come into.
- Outdated info

### Character of Cache

1. Speed
2. Temporary Storage
3. Data Subset

### how cache used?

- Caches are used to store temporary files, using hardware and software compoenents.
- Many app and software also have their own cache.
- Web browsers are a good example of app caching. They sotre info from previous browsing sesions for use in future sessions.

### How Caches Work

- Data Retrieval: When a system requests data, the cache is checked first. If the data is found in the cache (cache hit), it's served directly from the cache, 
  avoiding the need to fetch it from the original source.
- Cache Miss: If the requested data isn't in the cache (cache miss), the system fetches it from the original source and also stores a copy in the cache
  for future requests.

### algorithm

- Least Frequently Used
- Leas Recently Used
- Most Recently Used

### Types of Caches

1. Browser Cache: Web browsers store cached copies of web pages, images, stylesheets, scripts, and other resources to speed up subsequent visits to websites

2. Server-Side Cache: Servers and applications use caches to store frequently accessed data, improving response times for clients making requests.

3. Content Delivery network (CDN) Cache: CDNs cache website content across distributed edge servers to serve content faster to users around the world

4. Cache memory: This often tied directly to the CPU and is used to cache instructions that are accessed alot. Cache memory is faster than a RAM cache because it's close to the CPU.
 
5. Cache server: somtimes called a proxy cache, this dedicated network server. Cache servers save webpages or other internet content locally.

6. CPU cache: It is a bit of memory placed on the CPU. This memory operates at the speed of the CPU rather than at the system bus speed. Faster than RAM
...

### policy

1. Write-around cache

- writes operation to storage, skipping the cache.
- This prevents the cache from being flooded.
- But performance goes slower.

2. write-through cache

- writes operation to storage and cache.
- This makes performance more enhanced
- But This doens't considered until the data is written to both the cache and primary storage, this can intruduce latency into write operations.
  - This issue occured because if data only write only cache, then inconsistency between the two.

3. write-back cache

- With write-back cahce, the write operation is considered complete after the data is cached.
- Once that happens, the data is copied from the cache to storage. 
- This concept is asynchronous strategy.