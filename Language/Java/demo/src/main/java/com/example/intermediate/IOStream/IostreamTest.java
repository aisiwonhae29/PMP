package com.example.intermediate.IOStream;

import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.IOException;



public class IostreamTest{
    public static String readFileToString(String filePath) throws IOException {
    try (FileInputStream fis = new FileInputStream(filePath);
        ByteArrayOutputStream baos = new ByteArrayOutputStream()) {
        
        byte[] buffer = new byte[1024];
        int bytesRead;
        while ((bytesRead = fis.read(buffer)) != -1) {
            baos.write(buffer, 0, bytesRead);
        }
        System.out.println(baos.toString("UTF-8"));
        return baos.toString("UTF-8");
    }
}
    public static void main(String[] args) throws IOException {
        // readFileToString("test.txt");
        int bytesRead;
        try(FileInputStream fs = new FileInputStream("test.txt")){
            
            while((bytesRead = fs.read()) != -1){
                System.out.print(bytesRead);
            }
        }catch(Exception e){
            e.printStackTrace();
        }

    }
}

/**
 * # IO stream
 * 
 * ! When the stream create
 * 
 * - 1. File identification: Java find the file what string input.
 * - 2. Operating system interaction
 *  - Checking if the file exists
 *  - Verifying read permissions
 *  - Obtaining a file descriptor
 * - 3. Buffer allocation
 * - 4. Stream position
 * - 5. Resource management
 */