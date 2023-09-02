// import db from '../../utils/mysqldb'
import { NextResponse,NextRequest } from 'next/server'
import type { NextApiRequest, NextApiResponse } from 'next'

export async function POST(request:Request) {

  // db.connect()
  try{
    const {email,password} = await request.json();
    console.log(email);
    console.log(password);
    console.log("Should run");
    return NextResponse.json({message:'Okeee'})

  }catch(err){

    return NextResponse.json({error:'Error !!!!!!!!!'})
  }

  // db.release()
    
  return NextResponse.json({ message: 'Hello world' }, { status: 200 })
}


