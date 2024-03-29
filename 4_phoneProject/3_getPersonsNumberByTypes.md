# Test cases for getPersonsNumbersByType

## **getPersonsNumbersByType(firstname,lastname,type)**

Method returns an array of phone numbers of given `type` belonging to given person with `firstname` and `lastname`.

For example Leila Hökki and work:

```json
["87654321", "05040302"]
```

Matt River and mobile

```json
["0409812345"]
```

if no person with given name is found, an empty array [] is returned
if no number with given type is found, an empty array [] is returned
if at least one parameter is missing, an exception `'missing parameter'` is thrown.

## Tests

All test use the default data

### Test 1. Leila Hökki and work

parameters: firstname='Leila', lastname='Hökki' and type='work'

expect to return

```json
["87654321", "05040302"]
```

## Test 2. Matt River and mobile

returns

```json
["0409812345"]
```

## Test 3. Wrong name or type

test with values:
firstname Matt, lastname: River type x
firstname Matt lastname x type mobile
firstname x lastname River type mobile

returns empty array [].

## Test 4. parameter missing

1 parameter missing: `Matt`, `River`
2 parameters missing: `Matt`
All parameters missing

throws an exception 'missing parameter'

## Test 5. Test with an empty string as type

Modified data:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "", "number": "87654321" },
      { "type": "work", "number": "05040302" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [{ "type": "work", "number": "2468159" }]
  }
]
```

Testing with Leila Hökki and type ""

returns

```json
["87654321"]
```
