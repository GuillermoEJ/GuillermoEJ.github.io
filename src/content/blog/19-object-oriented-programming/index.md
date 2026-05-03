---
title: "Thinking About Systems"
description: "How object-oriented design  changed the way I program."
date: "May 20 2023"
draft: false
tags: ["programming", "design"]
---

## A Crisis of Complexity

There was a moment in computing history when everything nearly broke. In the 1960s and 1970s, as software projects grew larger and more ambitious, something became clear: the traditional ways of programming weren't scaling. Projects went wildly over budget. Code became unmaintainable. Systems that worked in the lab fell apart in production. The software industry faced what people called the "Software Crisis," and for a while, it seemed genuinely uncertain whether we could ever build truly complex systems reliably.

Looking back, I realize that crisis was fundamentally a crisis of thinking. We had developed techniques for organizing small programs, procedural programming, structured programming, but these techniques didn't translate well to large systems. It's like trying to organize a city using the principles you'd use to organize a small house. The techniques break down at scale.

Object-oriented programming emerged not as just another set of syntax rules or language features. It represented a fundamental shift in how we thought about problems. Instead of thinking in terms of functions operating on data, we started thinking in terms of objects, discrete entities with their own behavior and internal state. It was a paradigm shift as significant as the move from assembly language to high-level languages.

## The Paradigm Shift

When I first learned programming, I thought in verbs. How do I calculate this? How do I transform that data? The programs I wrote were sequences of instructions, procedures that operated on data stored separately. This worked for simple programs, but something always felt off about the organization. There was too much cognitive separation between related pieces of information and the operations that worked on that information.

Object-oriented programming flipped this perspective. Instead of asking "what do I do?", we started asking "what are the entities in my system?" A better question. When you model a banking system, instead of having separate functions for "calculate balance" and separate data structures for "customer accounts," you have Account objects that know how to calculate their own balance. The balance calculation belongs to the Account, not to some external function.

This shift reflects something profound about how humans naturally think. We don't think in pure abstractions. We think about things, about entities, about actors in a system. An Account is a noun. A Customer is a noun. A Transaction is a noun. Programming in nouns feels natural because it maps more directly to how we conceptualize the world.

More importantly, this shift acknowledged a deep truth about complexity: when you organize code around entities rather than around procedures, you can intuitively understand larger systems. The relationships between parts become clearer. The responsibilities of each component become more localized.

## The Foundations: Abstraction, Encapsulation, and Modularization

As I studied OOP more deeply, several core principles emerged as fundamental. These weren't arbitrary rules. They were solutions to real problems that every programmer faces when trying to build systems.

**Abstraction** is the art of hiding unnecessary complexity. When I define a BankAccount class, I don't expose every detail of how balances are calculated or how transactions are recorded. Instead, I expose simple operations: deposit, withdraw, check balance. The complexity of how those operations work internally is hidden. This is powerful because it allows me to change the implementation later without affecting code that uses the BankAccount. I'm free to optimize, to change how data is stored, to refactor, as long as the external behavior remains the same.

The principle of abstraction applies recursively. When I use a BankAccount in my code, I don't think about strings and numbers and calculations. I think about an Account, a high-level concept. This layering of abstraction is what lets programmers manage systems thousands of times more complex than what was possible with earlier paradigms. Without abstraction, we'd drown in details.

**Encapsulation** is the enforcement mechanism for abstraction. It says, "Some things are internal to this object. They're private. You can't touch them directly." When I declare a variable as private, I'm not just following a rule. I'm making a promise to future programmers (including myself) that this implementation detail can change. Someone might worry that changing an internal variable will break their code, but if it's properly encapsulated, they know it won't.

I used to see encapsulation as tedious. "Why do I need private? My code is small, and I'll remember how everything works." Then I came back to code I wrote two years earlier and realized that I had no idea why I set up the internal structure the way I did. Encapsulation would have saved me hours of relearning my own code.

**Modularization** is the organization principle. It says that a system should be composed of cohesive modules, each with clear responsibilities, with minimal dependencies between them. A well-modularized system is easier to understand because each module tells a focused story. It's easier to test because you can test modules independently. It's easier to modify because changes in one module are less likely to ripple through the entire system.

What struck me about modularity is that it's not unique to OOP. But OOP makes modularity natural. Classes provide natural module boundaries. The principle of single responsibility, one class, one reason to change, gives you guidance for where to draw those boundaries.

