let createError = require('createerror')

var MyError = createError({
    name: 'MyError',
    message: 'A slightly longer description of the error'
});

try {
    throw new MyError({
        message: "The message",
        data: {disallowedIds: [1,3,4,6]}
    });
}catch(e){
    console.warn(e.data);
}
