"use strict";
// type Customer = {
//     birthday: Date,
// };
// function getCustomer(id: number): Customer | null | undefined{
//     return id===0 ? null : {birthday: new Date() };
// }
// let customer = getCustomer(1);
// if (customer !== null && customer !== undefined)
//     console.log(customer.birthday);
// // or
// console.log(customer?.birthday);
// This is called Optional access operator / chaining or dot operator.
// only runs when customer is not null or not undefined.
// if we make birthday optional from the 
// type Customer = {
//     birthday?: Date,
// };
// then should access like this:
// console.log(customer?.birthday?.getFullYear());
// optional element access operator
// array?.[0]
// means if array has an element (not a null or undefined array),
// then it will access the array[0]
// Optional call access operator.
let loggo = (message) => console.log(message);
loggo === null || loggo === void 0 ? void 0 : loggo('Hello');
loggo === null || loggo === void 0 ? void 0 : loggo(25);
//# sourceMappingURL=4_optionalChaining.js.map