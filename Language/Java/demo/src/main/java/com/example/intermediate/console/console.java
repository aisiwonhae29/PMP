package com.example.intermediate.console;

import java.io.Console;

public class console {
    public static void main(String[] args) {
        Console cons = System.console();
        
        String result1 = cons.readLine();    // Read the value of input.
        System.out.println(result1);

        String result2 = cons.readLine("What is your favorite movie?");
        System.out.println("It's " + result2);
    }
}
