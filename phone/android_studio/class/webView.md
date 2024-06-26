# webView

### about

- used to display web pages or HTML content within an Android app. (embed web browser inside your app)

- It's part of the 'android.webkit' package and allows you to embed web pages, load HTML content, display web resources ...

<details><summary>webview flow graph</summary>

<img src="../zz_static/web-view_client_chrome.png">

</details>

### function indicates
<details><summary>content</summary>

- webView.setWebViewClient(new WebViewClient());  // 새 창 띄우기 않기

- webView.setWebChromeClient(new WebChromeClient());

- webView.addJavascriptInterface(new AndroidBridge(), "Android");

- webView.getSettings().setLoadWithOverviewMode(true);  // WebView 화면크기에 맞추도록 설정 - setUseWideViewPort 와 같이 써야함

- webView.getSettings().setUseWideViewPort(true);  // wide viewport 설정 - setLoadWithOverviewMode 와 같이 써야함

- webView.getSettings().setSupportZoom(false);  // 줌 설정 여부

- webView.getSettings().setBuiltInZoomControls(false);  // 줌 확대/축소 버튼 여부

- webView.getSettings().setJavaScriptEnabled(true); // 자바스크립트 사용여부

- //webview.addJavascriptInterface(new AndroidBridge(), "android");

- webView.getSettings().setJavaScriptCanOpenWindowsAutomatically(true); // javascript가 window.open()을 사용할 수 있도록 설정

- webView.getSettings().setSupportMultipleWindows(true); // 멀티 윈도우 사용 여부

- webView.getSettings().setDomStorageEnabled(true);  // 로컬 스토리지 (localStorage) 사용여부

- webView.setWebViewClient(new WebViewClient());

- webView.loadUrl(HOST);

- webView.getSettings().setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);

- webView = (WebView) findViewById(R.id.mainWebView);
</details>

### Function 

- webView.loadUrl('https://youtube.com'): loads the specified url in the `webView`
- getSettings().setJavaScriptEnabled(true): enables Javascript execution
- setWebViewClient(WebViewClient client): Sets a `WebViewClient` instance to handle various events during page loading and navigation
- 