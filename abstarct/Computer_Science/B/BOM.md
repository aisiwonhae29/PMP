# BOM: Byte Order Mark

### about

- A BOM is an optional Unicode code point that is used to indicate the byte order and encoding of a text file or stream of data.
- It is a special character or sequence of bytes that is added at the beginning of a file or data stream to specify how the bytes in the file or stream are ordered and interpreted.
- The BOM serves as a marker to identify the byte order and encoding, allowing software applications to interpret the text correctly.
- BOM file is deleted with fs.writeFileSync('file_path'. '');

### usaege

- UTF-8                 : EF BB BF
- UTF-16 (Big-Edian)    : FE FF
- UTF-16 (Little-Edian) : FF FE
- UTF-32 (Big-Edian)    : 00 00 FE FF
- UTF-32 (Little-Edian) : FE FE 00 00
