# Test cases for

### **getAllNumbersByType(type)**

Returns an array of objects consisting of names and numbers of given type. If no number of given type is found, an empty array is returned.

If a person have multiple numbers of the same type, each of them will be in it's own object.

If a parameter is missing, the method throws an exception `missing paramaters`.

The format of the object in the array is:

```json
{ "firstname": "", "lastname": "", "phones": [{ "type": "", "tel": "" }] }
```

#### Example

`type` work:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": { "type": "work", "tel": "09-1234567" }
  },
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": { "type": "work", "tel": "12345678910" }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": { "type": "work", "tel": "1234567-09" }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": { "type": "work", "tel": "12345678910" }
  }
]
```

`type` mobile:

```json
[
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": { "type": "mobile", "tel": "1234567-09" }
  }
]
```

## Tests

All tests use default data

### Test 1. type work

return

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": { "type": "work", "tel": "09-1234567" }
  },
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": { "type": "work", "tel": "12345678910" }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": { "type": "work", "tel": "1234567-09" }
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": { "type": "work", "tel": "12345678910" }
  }
]
```

### Test 2. type mobile

```json
[
  { "firstname": "Matt", "lastname": "River" },
  { "type": "mobile", "tel": "1234567-09" }
]
```
