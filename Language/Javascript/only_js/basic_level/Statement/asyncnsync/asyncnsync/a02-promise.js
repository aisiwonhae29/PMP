/** a02: How to use promise
 * 
 * # in this page we handle fetch
 *   fetch needs the environment 
 *   first we enter 'https://example.org/'
 *   open the console and activate below codes
 * */ 

// fetch

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");

/**
 * sequence
 * 1. calling fetch() API, assigning the return value to the fetch 'promise' variable
 * 2. immediately after, logging the fetchPromise variable. This should output something like: promise{state: 'pending'} telling us that we have a promise object/ pending means operation is still going on
 * 3. passing a handler function into the Promise's then() method. When succeeds, the promise will call our handler, passing in a response object contains the server's response.
 * 4. logging a message that we have started the request.
 */