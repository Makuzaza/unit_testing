# Test cases for getTypes

## **getTypes()**

returns all phone types in an array. the type is added to the result array only once in the order they are found.
If there are no phones or no persons, an empty array [] is returned.
Type may be an empty string.

for example:

```json
["home", "work", "mobile"]
```

## Test 1: get types for default data

expect to return

```json
["home", "work", "mobile"]
```

## Test 2: some type will be an empty string

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "040-1234567" },
      { "type": "", "number": "09-1234567" },
      { "type": "work", "number": "12345678910" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [{ "type": "home", "number": "1234567-051" }]
  }
]
```

expect to return

```json
["home", "", "mobile"]
```

## Test 3: only home phones

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "040-1234567" },
      { "type": "work", "number": "12345678910" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [{ "type": "home", "number": "1234567-051" }]
  }
]
```

expect to return

```json
["home"]
```

## Test 4: no phones found

returns an empty array []
Testdata:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": []
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  }
]
```

returns []

## Test 5: no persons

Test data is []
returns []
