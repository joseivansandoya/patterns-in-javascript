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


## Mediator
[View code](https://github.com/joseivansandoya/patterns-in-javascript/blob/master/design-patterns/behavioral/mediator.js)

The essence of the Mediator Pattern is to "define an object that encapsulates how a set of objects interact". It promotes loose coupling by keeping objects from referring to each other explicitly, and it allows their interaction to be varied independently. Client classes can use the mediator to send messages to other clients, and can receive messages from other clients via an event on the mediator class.
#### Key features
This pattern has well defined elements that become its key features:
- **Mediator:** defines the interface for communication between Colleague objects
- **ConcreteMediator:** implements the Mediator interface and coordinates communication between Colleague objects. It is aware of all of the Colleagues and their purposes with regards to inter-communication.
- **Colleague:** defines the interface for communication with other Colleagues through its Mediator
- **ConcreteColleague:** implements the Colleague interface and communicates with other Colleagues through its Mediator
#### When to use it?
- When it is necessary to define a separate (mediator) object that encapsulates the interaction between a set of objects
- When Objects need to delegate their interaction to a mediator object instead of interacting with each other directly


## Chain of Responsibility
[View code](https://github.com/joseivansandoya/patterns-in-javascript/blob/master/design-patterns/behavioral/chain-of-responsibility.js)

The essence of the Mediator Pattern is to "define an object that encapsulates how a set of objects interact". It promotes loose coupling by keeping objects from referring to each other explicitly, and it allows their interaction to be varied independently. Client classes can use the mediator to send messages to other clients, and can receive messages from other clients via an event on the mediator class.
#### Key features
This pattern has well defined elements that become its key features:
- **Mediator:** defines the interface for communication between Colleague objects
- **ConcreteMediator:** implements the Mediator interface and coordinates communication between Colleague objects. It is aware of all of the Colleagues and their purposes with regards to inter-communication.
- **Colleague:** defines the interface for communication with other Colleagues through its Mediator
- **ConcreteColleague:** implements the Colleague interface and communicates with other Colleagues through its Mediator
#### When to use it?
- When it is necessary to define a separate (mediator) object that encapsulates the interaction between a set of objects
- When Objects need to delegate their interaction to a mediator object instead of interacting with each other directly
