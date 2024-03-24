# USB: Universal Serial Bus

### about

- USB is a mechanism used to connect peripheral devices to computers.
- The USB standard provides a considerable speed advantages over other alternatives.
- USB transmits data between two devices in smaller, bite-sized quantities known as "packets". Each packet transmits a predetermined amount of bytes.

\# prerequiste knowledge

- A PC typically included one or two serial connections, a parallel port, keyboard and mouse connectors, and in some instances, a joystic port.
- When a peripheral device is connected to a host computer by USB, the host machine will automatically determine then kind of device and install driver that let is function.


### Sequence 

1. Data transfer in bulk

- This type of tranmission is employed by printers or digital scanners for huge quantities of data.
- This is generally a low-priority transmission and is not time-sensitive.

2. Small packets for critical device connections

- This feature is used by peripheral systems like keyboards and mice to transmit tiny quantities of data.

3. Control packet transfers for USB management

- This used to set up and manage USB devices.
- The host submits a request to the device followed by data transmission.

4. Real-time, uninterrupted data transfer in the isochronous mode

- This is used for audio, video and other real-time data.
- During the the transmission, errors may occur, but the transmission will not be paused to resubmit the packets.
- However, such transfers often include instances in which the dta is not crucial, exclude thiese components that to resendata, which might result in audio glitches.

### Key features

1. How swapping
2. Direct current transfer
3. The use of multiple contact points
4. shielding and protection

### etc

- Advantage of using virtual USB: Serve the same functionality about USB for give same environment to tester.