# android architecture

### about

- android is an open souce, linux-based software stack created for a wide array of devices and form factors

<details><summary>architecture diagram</summary>

<img src="../zzz_image/A_android_architecture.png" style="width: 700px;">

</details>

### Part

1. Linux kernel

- The foundation of the Android platform is the Linux kernel. For example Android Runtime (ART) relies on the linux kernel for underlying functionalities such as threading and low-level memory management

- the Android Runtime (ART) relies on the Linux kernel for underlying functionalities such as threading and low-level memory management
  
2. Hardware abstraction layer (HAL)

- HAL provides standard interfaces that expose device hardware capabilities to the higher-level Java API framework.

- The HAL consists of multiple library modules, each of which implemets an interface for a specific type of hardware component, such as the camera or Bluetooth module.

- When a framework API makes a call to access device hardware, the Android system loads the library module for that hardware component.

3. Android runtime

- For devices running Android version 5.0 (API level 21) or higher, each app runs in its own process and with its own instance of the Android Runtime (ART). ART is written to run multiple virtual machines on low-memory devices by
  executing Dalvik  