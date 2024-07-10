package com.example.intermediate.server;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.Socket;

public class socketClient {
        public static void main(String[] args) {
        String serverAddress = "localhost"; // Server address
        int serverPort = 3000; // Server port number

        try {
            // Connect to the server
            Socket socket = new Socket(serverAddress, serverPort);
            System.out.println("Connected to the server at " + serverAddress + ":" + serverPort);

            // Set up input and output streams
            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter out = new PrintWriter(new OutputStreamWriter(socket.getOutputStream()), true);

            // Send a message to the server
            String messageToSend = "Hello, Server!";
            out.println(messageToSend);
            System.out.println("Sent to server: " + messageToSend);

            // Receive a response from the server
            String response = in.readLine();
            System.out.println("Received from server: " + response);

            // Send a message to the server
            String messageToSend2 = "How are you friends?!";
            out.println(messageToSend);
            System.out.println("Sent to server: " + messageToSend2);

            // Receive a response from the server
            String response2 = in.readLine();
            System.out.println("Received from server: " + response2);

            // Close the socket and streams
            in.close();
            out.close();
            socket.close();
            System.out.println("Connection closed.");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
