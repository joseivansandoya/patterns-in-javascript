###### Design Patterns Family

# Structural patterns
Structural patterns defines a way to instantiate a single object or a group of ones

## Adapter
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