## From Theory to Implementation

As I learned the specific mechanics of OOP in Java, I realized that the language itself was teaching me a way of thinking.

**Classes and objects** are the basic units. A class is a blueprint, a template describing what objects of that type should know and be able to do. An object is an instance of that class, a specific incarnation with its own internal state. When I create a new BankAccount object, it carries its own balance, its own transaction history. The class provides the structure; the object provides the individuality.

**Constructors** are how objects begin their existence. They're not arbitrary functions. They're the moment when an object takes its first breath, when it initializes its internal state to a valid starting point. A well-designed constructor ensures that every object begins its life in a coherent state. I can't have an Account with a balance field that's never been initialized.

**Methods** are the behaviors that objects can perform. They're functions, but they're functions that belong to an object, that operate on that object's state. When I call `account.withdraw(100)`, I'm not calling some external function. I'm sending a message to the account. I'm asking it to perform an action on itself. This framing changed how I think about programming. It shifted from imperative ("do this to that") to communicative ("ask this object to do something").

**Attributes** are the state that objects carry. But the key insight is that attributes should be private. The internal implementation of an object is its own business. If I need to access an attribute, I should do so through a method. This allows the object to enforce constraints on its own data. If I want to set a customer's age, the object can check that the age is valid. If I'm changing how age is stored internally (maybe from an integer to a date of birth later), I can do so without breaking code that uses my class.

**Static members** are different. They belong to the class itself, not to instances. When I declare something as static, I'm saying "this is shared across all instances" or "this is a utility function associated with this class." I learned to use static members sparingly. In my experience, overuse of static members happens when the design is confused about what a class really represents.

## The Physics of Good Design

After learning the mechanics, I started studying the principles that separate well-designed code from code that works but feels wrong. These principles emerged repeatedly in discussions about design.

**Cohesion** means that the pieces within a module belong together. They share a common purpose. When I look at a low-cohesion module, it feels random. It's doing several unrelated things. A high-cohesion module tells a focused story. The single responsibility principle is really about cohesion. One class, one reason to change, means every part of that class serves the same purpose.

**Coupling** is the degree to which one module depends on the internals of another. Low coupling means modules are independent. They interact through interfaces, through contracts, but not through direct dependence on each other's internal details. This is often in tension with cohesion. Sometimes to achieve high cohesion, you create tight coupling. The art is finding balance.

**Code that explains itself** is worth its weight in gold. When I'm reading code and I instantly understand what's happening because variable names are clear, because method names describe what they do, because the structure mirrors the problem domain, that's the result of deliberate design. Comments should explain why, not what. If you need comments to explain what the code does, the code isn't clear enough.

**DRY (Don't Repeat Yourself)** and **YAGNI (You Aren't Gonna Need It)** are principles about removing waste. DRY says if you're writing the same logic twice, you've missed an opportunity to create a reusable component. YAGNI says don't add functionality because you think you might need it someday. Build only what you need today. This prevents code bloat and keeps systems focused.

## The Higher-Level Patterns: Inheritance and Polymorphism

As I worked with OOP, I discovered that certain patterns of organization appeared repeatedly. Two mechanisms became particularly important: inheritance and polymorphism.

**Inheritance** lets you create hierarchies of classes. A SavingsAccount is a special kind of Account. It inherits all the basic Account functionality but adds specific behavior for savings accounts. This seems straightforward but contains subtle complexity.

The power of inheritance is that you can substitute a SavingsAccount anywhere an Account is expected. Code written to work with generic Accounts works with savings accounts, checking accounts, investment accounts, as long as they all inherit from Account. This is incredibly practical.

But inheritance can also become a trap. When used poorly, inheritance hierarchies become rigid and confusing. You end up with deep hierarchies where at the bottom, classes are compromises, trying to suit purposes they were never really designed for. I learned that composition is often a better alternative. Instead of "A Manager is a Person with additional responsibilities," I sometimes design it as "A Manager has a Person, and the Person delegates certain responsibilities to the Manager."

**Polymorphism** is the flexibility to treat objects of different types interchangeably through a common interface. When I pass an Account to a method, I don't need to know its specific type. It could be a SavingsAccount or a CheckingAccount. As long as it responds to the Account interface, it works. This is powerful because it lets me write methods once and apply them to entire hierarchies of related types.

