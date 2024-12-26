"use strict";
// // Use Type Aliases instead of the employee object that we did in 2_objects.ts file.
// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void,
// }
// let employee2: Employee = {
//     id: 1, 
//     name: "Yashwanth",
//     retire: (date: Date) => {
//         console.log(date);
//     },
// };
// ////////////////////////////////////////
// // Unions
// // Can give types more than 1 type
// // Using the | vertical bar, we created a union type.
// function kgToLbs(weight: number | string):number {
//     // weight.
//     // if we do weight. we only see methods common to both numbers and strings.
//     // narrowing
//     if(typeof weight === 'number')
//         // weight. will show all methods of numbers.
//         return weight*2.2;
//     else
//         // weight . will show string methods.
//         return parseInt(weight)*2.2;
// }
// console.log(kgToLbs(10));
// console.log(kgToLbs('10'));
// /////////////////////////////////////////////////////////
// // Intersection Types
// type Draggable = {
//     drag: () => void,
// };
// type Resizable = {
//     resize: () => void,
// };
// type UIWidget = Draggable & Resizable;
// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {},
// };
///////////////////////////////////////////////////////////
// Sometimes we want to limit the values that can be assigned
// to variables.
let quantity;
// can take any number.
let quantity2 = 50;
// let quantity3: 50 = 51; - compilation error
let quantity4 = 100;
// These are called Literal Types. Can be strings too.
let quantity5 = 50;
let metric1 = 'cm';
///////////////////////////////////////////////////////
// Nullable Types
// null and undefined types are the most common source of problems.
// function greet(name: string){
//     console.log(name.toUpperCase());
// }
// greet(null);
// This is valid in JS - but will create a runtime error
// since the toUpperCase() method can't be called on null types.
// So can do this instead.
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola');
}
greet(null);
//# sourceMappingURL=3_Chapter3%20png.js.map