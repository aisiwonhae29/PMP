/**
 * * Concept of Factory Method
 * 
 * # about
 * 
 * - The factory method pattern defines an interface for creating an object but lets subclasses decide which class to instantiate.
 * 
 * 
 * # Components
 * 
 * - Product            : The interface or abstract class for objects the factory method creates.
 * - ConcreteProduct    : A concrete implementation of the product.
 * - Creator            : The abstract class or interface that declares the factory method, which returns an object of type product.
 * - ConcreteCreator    : Subclasses that override the factory method to return an instance of a ConcreteProduct.
 */
