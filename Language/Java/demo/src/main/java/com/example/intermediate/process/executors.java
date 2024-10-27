package com.example.intermediate.process;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;

/**
 * # Executors class
 * 
 * - The Executor class in java is a utility class that provides factory methods
 * for creating different types of ExecutorService instances.
 * - This is the part of the java.util.concurrent package and plays a crucial
 * role in java's concurrency framework.
 */

public class executors {
    public static void main(String[] args) {
        ExecutorService fixedPool = Executors.newFixedThreadPool(5);
        ExecutorService cachedPool = Executors.newCachedThreadPool();
        ExecutorService singleThreadExecutor = Executors.newSingleThreadExecutor();
        ScheduledExecutorService scheduledPool = Executors.newScheduledThreadPool(3);
    }
}
