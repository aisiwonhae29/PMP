# script

### General

- Class_name variable_name : basic expression of script 
  
ex) Rigidbody2D rigid

### class

\# MonoBehavior: basic game logic class

\# Vector2

@ Input: handle key from player input

- Input key value is in 'Topbar > Edit > Project Setting > Input Manager > Axes


### Function

- GetComponent<Class_name>()    : get component object  //  ex) rigid = GetComponent<Rigidbody2D>();

- FixedUpdate()                 : When physics updates, then use this function not Update.
  - 1. AddForce