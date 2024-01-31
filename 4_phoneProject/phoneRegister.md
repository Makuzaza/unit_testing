# Phone API

## Data

Data will be in a json file. A person can be a data array only ones.
Names are unique so for example Leila Hökki can-t exist twice in the json.
Phone number is unique and can be only once in the json.
We also assume that the json file is valid and no field is missing.
An empty phones array is ok, also all persons may be missing so tha data in on empty array.

### phones.json

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "040-1234567" },
      { "type": "work", "number": "09-1234567" },
      { "type": "work", "number": "12345678910" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "River",
    "phones": [
      { "type": "home", "number": "1234567-051" },
      { "type": "mobile", "number": "1234567-09" },
      { "type": "work", "number": "10123456747" }
    ]
  }
]
```

## class PhoneRegister

### **constructor(data)**

Phones json array is passed in as a parameter 'data'. If parameter is missing throws an excepion `'phone data missing'`.

### **getTypes()**

returns all phone types in an array. the type is added to the result array only once in the order they are found.
If there are no phones or no persons, an empty array [] is returned.
Type may be an empty string.

for example:

```json
["home", "work", "mobile"]
```

### **getPersonsNumbersByType(firstname, lastname, type)**

Method returns an array of phone numbers of given type `type` belonging to given person with `firstname` and `lastname`.

For example Leila Hökki work numbers:

```json
["09-1234567", "12345678910"]
```

For example Matt River work numbers:

```json
["1234567-09", "10123456747"]
```

If no person with given name is found, an empty array [] is returned.
If no number with given type is found, an empty array [] is returned.
If at least one parameter is missing, an exception `Missing parameter` is thrown.

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

### **getAllNumbers()**

Returns all phone numbers in an array, each as a person object of forms:

```json
{ "firstname": "", "lastname": "", "phones": [] }
```

The phone object in phone array is of form:

```json
{ "type": "", "number": "" }
```

If a person doesn't have a phone (the phone field is an empty array), the person is not added into the result array. If all persons are missing an empty array is returned.

### **getName(number)**

The method searches the given phone number from the registry. If the number is found, method returns the owner of that number as an object:

```json
{ "firstname": "", "lastname": "" }
```

If no phone with given number is found, the method returns null.
If the parameter is missing, null is also returned.
