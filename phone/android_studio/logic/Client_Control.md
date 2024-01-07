# Client Control

> quote: https://firebase.google.com/docs/auth/admin/create-custom-tokens

### Create_Custom_Tokens

- JWTs(JSON Web Tokens): use this data on our server and then use them to autheticate via the signInWithCustomToken()

- several ways to specify the Google service account that should be used by the Firebase Admin SDK for signing custom tokens
  - Using a service account JSON file: this method requires us to package a service account JSON file along with our code.
  
  - Letting the Admin SDK discover a service account: managed by Google Cloud Functions and App Engine.
  
  - Using a service account ID: used in Google-managed enviroment. sign tokens using the specified service account's key.

- Manage users with API gives advantage about for ability to programmatically complete the following tasks
<details><summary>Advantage</summary>

- Create new users without any throttling or rate limiting
- Look up users by different criteria such as uid, email or phone number
- List all the users of a specified project in batches
- Access user metadata including account creation date and last sign-in date
- Delete users without requiring their existing password
- update user properties - including their password - without having to sign in as the user
- verify emails without having to go through the out-of-band action flows for verifying emails
- change a user's email without sending email links to revoke these changes
- Create a new user with a phone number without having to go through the SMS verification flow
- Offline provision users in a disabled state and then later control when to enable them

</details>

### Retrieve and store registration tokens

