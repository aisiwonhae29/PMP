# debug

### Javascript

quote
> https://code.visualstudio.com/docs/nodejs/nodejs-debugging

\# debug configuration

1. Use 'auto attach' to debug processes you run in VS Code's integrated terminal
2. Use the 'JavaScript debug terminal', similar to using the integrated terminal
3. Use a 'launch config' to start your program, or attach to a process launched outside of VS Code

\# usecase


1. auto attach

- can set configure in launch.json
  ex) "debug.javascript.terminalOptions": { "skipFiles": ["<node_internals>/**" ]}

2. debug terminal

- choice terminal upper part of the terminal dropbox, and execute vscode.

1. 



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

