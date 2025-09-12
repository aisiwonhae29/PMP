# node js structure

### case

- json scheme - function connected style
    - description   : The object structured with scheme and subclass state about process.
    - logic         : For example we connected to json object something into here with a, then check a with parameter[x] from variable[a] and handle function with dynamically use action with parameter x. ex) (a) > x.action 

```json
{
    "cmd1":{
        "description"   : "desc1",
        "action"        : () => {
            console.log('logging');
            for( const [command.details] Object.entries(commands)) {
                console.log(`${command}`)
            }
        }
    },
    "cmd2":{
        "description"   : "desc2",
        "action"        : () => {
            console.log("bye");
            process.exit(0);
        }
    }
}
```