// a02 - Prototype

/*  About prototype

    @@ Concept
    Every object has a prototype. The prototype is an internal property that links an object to its prototype (parent) object.
    It's accessed via the 'prototype' property of a constructor function or directly via the 'Object.getPrototypeOf()' method

    @@ Understand
    When you create objects using constructor functions (e.g., 'function Person(0{}'), JS automatically assigns a ;prototype' property to that constructor function)
    This 'prototype' property is an object it self and holds properties and methods that you want other objects created from this  consstructor to inherit.

    Objects in js inherit properties and methids from their prototype.
*/