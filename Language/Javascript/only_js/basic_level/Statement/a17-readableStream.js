// a17 - ReadableStream

const text = 'Hello, my name is ksw';
const readableStream = new ReadableStream({
    start(controller){
        controller.enqueue(text);
        controller.close();
    }
});

const reader = readableStream.getReader();

reader.read().then(({done, value}) => {
    console.log(value);
})