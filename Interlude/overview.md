**Data types overview**


object { } // arrays, function, data

primitives - building blocks

- string - 'this is a string'
- number - 1, 2, 3, ...
- booleans - true / false
- undefined - value has not be set
- null - 'nothing'
___

**Comparisons with primitives**
- comparing the data value, doesn't care about memory loctaion or adress of the data

```
-comparing strings-                         -comparing numbers-
'gordon' === 'gordon';                      1 === 1
true                                         true

'gordon1' === 'gordon';                     1 === 2
false   //different value                   false

-comparing booleans-                        -comparing null/undefined-
true === true                               undefined === undefined
true                                        true

true === false                              null === null
false                                       true

false === false
true
```
___

**Comparisons with objects**
- comparing references of the object which is the memory adress
```
{} === {}
false

[1, 2, 3] === [1, 2, 3]
false

{} - memory adress #1
{} - memory adress #2
{} - memory adress #3

comparing objects by looking at the memory adress

{} === {} //more than one object
false

var houseA = {}; //comparing one object
houseA === houseA
true
```
