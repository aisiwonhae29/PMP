# Add on local server

### Objective

- Read and write Realtime Database data with full admin privileges
- Programmatically send Firebase Cloud Messaging messages using a simple alternative approach to the Firebase Cloud Messaging server protocols.
- Generate and verify Firebase auth tokens.
- Access Google Cloud resources like Cloud Storage buckets and Cloud Firestore databases associated with your Firebase projects.
- Create your own simplified admin console to do things like look up user data or change a user's email address for authentication.

### Sequence

> quote: https://firebase.google.com/docs/admin/setup

1) Create a Firebase project

2) Add the SDK

``` 
npm install firebase-admin --save
const { initializeApp } = require('firebase-admin/app); 
```
3) Initialize the SDK

Once you have created a Firebase project, you can initialize the SDK with Google Application Default Credentials.

- Initialize the SDK in non-Google environments

first open firebase console, open Settings > Service Accounts. Generate New Private Key and sotre JSON file.
```
var admin = require("firebase-admin);

var serviceAccount = require("path/to/key.json);

admin initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
** when set GOOGLE_APPLICATION_CREDENTIALS environment variable more credential part is more improved.
in window: $env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\username\Downloads\service-account-file.json"
in linux: export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"
```

4) Build app server sen request