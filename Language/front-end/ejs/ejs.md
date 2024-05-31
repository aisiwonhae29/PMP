# ejs: Embedded JavaScript

>quote: https://www.tutorialspoint.com/how-to-use-ejs-in-javascript

### about

- ejs is a simple templating language that lets you generate hTMl markup with plain JavaScript.

### syntax

\# **basic**

- <%= %>    : Outputs the value and escapes it.
- <%- %>    : Outputs the value without escaping it.    > this makes the 
- <% %>     : Executes JS code without outputting it.

\# **including partials**

``` <%- include('header')> %> ``` 

\# **conditional rendering**

```
<% if (boolean) { %>
    <p> Welcome, <%= user.name%>!
<% } %>
```

\# **loops**

```
<% items.forEach(function(item) { %>
    <p> <%= item %> <p>
<% }) %>
```

### logic

- When data is passed from the controller to the EJS template with using an key:value object.

### setting

- npm install ejs

- const ejs = require('ejs');

### usage

- create EJS template

``` const template = '<p> Hello <%= name %></p>';```

- simple render

const data = { name: 'World'};
const html = ejs.render(template, data);