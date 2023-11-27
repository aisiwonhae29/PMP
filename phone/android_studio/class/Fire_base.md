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