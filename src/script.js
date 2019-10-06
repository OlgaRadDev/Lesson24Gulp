const hello = (name) => {
    return `hello ${name}`;
};
console.log(hello('World'));

let f = () => 42;
console.log(f);

let g = (a, b) => {
    let m = Math.pow(2, parseInt(a));
    return b + m;
};
console.log(g(7,8));

