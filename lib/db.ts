import { Pool } from "pg";

const database_url = process.env.DATABASE_URL

if(!database_url){
    throw new Error(`DATABASE URL is not defined`)
}

export const db = new Pool({
    connectionString: process.env.DATABASE_URL
})