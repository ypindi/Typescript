// in JS, Objects are dynamic and their shape can change anytime.

let d = {id: 1};
console.log(d);
// d.s = false;
// notallowed in TS.

let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1, 
    name: "Yashwanth",
    retire: (date: Date) => {
        console.log(date);
    },
};

console.log(employee);
employee.name = 'Yash';
console.log(employee);
