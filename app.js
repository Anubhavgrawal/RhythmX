// let arr=[1,2,3];

// let sum = arr.reduce((sum,el) => {
//     return sum+(el*el);
// });



// let newArr=arr.map((el) => (el+5));
// console.log( newArr);

//Q3
// let arr=['a','b','c','d'];

// let newarr=arr.map((el) => (el.toUpperCase()));
// console.log(newarr);

//Q4
let arr=[1,2,3];
const doubleAndReturnArgs=(arr,...args) => [
    ...arr,
    ...args.map((v) => v*2),
];