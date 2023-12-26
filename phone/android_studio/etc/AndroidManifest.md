# AndroidManifest.xml

### What is AndroidManifest.xml?

1. App Components Declaration

2. App Permissions

3. Aoo Netadata

4. Intent Filters

### catagory

1. <activity>: Defiens an activity within the app. An activity represents a single screen with a user interface where the user can interact
   
2. <service>: Declares a background service that performs long-running operations or processes data in the background independently of the user interface
   
3. <receiver>: Specifies a broadcast receiver, which listens for and responds to broadcast messages from the system or other apps. Can perform tasks when certain events occur
   
4. <provider>: Declares a content provider, which manages access to a central repository of data. 
   
5. <intent-filter>: Used within `<activity>, <service>, <receiver>, <provider>`, It specifies the types of intents that the component can respond to.
   
6. <uses-permission android:name="android.permission.INTERNET"/>: declare the permissions that your app needs to access certain features or data on the device. in this case request permission to access to internet
                                                                  if this code doesn't declare, we can't access to internet.
7. <application android:icon="@mipmap/ic_launcher">: '@~~' means the document

### example code
<details><summary> example  code </summary>
```
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.Eveco"
        tools:targetApi="31"
        android:usesCleartextTraffic="true">

        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:label="@string/app_name"
            android:theme="@style/Theme.Eveco.NoActionBar">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>

        </activity>

        <service
            android:exported="false"
            android:name=".MyFirebaseMessagingService">
            <intent-filter>
                <action android:name="com.google.firebase.MESSAGING_EVENT" />
            </intent-filter>
        </service>

        <meta-data
            android:name="com.google.firebase.messaging.default_notification_channel_id"
            android:value="@string/default_notification_channel_id" />

        <meta-data
            android:name="firebase_messaging_auto_init_enabled"
            android:value="false" />
        <meta-data
            android:name="firebase_analytics_collection_enabled"
            android:value="false" />

    </application>

    <uses-permission android:name="android.permission.INTERNET"/>
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>

</manifest>

```

</details>