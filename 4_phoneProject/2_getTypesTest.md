# Test cases for getTypes

## **getTypes()**

returns all phone types in an array. The type is added to the result array only once in the order they are found. If there are no phones or no persons, an empty array [] is returned. Type may be an empty string.

For example:

```json
["home", "work", "mobile"]
```

## Test 1: get types for default data

expect to return

```json
["home", "work", "mobile"]
```

## Test 2: some type will be an empty string

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

expect to return

```json
["home", "", "work"]
```

## Test 3. Only home phones

Testdata:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "home", "number": "05040302" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [{ "type": "home", "number": "2468159" }]
  }
]
```

expect to return

```json
["home"]
```

## 4. No phones found

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

## Test 5. No persons

Testdata is []
returns []
