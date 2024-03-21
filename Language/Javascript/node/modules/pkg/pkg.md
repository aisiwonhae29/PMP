# pkg

### about

> quote: https://thriveread.com/build-and-compile-nodejs-to-exe-file/

- pkg is application for change node project into exe files

### cmd

- pkg [options] `<inputs>`: basic frame

- pkg . --output myApp: Specifies the name of the output file or directory

- pkg [target_file] --target [target OS]

  - target OS: ex) node14-win-x64, node14-macos-x64, node14-linux-x64

- pkg . --output-path ./build: specifies the output directory for the generated executables

- pkg . --cjs: compiles input files into CommonJS format

- pkg . --options config.json: provides a JSON file with pakage options

- pkg . --debug: generates a debug package

- [exe] --inspect-brk: Debugging your Executable. for this code we can use debugging tool, such as chrome devtools

- if we wanna see exe compiled file, then we can use decompiling cmd.

### example code

- pkg . --output myApp --target node16-win-x64: packages the Node.js application in the current directory('.') into an executable named `myApp` targeting the win x64 platform with Node.js version 16.