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