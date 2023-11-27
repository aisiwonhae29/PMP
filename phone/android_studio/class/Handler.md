# handler

### about

```
Handler is a class that allows you to schedule messages or run code on a specific thread, typically the UI thread.
Part of the Android framework used to communicate between different threads or perform delayed or periodic actions

```

### Key Aspects of Handlers

1) Thread Communication 
2) Updating UI from Background Threads
3) Delayed or Periodic Tasks

### Usage

-  new Handler: creates an instance of the 'handler' class, This instance can then be used to post 'Runnable' objects or 'Message' objects to be processed by the Thread msg queue.
- 