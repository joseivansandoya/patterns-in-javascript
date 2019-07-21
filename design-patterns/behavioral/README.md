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


## Observer
[View code](https://github.com/joseivansandoya/patterns-in-javascript/blob/master/design-patterns/behavioral/observer.js)

This is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.
#### Key features
In this pattern there are key elements that implement following features:
- **Subject:** This is the object that will send out a notification to all of the ‘observers’ who want/need to know that the subject was updated. In our case, the subject will be the application state object
- **Observers:** These are the objects that want to know when the subject has changed. In our case, these will be the page elements that need to update when the application state changesmethods
#### When to use it?
- When a one-to-many dependency between objects should be defined without making the objects tightly coupled
- When it should be ensured that when one object changes state an open-ended number of dependent objects are updated automatically
- When it should be possible that one object can notify an open-ended number of other object
