# debug

## Javascript: usecase

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/app.js"
    }
  ]
}
```

- type: specifies that we are debugging a node.js
- request: indicates that you want to launch and debug your program
- name: name of the debug configuration
- program: specifies the entry point of your Node.js app

