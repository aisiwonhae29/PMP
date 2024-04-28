# Physics 

### Gravity

\# Inspector

pysics 2D > Rigid body > gravity

\# topbar > Edit

Project Setting > Physics 2D > Gravity

### Collider

- about character's hit extent

### script

\# movement

- Give strength     : obj.AddForce(inputVec)
- Control velocity  : obj.velocity = inputVec;
- Move position     : obj.MovePosition(rigid.position + inputVec);

\# substance

- OnCollisionEnter2D()  : Give event when collide something.