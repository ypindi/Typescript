"use strict";
// console.log("Hello World");
// let a:number = 25;
// if(a<50){
//     a+=10;
// }
// console.log(a);
let sales = 123456789;
// don't need to declare as number though. It knows from initialization.
let course = 'Typescript';
let is_published = true;
///////////////////////////////////////
// Any Type:
let x;
x = 1;
x = 'a';
// function render(document){
//     console.log(document);
// };
// Parameter 'document' implicitly has an 'any' type.
// We get this error. Can turn it off in tsconfig.json using:
// // "noImplicitAny": true, - change to false.
// .but if we do this, we are losing the point of TS.
//////////////////////////////////////////////////////////
// Arrays:
// in JS:
// let a = [1,true, 'HE'];
// in TS:
// let a:number[] = [1,true]
// gives error.
let a = [];
// any type.
let b = [];
// if you want an empty number array.
// b.forEach(n => n.)
// has many methods of number objects which are not available in JS.
///////////////////////////////////////////////
// Tuples:
let c = [1, 'Yash'];
// c[0].toPrecision
// c[1].concat
// Use of Typescript - has methods specific to each type in the tuple.
// Tuples are just arrays in JS. let c = [1, 'Yash'];
// Tuples can have more than 2 elements too.
//////////////////////////////////////////
// Enums:
var Sizes;
(function (Sizes) {
    Sizes[Sizes["Small"] = 1] = "Small";
    Sizes[Sizes["Medium"] = 2] = "Medium";
    Sizes[Sizes["Large"] = 3] = "Large";
})(Sizes || (Sizes = {}));
;
// default starts with 0
// here, starts with 1, med = 2, large = 3
// const enum Sizes{Small=1, Medium, Large};
// to make JS generated code smaller.
let mySize = Sizes.Medium;
/////////////////////////////////////////////////////////
// Functions: JS be default returns undefined from a function.
function calculateTax(income, taxYear) {
    let factor = 1.2;
    if (income < 50000) {
        return income * factor + taxYear;
    }
    return income * 1.3;
}
calculateTax(20000, 2024);
// can give only 2 arguments - but JS takes how many ever - doesn't care.
// we should use all variables and arguments or we get error:
// PS D:\Yashwanth\HTW_Berlin\Self_Learnings\Typescript> tsc
// src/1_index.ts:93:39 - error TS6133: 'taxYear' is declared but its value is never read.
// 93 function calculateTax(income: number, taxYear:number):number{
//                                          ~~~~~~~
// src/1_index.ts:94:9 - error TS6133: 'factor' is declared but its value is never read.
// 94     let factor = 1.2;
//            ~~~~~~
// Found 2 errors in the same file, starting at: src/1_index.ts:93
// PS D:\Yashwanth\HTW_Berlin\Self_Learnings\Typescript> 
// make taxYear optional but everywhere its used should give an alternate number.
// Otherwise TS will take it as undefined.
function calculateTax2(income, taxYear) {
    let factor = 1.2;
    if (income < 50000) {
        return income * factor + (taxYear || 2022);
    }
    return income * 1.3;
}
calculateTax2(50000);
// or give a default value
function calculateTax3(income, taxYear = 2022) {
    let factor = 1.2;
    if (income < 50000) {
        return income * factor + taxYear;
    }
    return income * 1.3;
}
calculateTax3(100000);
//# sourceMappingURL=1_index.js.map