package com.example.intermediate.IOStream;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;

public class printwriter {
    public static void main(String[] args) throws FileNotFoundException {

        File c = new File("").getAbsoluteFile();
        System.out.println(c.getAbsolutePath());
        // String a = System.getProperty("user.dir") + "\\test_pw.txt";
        // System.out.println(a);

        // PrintWriter writer = new PrintWriter(a);
        // writer.println("Hello World");
        // writer.println("Siwon is the coolguy!");
        // writer.close();

    }
}
