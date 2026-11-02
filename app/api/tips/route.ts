import { submitTip } from "@/lib/tips";


export async function POST(request: Request){

      const body = await request.json();

      const {title, sender, advice, category, steps} = body || {}

       if(!title || !advice || !category || !steps){
        throw new Error(`All fields are required`)
     }


      try{
        await submitTip({title, sender, advice, category, steps})

        return  Response.json({message: 'Tip received!'})

      }catch(error){
     console.log(error)
      return  Response.json({message: 'Failed to submit tip!'}, {status: 400})

      }
      

      throw new Error("Internal server Error 500")
  
}