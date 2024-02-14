# Test cases for getAllNumbers

### **getAllNumbers()**

Returns all phone numbers in an array, each as a person object of form:

```json
{ "firstname": "", "lastname": "", "phones": [] }
```

The phone object in phones array is of form:

```json
{ "type": "", "number": "" }
```

If a person doesn't have a phone (the phone field is an empty array), the person is not added into the result array. If all persons are missing, an empty array is returned.

## Tests

### Test 1. Test with default data

returns same array that was use to create the register

### Test 2. some phones missing

testData:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "work", "number": "876543221" },
      { "type": "work", "number": "05040302" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  }
]
```

returns:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "work", "number": "876543221" },
      { "type": "work", "number": "05040302" }
    ]
  }
]
```

### Test 3. some phones missing 2

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "work", "number": "876543221" },
      { "type": "work", "number": "05040302" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": []
  },
  {
    "firstname": "Mary",
    "lastname": "Jones",
    "phones": [{ "type": "home", "number": "12345678" }]
  }
]
```

returns:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "work", "number": "876543221" },
      { "type": "work", "number": "05040302" }
    ]
  },
  {
    "firstname": "Mary",
    "lastname": "Jones",
    "phones": [{ "type": "home", "number": "12345678" }]
  }
]
```

### Test 4. All phones are missing

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

### Test 5. All persons missing

testData is []
returns []
