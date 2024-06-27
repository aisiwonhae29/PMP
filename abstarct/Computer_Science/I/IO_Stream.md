# I/O Stream

### about

- The I/O stream refers to a logical channel or pathway through which data can be sequentially written (output) or (input) to or from a source or destination, repectively.
- Streams serve as an abstraction layer that simplifies the process of reading and writing data from various sources, such as files, network connections, or memory buffers.

### concept

\# What is an I/O Stream?

- An I/O stream represents a continuouse flow of data.This data an be either input or output

### concept

\# Input stream

- An input stream is used to read data from a source.
- The source can be a file, network socket, keyboard input, or any other data source.
- Common operations include reading byes or characters, checking for end-of-steram.

\# Output stream

- An output stream is used to write data to a destination.
- The destination can be a file, network socket, console output, or any other data sink.
- Common operations include writing bytes or characters, flushing the stream, and closing the stream.

### function

- Open          : Before reading or writing, a stream must be opened, usually by creating an instance of the stream object.
- Read/Write    : Data is read from an input stream and written to an output stream.
- Flush         : For output streams, flushing ensures that all buffered data is actually written out to the destination.
- Close         : Stream should be closed after use to release system to avoid memory leaks.

### enhancement

- Resource Management
- Error handling
- Buffering
- Character Encoding
- Security