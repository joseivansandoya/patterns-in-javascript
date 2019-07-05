###### Design Patterns

# Creational patterns
Creational patterns defines a way to instantiate a single object or a group of ones

## Singleton
[View code](https://github.com/joseivansandoya/software-fundamentals-js/blob/master/patterns/design-patterns/creational/singleton.js)

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


## Factory method
[View code](https://github.com/joseivansandoya/software-fundamentals-js/blob/master/patterns/design-patterns/creational/factory-method.js)

The factory method pattern help you instantiate and object that later will take the shape of a specific class. The factory pattern wraps a constructor for different types of objects and returns instances of the objects via a simple API. It makes it easy to create different objects by exposing a simple API that return the specified object type.
#### Key features
- It strongly relies on inheritance, as object creation is delegated to subclasses that implement the factory method to create objects
- The final shape of the object created can be implemented in a child class
- The final shape of the object created can be implemented in a base class and optionally overridden by derived classes
#### When to use it?
- When you want to avoid the complex process of instantiating an object
- When it is necessary to deffer the shape of an object until a specific moment of the program
- When a class cannot anticipate the type of objects it needs to create beforehand
