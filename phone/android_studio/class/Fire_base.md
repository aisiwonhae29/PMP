# Firebase

### about

- Firebase is a comprehensive platform provided by Google that offers a wide range of services. 
- It works on development, analytics, databases, authentication, messaging, hosting, and more

1)  Firebase Realtime Database: A NoSQL cloud-hosted database that allows developers to store and sync data between users in real time.
2)  Firebase Authentication: Provides simple APIs to authenticate users using email/password, phone numbers, social media logins (Google, Facebook, Twitter), etc.
3)  Firebase Cloud Messaging (FCM): Allows sending notifications and messages to users across platforms (Android, iOS, and web).
4)  Firebase Cloud Firestore: A flexible, scalable NoSQL cloud database to store and sync app data at a global scale.
5)  Firebase Storage: Offers secure file uploads and downloads for images, videos, audio, and other user-generated content.
6)  Firebase Analytics: Provides insight into user behavior, app usage, and user engagement metrics.
7)  Firebase Crashlytics: A tool for tracking and analyzing app crashes and issues, enabling developers to diagnose and fix problems quickly.
8)  Firebase Remote Config: Allows for dynamic app configuration and feature flagging without requiring app updates.
9)  Firebase Hosting: Enables web hosting of static and dynamic content with SSL support.
10) Firebase Performance Monitoring: Monitors app performance and provides insights to optimize the app's speed and responsiveness.

<details><summary style="color:#62C1DE; font-size: 1.25rem;">Understand about firebase project</summary>

### hierarchy of Firebase projects

<div style="width:500px"> <img src="https://firebase.google.com/static/docs/projects/images/firebase-projects-hierarchy_projects-apps-resources.png"></div>

- Firebase project is like a container for all your apps and any resources and services provisioned for the project

- All Firebase Apps registered to the same Firebase project share all the same resources and services. Same back-end, auth, realtime database, colud firestore, cloud sotrage, cloud function.

- can interact with google cloud because firebase's base is google cloud.

- Firebase project identifies with 3 things, 1. project name 2. project number 3. project id
</details>


### FCM: Firebase Cloud Messaging

- about FCM 

platform provided by Google as part of the Firebase suite of services. It enables developers to send notifications and messages to users across different platforms, including Android, iOS, and webapps.

key feature of FCM

1) Cross=platform Messaging: allows you to send notifications or data msg to users unified msg solution for apps.
2) Reliable Delivery: Messages sent via FCM are delivered reliably, even under poor network conditions. FCM manages the queuing and delivery of msg.
3) Token-Based msg: FCM uses a unique token assigned to each instance of your app installed on a devie.Token allows sending messages to specific devices or user groups.
4) Integration with Firebase: can integrate with other firebase applications.
5) Analytics and Insights: FCM provides analytics to track msg delivery, open rates and other metrics, enabling you to understand user engagement with your notifications.



- To send msg 

\# Firebase's onmessage function is invoke from sdk in homepage. [://Firebase](https://console.firebase.google.com/u/0/)

1) download google-service.json to project level in android app.
2) app & project tier build.gradle file type about firebase.
3) find cloude message and create message.
4) get_token from js & android project, copy key to homepage and send.

### Main object in firebase

- SDK integration the admin with client. For this, we have to see

1) Realtime Database
2) FCM
3) Authentication
4) Remote Config
5) Cloud Storage

### FCM How it work

1. trusted environment such as Cloud Functions for Firebase or an app server on which to build, target, and send message
   
2. An Apple, Android, or web (JavaScript) client app that receives messages v
3. 
4. ia the corresponding platform-specific transport service

we can send msg via the 'Firebase Admin SDK' or the 'FCM server protocol'.