# Dice class API

This is a Dice class for dice games. Dice holds the number of dots.
The number of dots is between 1 and given upper bound (included).
The maximum upper bound is 20.

If the dice hasn't been rolled, the number of dots is 0. After yhe dice has been rolled, the dot count can't become 0 again.

## Operations

### **constructor(upperbound)**

- initializes the dice with upper bound that is passed as a parameter
- if no upper bound is given, the default will be 6
- initializes the dot count to 0

if upper bound is not a number and not an integer, throw an exception `'upper bound must be integer'`
Note: '1' is not casted to number

- if the upper bound is not between 2 and 20, an exception is thrown:
  - upper bound > 20: `'upper bound too big'`
  - upper bound < 2:`'upper bound too small'`

### methods

#### **roll()**

- rolls the dice
- when rolled, the dot count will become a random number between 1 and the upper bound
- returns nothing

#### **toString()**

- return dot count as a text. For example `'4'`
- if the dice hasn't been rolled yet, returns a text `'Not rolled yet'`

### Getters

#### **dots**

- returns the number of dots

#### **minimumValue**

- returns the minimum value od dots. It should be 1

#### **maximumValue**

- returns the upper bound of the dice
