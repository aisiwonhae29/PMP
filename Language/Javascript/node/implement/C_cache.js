/**
 * * C_cache 
 * 
 * ! In-Memory Caching
 * 
 * # Node.js Core Caching
 * 
 * - Node.js provide 'Map' object or plain JS object
 * - But its not recommended for production use due to its limitations and lack of advanced features
 * 
 * # Node Cache
 * 
 * - 'node cache' is popular in-memory caching library for node.js.
 * - It provides features like TTL(Time To Live), keys, and cluster support
 * 
 * */

// # In-memory cache

function test01(){
    const nodeCache  = require('node-cache');
    const mycache = new nodeCache;
    
    mycache.set('key', 'value', 3600); // Cache for 1 hour
    let value = mycache.get('key');
    console.log(value);
}

// # Redis cache

function test02(){
    const redis = require('redis');
    const client = redis.createClient();
    
    client.set('key', 'value', 'EX', 3600); // cache for 1 hour
    client.get('key', (err, reply)=>{
        console.log(reply);
    })
}

// # Memchached cache

function test03(){
    const Memcached = require('memcached');
    const memcached = new Memcached('localhost:11211');

    memcached.set('key', 'value', 3600, (err) =>{
        if (err) throw err;
    });

    memcached.get('key', (err, data) => {
        if (err) throw err;
        console.log(data);
    })
}

// # caching at the application level

function test04(){
    const express = require('express');
    const cacheController = require('express-cache-controller');
    const app = express();

    app.get('./data', cacheController({
        maxAge: 3600
    }), (req, res)=>{
        res.send('Datat from server');
    });
}
test04()