What I love about polymorphism is that it mirrors how the real world works. When you hand an object to someone, they might not know its exact type, but they know what interface it presents, and they interact with it through that interface. Software that uses polymorphism feels natural for that reason.

## The Design Contracts: Promises and Obligations

One principle that transformed how I think about code is "Design by Contract." The idea is that each class or method makes explicit promises about what it will do. If you give it inputs satisfying certain conditions (preconditions), it promises to return a result satisfying certain properties (postconditions). While the object exists, certain conditions are always true about its state (invariants).

When I started thinking in these terms, my code became more predictable. I stopped writing defensive code that tried to handle every possible misuse. Instead, I specified clearly what I expected from callers and what they could expect from me. This clarity prevents bugs before they happen.

For example, if I have a method `calculateInterest(double rate)`, I can specify: "rate must be between 0 and 1" (precondition). "The return value is the calculated interest" (postcondition). "After calling this method, the account's balance is unchanged" (invariant). These specifications, whether formal or informal, prevent entire categories of bugs.

## Where OOP Excels and Where It Struggles

I want to be honest about OOP's limitations. Object-oriented programming is powerful for modeling systems with many related entities that need to cooperate. Graphical user interfaces, business applications, game engines, these are domains where OOP shines.

But OOP isn't universal. Some problems are naturally functional in character. Data transformation pipelines, mathematical computations, these sometimes feel awkward when forced into an object-oriented model. And OOP can encourage over-engineering. Developers sometimes create elaborate hierarchies and design patterns for simple problems that could be solved more directly.

There's also the learning curve. OOP forces you to think about things, abstractions, hierarchies, responsibilities, before you code. This is good for large systems but sometimes feels like friction for small scripts or simple algorithms.

## What OOP Taught Me About Thinking

Working extensively with object-oriented programming changed how I think about problems in general, not just programming. When I face a complex system, an organization, an ecosystem, a social structure, I find myself asking OOP questions. What are the natural entities? What are their responsibilities? How do they interact? What contracts govern those interactions?

This isn't because OOP is inherently superior. Rather, OOP forced me to become conscious of how I organize complexity. I learned that when you face a complicated problem, the first step is usually not to solve it. The first step is to understand its structure. What are the entities? What are the relationships? Once you've understood the structure, the solution often becomes obvious.

I also learned that design is about managing constraints and making tradeoffs. Perfect abstraction is impossible. Perfect modularity is impossible. Every design decision involves compromising on something. Good design is recognizing which compromises matter and making conscious choices about them rather than stumbling into them.

Object-oriented programming taught me that thoughtful organization, clear interfaces, and careful separation of concerns are not just technical requirements. They're expressions of respect for the future, respect for whoever will need to understand this code, enhance it, or debug it. That future person might be me, reacquainted with code I wrote years ago. It might be a colleague joining the team. It might be someone I'll never meet. Either way, clear design is an act of solidarity with them.

## Conclusion

Object-oriented programming is one of the most influential ideas in computer science. It emerged from a crisis, the realization that traditional techniques couldn't scale to the complexity of modern software. Instead of giving up, the field invented a new way of thinking. We started modeling software after real-world entities. We emphasized hiding complexity, organizing into modules, and creating clear interfaces.

What strikes me now is that these weren't arbitrary choices. They emerged from deep insights about human cognition and system organization. We think in terms of entities. We manage complexity through abstraction. We organize large systems into coherent modules. OOP codified these insights into concrete practices.

Today, variants of object-oriented design appear even in languages that aren't strictly object-oriented. The principles have proven robust. More importantly, OOP taught our field valuable lessons about how to think about complexity. Those lessons transcend any particular language or technique.

When I look at the complexity software projects tackle today, I'm sometimes amazed. Systems with millions of lines of code, used by billions of people, coordinating activities across the planet. These wouldn't be imaginable without the conceptual breakthroughs that OOP represents. We learned how to organize complexity. We learned how to build systems large enough and durable enough to evolve over decades.

That's the real legacy of object-oriented programming. Not the syntax, not the specific language features, but the fundamental shift in how we think about solving problems. It taught us that great software isn't built. It's designed. And good design comes from understanding your domain, respecting your future self and your collaborators, and having the courage to refactor when your understanding deepens. That's a lesson that extends far beyond programming.