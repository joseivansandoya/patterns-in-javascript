###### Design Patterns Family

# Creational patterns
Creational patterns defines a way to instantiate a single object or a group of ones

## Singleton
[View code](https://github.com/joseivansandoya/patterns-in-javascript/blob/master/design-patterns/creational/singleton.js)

The singleton pattern is used to ensure that only one instance of a class is created. 
All further references to objects of the singleton class refer to the same underlying instance.
The main goal of the singleton pattern is to keep control of the object creation. To make this possible it is necessary somehow to make the constructor of the class private.
#### Key features
- The class has only one instance
- The class constructor is private
- The access to the singleton instance is generally global for the application
#### When to use it?
- When it is necessary to keep control of system resources
- System caches
- Database connections
- Socket connections


## Factory Method
[View code](https://github.com/joseivansandoya/patterns-in-javascript/blob/master/design-patterns/creational/factory-method.js)

The factory method pattern helps you instantiate and object that later will take the shape of a specific class. The factory pattern wraps a constructor for different types of objects and returns instances of the objects via a simple API. It makes it easy to create different objects by exposing a simple API that return the specified object type.
#### Key features
- It strongly relies on inheritance, as object creation is delegated to subclasses that implement the factory method to create objects
- The final shape of the object created can be implemented in a child class
- The final shape of the object created can be implemented in a base class and optionally overridden by derived classes
#### When to use it?
- When you want to avoid the complex process of instantiating an object
- When it is necessary to deffer the shape of an object until a specific moment of the program
- When a class cannot anticipate the type of objects it needs to create beforehand


## Abstract Factory
[View code](https://github.com/joseivansandoya/patterns-in-javascript/blob/master/design-patterns/creational/abstract-factory.js)

The abstract factory allows you to create families of related products to be used together within their implementation. The main rule is that an abstract factory have to provide an interface to create a family of objects.
#### Key features
This pattern has well defined elements that become its key features:
- **Product**: It is an object built by a factory and it is included in a family of objects. It is very specific as there is no abstraction to it. Example: *NestleMilk*, *LactalisMilk*
- **Abstract Product**: It is a higher level view of a product which defines its family. Example: *Milk*, *Cheese*
- **Concrete Factory**: It is a factory that is “physically” micro-managing the creation and completion of a product. Example: *NestleFactory*, *LactalisFactory*
- **Abstract Factory**: Is an interface for creating families of related or dependent objects without specifying their concrete classes. Example: *DairyFactory*
#### When to use it?
- When you want to create a collection of related products that are designed to be used together
- When you want your system to have independence between the creation, composition and representation of its products
- When you want to hide the implementations of your products, only revealing the required interface to provide access to their use


## Builder
[View code](https://github.com/joseivansandoya/patterns-in-javascript/blob/master/design-patterns/creational/builder.js)

The Builder pattern exists in order to improve the readability and maintainability of an object instantiation. This pattern avoids the problem of having to pass too many arguments to an object constructor. Instead of that, the pattern allows you to define and use methods that will initialize those arguments. You can code additional validations for every argument if necessary.
#### Key features
- It separates the complexities of the creation logic from the final representation
- It is completely usefull in the Object Oriented Paradigm
- The main class delegates object creation to a Builder object instead of creating the objects directly
#### When to use it?
- When you want to have more control over the arguments
- When you need to implement partial object creation (Object creation with some arguments)
