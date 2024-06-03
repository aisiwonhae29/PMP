# mail

### structure

- connection: configuration about connection info.
- require('/connection');
  
```
    module.exports = 
      {
         host: "hostAdress",
         port: 23,
         secureConnection: true,
         auth: {
            user: "user",
            pass: "pw"
         },
         tls: {
            rejectUnauthorized: false
         }
      }
```

- mailer.createTransport: select transport type.
- require('nodemailer');

```
    export function createTransport(
        transport?: SMTPTransport | SMTPTransport.Options | string,
        defaults?: SMTPTransport.Options,
    ): Transporter<SMTPTransport.SentMessageInfo>;
    export function createTransport(
        transport: SMTPPool | SMTPPool.Options,
        defaults?: SMTPPool.Options,
    ): Transporter<SMTPPool.SentMessageInfo>;
    export function createTransport(
        transport: SendmailTransport | SendmailTransport.Options,
        defaults?: SendmailTransport.Options,
    ): Transporter<SendmailTransport.SentMessageInfo>;
    export function createTransport(
        transport: StreamTransport | StreamTransport.Options,
        defaults?: StreamTransport.Options,
    ): Transporter<StreamTransport.SentMessageInfo>;
    export function createTransport(
        transport: JSONTransport | JSONTransport.Options,
        defaults?: JSONTransport.Options,
    ): Transporter<JSONTransport.SentMessageInfo>;
    export function createTransport(
        transport: SESTransport | SESTransport.Options,
        defaults?: SESTransport.Options,
    ): Transporter<SESTransport.SentMessageInfo>;
    export function createTransport<T>(
        transport: Transport<T> | TransportOptions,
        defaults?: TransportOptions,
    ): Transporter<T>;
```

