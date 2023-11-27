# android studio

### comparison with spring crud-sys

- app/src/main/java: Equivalent to the main Java package where Java classes reside. Containing controllers, services, and other components.
  
- app/src/main/res: Analogous to resources in Spring. It holds Android resources like layouts, drawables, strings, etc

- app/src/main/AndroidManifest.xml: Similar to configuration files or annotations used to define app=specific configurations. COmparable to the 'application.properties'



<details><summary style="color:gold; font-size:1.25rem;">Class</summary><br>

<details><summary>Activity</summary>

- It's fundamental building block that represents a single screen with a user interface. curucial for Android app lifecycle and is responsible for interacting with the use.

\# Key points of Activity

1) UI Interaction
2) Lifecycle Management
3) UserInteraction Handling
4) Navigation and Interaction

\# main function

1) onCreate(): Called when the activity is first created
2) onStart(): Called when the activity becomes visible to the user
3) onResume(): Called when activity is ready to interact with the user. used for starting animations, playing sounds, or refreshing UI elements.
4) onPause(): Called when the activity is partially obscured by another activity. 
5) onStop(): Called when the activity is no longer visible to the user. when in the non visible state resources not to used.
6) onDestroy(): Called when the activity is being destroyed. Used to perform final cleanup, release resources, unregister receivers, etc.

\# Additional function

1) onRestart(): Called when the activity is restarting after being stopped. followed by onStart()
2) onSaveInstanceState(): Called before the activity is destroyed, allowing you to save data in case the activity needs to be recreated.
3) onRestoreInstanceState(): Called after onCreate(), used to restore the previously saved state.

</details>



</details>