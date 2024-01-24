# Test cases for Dice

## **constructor(upperBound)**

1. Create a dice with no upper bond given
   initializes dice with upper bound 6

   - maximumValue is 6
   - minimumValue is 1
   - dots is 0

2. Create a dice with upper bound 2-20

   - maximumValue is upper bound
   - minimumValue is 1
   - dots is 0

3. Test the exceptions

- 0 throws `'upper bound too small'`
- 1 throws `'upper bound too small'`
- -1 throws `'upper bound too small'`
- -10 throws `'upper bound too small'`
- 21 throws `'upper bound too big'`
- 'a' throws `'upper bound must be an integer'`
- 2.5 throws `'upper bound must be an integer'`

## Test cases for **roll()**

### create dice with no upper bound

- if not rolled, dots is 0 (optional, is tested in an other test)
- when rolled the dots is
  - greater than or equal to 1
  - less than or equal to 6

### create dice with upper bound 20 (or 2...20)

- when rolled the dots is
  - greater than or equal to 1
  - less than or equal to 20 (or upper bound)

## Test cases for **toString()**

in both cases create a new dice (no upper bound given)

- roll the dice. Compare resulting text with dots converted to text
- don't roll the dice. Compare the result to `'Not rolled yet'`

## testing getters

### minimumValue

expect it to be 1

### maximumValue

expect it to be the upper bound (2...20)

### dots

if not rolled, expect it to be 0
