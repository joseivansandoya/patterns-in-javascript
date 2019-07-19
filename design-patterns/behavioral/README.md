###### Design Patterns Family

# Behavioral patterns
Behavioral patterns define manners of communication between classes and objects. Making it easier and more flexible for these entities to communicate.

## Strategy
[View code](https://github.com/joseivansandoya/patterns-in-javascript/blob/master/design-patterns/behavioral/strategy.js)

Strategy Design Pattern is a type of behavioral design patterns that encapsulates a "family" of algorithms and selects one from the pool for use during runtime. The algorithms are interchangeable, meaning that they are substitutable for each other.
#### Key features
In this pattern there are key elements that implement following features:
- **Strategy class:** responsible for implementing basic interface that will be used by clients
- **Concrete strategy:** responsible for extending strategy class and overriding methods with own algorithms/logic
- **Client:** will be able to use strategy class by composition over inheritance and make use of its methods
- **Context:** will be able to call the Client at any time and interact with its methods. Context has to specify wich strategy client will work with.
#### When to use it?
- When it is necessary to select between different algorithms options in run-time
- When you want to decouple behaviour from a specific class so that behaviour can be used by other classes too
- When a concrete behaviour can take different shapes and all of them should be reachable
