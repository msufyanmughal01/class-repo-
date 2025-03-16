// explicit type casting 
export let num1;
num1 = 18;
console.log(num1.toFixed(2));
let num2;
// (num2 as unknown as string)
// num2 = "d"
// console.log (typeof num2 )
function greet(...frnds) {
    console.log(frnds);
}
greet("ali", "arham ", "hi");
function add(a, b) {
    return a + b;
}
console.log(add);
function login(email, password) {
    if (!password) {
        console.log("your are login with google");
    }
    else
        console.log("login with password");
}
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 1] = "blue";
    color[color["yellow"] = 2] = "yellow";
})(color || (color = {}));
console.log(color[0]);
