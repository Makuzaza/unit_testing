# Test cases for getAllNumbersByType

## **getAllNumbersByType(type)**

Returns an array of objects consisting of names and numbers of given type. If no number of given type is found, an empty array [] is returned.

If a person have multiple numbers of the same type, each of them will be in it's own object.

If a parameter is missing, the method throws an exception `'missing parameter'`.

The format of the object in the array is:
```json
{"firstname":"", "lastname":"", "number":{"type":"", "tel":""}}
```

#### Example

`type` work

```json
[
    {"firstname":"Leila", "lastname":"Hökki", "number":{"type":"work", "tel":"87654321"}},
    {"firstname":"Leila", "lastname":"Hökki", "number":{"type":"work", "tel":"05040302"}},
    {"firstname":"Matt", "lastname":"River", "number":{"type":"work", "tel":"2468159"}
]
```

`type` mobile:
```json
[
    {"firstname":"Matt", "lastname":"River", "number":{"type":"mobile", "tel":"0409812345"}
]
```

## Tests

All tests use default data

### Test 1. type work

returns
```json
[
    {"firstname":"Leila", "lastname":"Hökki", "number":{"type":"work", "tel":"87654321"}},
    {"firstname":"Leila", "lastname":"Hökki", "number":{"type":"work", "tel":"05040302"}},
    {"firstname":"Matt", "lastname":"River", "number":{"type":"work", "tel":"2468159"}
]
```

### Test 2. type mobile

```json
[
    {"firstname":"Matt", "lastname":"River", "number":{"type":"mobile", "tel":"0409812345"}
]
```

### Test 3. Type X

returns []

### Test 4. missing parameter

if parameter is missing, throws an exception 'missing parameter'
