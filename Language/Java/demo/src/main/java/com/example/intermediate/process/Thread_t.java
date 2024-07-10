package com.example.intermediate.process;

public class Thread_t extends Thread {
    int number;
    String name;
    public Thread_t(int number, String name){
        this.number = number;
        this.name = name;
    }


    public void run(){
        System.out.println("123");
    }
}
