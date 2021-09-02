/**
 *
 *  It's important to have a precise vocabulary to talk about how our code performs
 
Useful for discussing trade-offs between different approaches

When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications

Less important: it comes up in interviews!




Big O Notation is a way to formalize fuzzy counting

It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow

We won't care about the details, only the trends






Big O Definition
We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

f(n) could be linear (f(n) = n)
f(n) could be quadratic (f(n) = n  )
f(n) could be constant (f(n) = 1)
f(n) could be something entirely different!






The Problem with Time
Different machines will record different times
The same machine will record different times!
For fast algorithms, speed measurements may not be precise enough?
 */