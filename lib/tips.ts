
import { db } from "./db";

export async function getAllTips({category, search, sort}: {
    category?: string 
    search?: string
    sort?: string
}){
    
    
   
    let query = `
    SELECT 
    t.id,
    t.title,
    t.advice,
    categories.name
     FROM tips t
     INNER JOIN 
     categories ON categories.id = t.category_id 
     WHERE t.is_approved = TRUE
     `;

    const params: string[] = []

    if(search){
        if(query.includes('WHERE')){
            query += ` AND title 
            ILIKE $${params.length + 1} OR 
            advice ILIKE $${params.length + 2}
            `
        }else{

            query += ` WHERE title 
            ILIKE $${params.length + 1} OR 
            advice ILIKE $${params.length + 2}
            `
            
        }

        params.push(`%${search}%`, `%${search}%`)
    }

    const sortOpt = {
        alpha: `t.title`,
        release: `t.created_at DESC`
    }
    


    if(category){

        if(query.includes('WHERE')){
            query += ` AND categories.name = $${params.length + 1}`
        }else{
            query += ` WHERE categories.name = $${params.length + 1}`
        }
      
       params.push(category)
    }

    if(sort){
        const sorting = sortOpt[sort as keyof typeof sortOpt]
        query += ` ORDER BY ${sorting}`
    }
   
    const tips = await db.query(query, params)
   
    return tips.rows
}


export async function getTipById(id: number){
   
    
    const tip = await db.query(`
          SELECT 
            t.id,
            t.title,
            t.advice,
            categories.name
            FROM tips t
            INNER JOIN 
            categories ON categories.id = t.category_id 
                WHERE t.id = $1
        `, [id])

     const steps = await db.query(`
        SELECT * FROM steps  
        WHERE tip_id = $1
        `, [id])


        return {
            tip: tip.rows[0],
            steps: steps.rows
        }

}

export async function submitTip({title, sender, advice, category, steps}: {
    title: string | undefined
    sender?: string | undefined
    advice: string | undefined
    category: string | undefined
    steps: string[] | undefined
}){
    
   
     if(!title || !advice ||! category || !steps){
        throw new Error(`All fields are required`)
     }

    console.log("steps:", steps)

    try{

      const results =  await db.query(`INSERT INTO tips
             (title, sender, advice, category_id) 
             VALUES($1, $2, $3, $4)  
             RETURNING id
             `, [title, sender, advice, category])

           for(const step of steps){
            
              await db.query(`
                INSERT INTO steps (tip_id, step) 
                VALUES ($1, $2)  
                `, [results.rows[0].id, step])

           }



    }catch(error){
        console.log(error)
        throw new Error(`Failed to submit: ${error}`)
    }

}