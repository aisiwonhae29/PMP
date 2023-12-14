// a16 - (data) instanceof (data form)

/* check the data, with given data form */

// case 1: check the object belongs to a particular class or is an instance of 

function Car (make, model) {
    this.make = make;
    this.model = model;
}

let myCar = new Car('huyndai', 'avante');

console.log(myCar instanceof Car);


// case 2: check the object whether htmlFormat object or not

let object;

console.log(object instanceof HTMLFormElement);