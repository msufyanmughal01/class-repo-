// explicit type casting 
export let num1 :unknown 
num1 = 18
console.log((num1 as number).toFixed(2))
let num2:number
// (num2 as unknown as string)
// num2 = "d"
// console.log (typeof num2 )
function greet(...frnds:string[]){
    console.log (frnds)
}
greet ("ali", "arham ","hi")

function add(a:number,b:number):number;
function add(a:string ,b:string):string;
function add(a:boolean,b:boolean):boolean
function add(a:any,b:any):any{
    return a+b
}console.log (add)
function login(email:string):void 
function login(email:string):void;
function login (email:any,password?:any):void
{
    if (!password){
        console.log ("your are login with google")
    }else 
    console.log("login with password")
}
enum color {
    red=2,
    blue=1,
    yellow=3 
}
colo1r : color = color[2]
if 

