# Web-App link logic

### About

- AndroidBridge Class
\# This is an inner class within our Android code
\# An instance of this class (`AndroidBridge`) is created to serve as a bridge between the native Android code and JavaScript

- Handler and Runnable
\# The `handler` is used to post `Runnable` tasks on the UI thread from a background thread
\# the `Runnable` encapsulates the task to be executed on the UI thread

- JavaScriptInterface Annotation
\# The `@JavascriptInterface` annotation allows the method `get_token()` to be called from JavaScript running in the WebView

- get_token() Method
\# annotated with `@Javascriptinterface` making it callable from JavaScript
\# when `get_token()` is invoked from JavaScript, it posts a `Runnable` to the UI thread using the `Handler`
\# Inside the `Runnable`, it tries to get the FCM token asynchronously using `FirebaseMessaging.getInstance().getToken()`
\# Upon getting the token (or encountering an error), it executes the `onComplete()`method of the `onCompleteListener`
\# If successful, it retrieves the token from the task result (`task.getResult()`) and passes it back to JavaScript using `webView.loadUrl("Javascript:get_token('"+token+"')"")`
