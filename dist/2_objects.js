"use strict";
// in JS, Objects are dynamic and their shape can change anytime.
let d = { id: 1 };
console.log(d);
// d.s = false;
// notallowed in TS.
let employee = {
    id: 1,
    name: "Yashwanth",
    retire: (date) => {
        console.log(date);
    },
};
console.log(employee);
employee.name = 'Yash';
console.log(employee);
//# sourceMappingURL=2_objects.js.map