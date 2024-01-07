/** a02: How to use promise
 *
 * # in this page we handle fetch
 *   fetch needs the environment
 *   first we enter 'https://example.org/'
 *   open the console and activate below codes
 * */

// promise - basic

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");

/**
 * # sequencej
 * 
 * 1. calling fetch() API, assigning the return value to the fetch 'promise' variable
 * 2. immediately after, logging the fetchPromise variable. This should output something like: promise{state: 'pending'} telling us that we have a promise object/ pending means operation is still going on
 * 3. passing a handler function into the Promise's then() method. When succeeds, the promise will call our handler, passing in a response object contains the server's response.
 * 4. logging a message that we have started the request.
 */

/**
 * promise - .then()
 * 
 * # logic
 * 
 * 1. API algorithm is executed
 * 2. end of the sequence, attach .then() function
 * 3. finally attach .catch() function
 *  */ 

// p2 - code 1
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

fetchPromise1.then((response) => {
  const jsonPromise1 = response.json();
  jsonPromise1.then((data) => {
    console.log(data[0].name);
  });
});

// p2 - code 2
// this code is more simple.
// called chaining promises
fetchPromise1
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });

// promise - catch(err)

fetchPromise1
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((err) => {
    console.error(`error: ${err}`);
  });


  // promise - .all()

  //p3 -code 1
  const fetchPromise3_1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise3_2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3_3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );

  Promise.all([fetchPromise3_1, fetchPromise3_2, fetchPromise3_3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });