import chalk from "chalk"
// // oob object oriented programing 
// class house {
//     adress :string ="rs";
//     owner :string ="sufyan";
//     rooom :number =7
// }
// let house1 = new house ()
// let house2 = new house ()
// //proto types 
// // console.log (house1)
// class house {
//     readonly adress :string
//     owner :string ="sufyan"
//     rooom :number =7
//     constructor(ad:string){
//         this.adress= ad
//     }
//      bell(){

// //     }
// // } 
// let house1 = new house ("rs" )
// console.log (chalk.blueBright(house1.owner))

 class person {
    protected name :string ;
    age :number ;
    constructor(name :string ,age :number, ){
    this.name = name 
    this.age = age 
 }
}

 class teacher extends person{
    
    name :string 
    age :number 
    private salary :number =33333
    constructor (name :string ,age :number,salary :number){
        super(name,age )
        this.name = name
        this.age = age
        this.salary=salary    
    }
    introduction (){
        console.log (`my name is ${this.name} my age is ${this.age}`)
    }
    salary1(salary:number){
        if (salary=this.salary){
            console.log ("correct salary")
        }
        else {
            console.log ("incorret salary ")
        }

    }
 }

 let t = new teacher("sufyan muughal",32,6000)
 t.introduction(),t.salary1
//  university manage ment systum 
// learn static member
// abstract class 
