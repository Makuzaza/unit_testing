# Test cases for getName

## **getName(number)**

The method searches the given phone number from the registry. If the number is found, nethod returns the owner of the phone.

If np phone with given number is found, the method returns null.
If the parameter is missing, null is also returned.

## Tests

All tets use default data

### Test 1. getName for number '05040302'

returns

```json
{ "firstname": "Leila", "lastname": "Hökki" }
```

### Test 2. getName for number '56743290'

```json
{ "firstname": "Matt", "lastname": "River" }
```

### Test 3. Wrong number '0000'

returns null

### Test 4. Missing parameter

returns null
