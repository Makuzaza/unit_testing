'use strict';

beforeAll(()=>{
    console.log('beforeAll', 'int before all tests'.toUpperCase())
})

afterAll(()=>{
    console.log('afterAll', 'do cleaning'.toUpperCase())
})

test('this is the first test', ()=>{
    console.log('test one')
    expect('1'+'2').toBe('12')
})

it('this is the second test', ()=>{
    console.log('test 2');
})

describe('This is the first group', ()=>{
    beforeEach(()=>{
        console.log('beforeEach in group A')
    })

    afterEach(()=>{
        console.log('afterEach in group A')
    })

    test('test 1 in A', ()=>{
        console.log('test 1 in group A')
    })

    test('test 2 in A', ()=>{
        console.log('test 2 in group A')
    })
});

describe('Group B', ()=>{
    describe('group B.A', ()=>{
        test('test 1 in B.A', ()=>{
            console.log('test 1 in group B.A');
            expect('1'+'2').toBe('12')
        })
    })
    describe('group B.B', ()=>{
        test('test 1 in B.B', ()=>{
            console.log('test 1 in group B.B');
            expect('1'+'2').toBe('12')
        })
    })
})