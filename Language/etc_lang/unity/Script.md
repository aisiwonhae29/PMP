# script

### General

- Class_name variable_name : basic expression of script 
  
ex) Rigidbody2D rigid

### class

\# MonoBehavior: basic game logic class

\# Vector2

@ Input: handle key from player input

- Input key value is in 'Topbar > Edit > Project Setting > Input Manager > Axes

\# transform: deal with transform

- Function

Rotate()      : Rotate something
Translate()   : change the object location.

### Function

- GetComponent<Class_name>()    : get component object  //  ex) rigid = GetComponent<Rigidbody2D>();

- FixedUpdate()                 : When physics updates, then use this function not Update.
  - 1. AddForce

- Debug.Log()                   : To print a witty msg to the console

### Syntax

- Seriallize [Seriallize] ~~ : This gives attribute.