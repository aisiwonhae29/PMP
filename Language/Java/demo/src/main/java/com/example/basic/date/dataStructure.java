package com.example.basic.date;

public class dataStructure {
    public static void main(String[] args) {
        dataStructureEx a01 = new dataStructureEx();

        // String[] x : This is an array of strings. This allows you to store multiple
        System.out.println(a01.getAnimals());
    }
    
}

class dataStructureEx {
    String[] animals = new String[3];

    public dataStructureEx(){
        animals[0] = "lion";
        animals[1] = "hyena";
        animals[2] = "hippo";
    }
    
    String[] getAnimals() {
        return animals;
    }
}

