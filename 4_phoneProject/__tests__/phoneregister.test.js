'use strict'

const PhoneRegister = require('../phoneregister');
const phones = require('../phones.json');

describe('Test cases for the constuctor', () => {
    test('Test 1: missing parameter throws an exception', () => {
       expect(() => new PhoneRegister()).toThrow('phone data missing')
    })
});

decribe('Test for getTypes', () => {
    test('Test 2: get types for default data', () => {
        const register = new PhoneRegister(phones);
        expect(register.getTypes()).toEqual(['home', 'work', 'mobile'])
    })
})