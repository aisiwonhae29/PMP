# structure
    
├─gradle            
├─.idea             
├─.settings         
├─app               
├─gradle            
├─.project          
├─build gradle      
├─gradle.properties     
├─gradlew           
├─gradlew.bat       
├─local properties  
└─settings.gradle   
    

### how to build?

Part .1 transplant firebase into android system

1. make new project with empty activity
2. create firebase console project (set android package name)
3. download google-service.json (in the ./app path)
4. compile build.gradle.kts file
   project level: build.gradle.kts file
   ```
    plugins { 
        id("com.google.gms.google-services") version "4.4.0" apply false 
    }

   ```

   app-level : build.gradle.kts file
   ```
    plugins { 
        id("com.android.application")
        id("com.google.gms.google-services")
    }
    ...
    dependencies { // this part handle firebase SDK
        implementation(platform("com.google.firebase:firebase-bom:32.7.0""))
        implementation("com.google.firebase:firebase-analytics")
        ...
    }
   ```

   