// console.log(Number.isInteger(5.5)); // false

const ubounds = [];
for(let i = 2; i <= 20; i++){
    ubounds.push(i);
}

console.log(ubounds); // [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 18, 19 ]

const temp = new Array(19).fill(2);
console.log(temp)

const mapped = temp.map(value=>value+5);
console.log(mapped); // [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, ... 7, 7 ]

const m2 = temp.map((value, ind) => [value + ind]);
console.log(m2); // [ [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ], [ 8 ], [ 9 ], [ 10 ], [ 11 ], [ 12 ], [ 13 ], [ 14 ], [ 15 ], [ 16 ], [ 17 ], [ 18 ], [ 19 ], [ 20 ] ]

const testValues = new Array(19).fill(2).map((value, ind) => [value + ind]);
console.log(testValues); // [ [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ], [ 8 ], [ 9 ], [ 10 ], [ 11 ], [ 12 ], [ 13 ], [ 14 ], [ 15 ], [ 16 ], [ 17 ], [ 18 ], [ 19 ], [ 20 ] ]

const D = [1, 2, 3, 4, 5];
const D2 = [
    [1, 2, 3],
    [4, 5, 6]
]

const D3 = [[
    [8, 7, 6],
    [1, 4, 5]
],
[
    [1, 2, 3],
    [4, 5, 6]
]]

console.log(D); // [ 1, 2, 3, 4, 5 ]
console.log(D2); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
console.log(D3); // [ [ [ 8, 7, 6 ], [ 1, 4, 5 ] ], [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] ]

for(let i = 0; i < D3.length; i++){
    console.log(D3); // [ [ [ 8, 7, 6 ], [ 1, 4, 5 ] ], [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] ]
    for(let j = 0; j < D3[i].length; j++){
        for(let k = 0; k < D3[i][j].length; k++){
            console.log(D3[i][j][k]); // 8 7 6 1 4 5 1 2 3 4 5 6
        }
        console.log(D[i]); // 1 2 3 4 5
    }
} // 8 7 6 1 4 5 1 2 3 4 5 6