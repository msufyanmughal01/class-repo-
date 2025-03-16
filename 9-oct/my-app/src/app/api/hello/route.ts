import { NextRequest, NextResponse } from "next/server"

export function GET (){
    const a:number= 10*10
   return NextResponse.json({message: `hello from GET api ${a}`})
}
export async function POST (request:NextRequest){
    let  body = await request.json()
    if(body.age < 18){
        return NextResponse.json({message:"you'r under age"},{status:400})
    }
    const a:number= 10*1000
   return NextResponse.json({message: `hello from POST api ${a}`})
}
export function PATCH (){
    const a:number= 10*10
   return NextResponse.json({message: `hello from PATCH api ${a}`})
}
export function DELETE (){
    const a:number= 10*10
   return NextResponse.json({message: `hello from DELETE api ${a}`})
}