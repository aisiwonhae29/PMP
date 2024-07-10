package com.example.intermediate.sequence;

public class synchronize {
    public void synch(){
        synchronized(this){
            System.out.println("123");
        }
    }
}
