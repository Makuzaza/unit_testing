'use strict'

const PhoneRegister = require('../phoneregister');
const phones = require('../phones.json');

describe('Test cases for the constructor', ()=>{
    test('Test 1: missing parameter throws an exception', ()=>{
        expect(() => new PhoneRegister()).toThrow('phone data missing');
    });
});

describe('Tests for getTypes', ()=>{
    test('Test 1: get types for default data', ()=>{
        const register=new PhoneRegister(phones);
        expect(register.getTypes()).toEqual(["home", "work", "mobile"]);
    });

    test('Test 1: get types for default data', () => {
        const register = new PhoneRegister(phones);
        const expectedResult = ["home", "work", "mobile"]
        expect(register.getTypes()).toEqual(expectedResult)
    })

    test('Test 2: some type will be an empty string', () => {
        const testData = [
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
              "phones": [
                { "type": "work", "number": "10123456747" }
              ]
            }
          ]
          const register = new PhoneRegister(testData);
          const expectedResult = ['home', '', 'work'];
          expect(register.getTypes()).toEqual(expectedResult);
    })

    test('Test 3: only home phones', () => {
        const testData = [
            {
              "firstname": "Leila",
              "lastname": "Hökki",
              "phones": [
                { "type": "home", "number": "040-1234567" },
                { "type": "home", "number": "09-1234567" }
              ]
            },
            {
              "firstname": "Matt",
              "lastname": "River",
              "phones": [
                { "type": "home", "number": "10123456747" }
              ]
            }
          ]
          const register = new PhoneRegister(testData);
          expect(register.getTypes()).toEqual(["home"]);
    })

    test('Test 4: no phones found', () => {
        const testData = [
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
          const register = new PhoneRegister(testData);
          expect(register.getTypes()).toEqual([]);
    })

    test('Test 5: no persons', () => {
          const register = new PhoneRegister([]);
          expect(register.getTypes()).toEqual([]);
    });
});

describe('Testing getPersonsNumberByType', ()=>{
    const register = new PhoneRegister(phones);
    describe('Test 1-3', ()=>{
        const testValues = [
            ['Leila', 'Hökki', 'work', ['876543221', '05040302']],
            ['Matt', 'River', 'mobile', ['0409812345']],
            ['Matt', 'River', 'X', []],
            ['Matt', 'X', 'mobile', []],
            ['X', 'River', 'mobile', []],
        ]
        test.each(testValues)('%s, %s, %s returns %s', (fn, ln, type,result) =>{
            expect(register.getPersonsNumberByType(fn, ln, type)).toEqual(result);
        });
    });

    describe('Test 4 parameter missing', ()=>{
        test('1 parameter missing', ()=>{
            expect(()=>register.getPersonsNumberByType('Matt', 'River')).toThrow('missing parameter');
        });
        test('2 parameters missing', ()=>{
                expect(()=>register.getPersonsNumberByType('Matt')).toThrow('missing parameter');
        });
        test('All parameters missing', ()=>{
                expect(()=>register.getPersonsNumberByType()).toThrow('missing parameter');
        });
    });

    describe('Test 5: testing an empty string as type', ()=>{
        const testData = [
                {
                  "firstname": "Leila",
                  "lastname": "Hökki",
                  "phones": [
                    { "type": "home", "number": "12345678" },
                    { "type": "", "number": "876543221" },
                    { "type": "work", "number": "05040302" }
                  ]
                },
                {
                  "firstname": "Matt",
                  "lastname": "River",
                  "phones": [{ "type": "work", "number": "2468159" }]
                }
        ];
        const modifiedRegister = new PhoneRegister(testData);

        test('Leila Hökki type "" ', ()=>{
            expect(modifiedRegister.getPersonsNumberByType('Leila', 'Hökki', '')).toEqual(['876543221']);
        })
    });
});

describe('Testing getAllNumbersByType', ()=>{
  const register = new PhoneRegister(phones);
  test('Test 1: type work', ()=>{
      const result = [
        {
          "firstname": "Leila",
          "lastname": "Hökki",
          "number": { "type": "work", "tel": "876543221" }
        },
        {
          "firstname": "Leila",
          "lastname": "Hökki",
          "number": { "type": "work", "tel": "05040302" }
        },
        {
          "firstname": "Matt",
          "lastname": "River",
          "number": { "type": "work", "tel": "2468159" }
        }
      ]
      expect(register.getAllNumbersByType('work')).toEqual(result);
  });

  test('Test 2: type mobile', ()=>{
    const result = [
      { "firstname": "Matt", "lastname": "River", 
      "number": {"type": "mobile", "tel": "0409812345" }}
    ]
    expect(register.getAllNumbersByType('mobile')).toEqual(result);
  });

  test('Test 3: type X', ()=>{
    expect(register.getAllNumbersByType('X')).toEqual([]);
  });

  test('Test 4: no parameter', ()=>{
    expect(()=>register.getAllNumbersByType()).toThrow('missing parameter');
  });
}); 

describe('Testing getAllNumbers', ()=>{
  test('Test 1: testing with default data', ()=>{
    const register = new PhoneRegister(phones);
    expect(register.getAllNumbers()).toEqual(phones);
  });

  test('Test 2: some phones missing', ()=>{
    const testData = [
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
    ];

    const result = [
      {
        "firstname": "Leila",
        "lastname": "Hökki",
        "phones": [
          { "type": "home", "number": "12345678" },
          { "type": "work", "number": "876543221" },
          { "type": "work", "number": "05040302" }
        ]
      }
    ];
    const register = new PhoneRegister(testData);
    expect(register.getAllNumbers()).toEqual(result);
  })

  test('Test 3: some phones missing 2', ()=>{
    const testData = [
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
    ];

    const result = [
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
    ];
    const register = new PhoneRegister(testData);
    expect(register.getAllNumbers()).toEqual(result);
  });

  test('Test 4: all phones are missing', ()=>{
    const testData =
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
    ];

    const register = new PhoneRegister(testData);
    expect(register.getAllNumbers()).toEqual([]);
  });

  test('Test 5: All persons missing', ()=>{
    const register = new PhoneRegister([]);
    expect(register.getAllNumbers()).toEqual([]);
  });
});

describe('Testing getName', ()=>{
  const register = new PhoneRegister(phones);

  describe('Test 1 and Test 2', ()=>{
    const testValues = [
      ["12345678", { "firstname": "Leila", "lastname": "Hökki" }],
      ["0409812345", { "firstname": "Matt", "lastname": "River" }]
    ];

    test.each(testValues)('number %s returns %p', (number, result) =>{
      expect(register.getName(number)).toEqual(result);
    });
  })

  test('Test 3: Wrong number 00000', ()=>{
    expect(register.getName('00000')).toBeNull();
  });

  test('Test 4: missing parameter', ()=>{
    expect(register.getName()).toBeNull();
  });

}); 