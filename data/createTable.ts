import { db } from "../lib/db";


async function createTable(){

    await db.query(`CREATE TABLE IF NOT EXISTS categories (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL
        )`)
    
    await db.query(`
        CREATE TABLE IF NOT EXISTS tips (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL ,
        category_id INTEGER REFERENCES categories(id),
        advice TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
        )`)

    await db.query(`
        CREATE TABLE IF NOT EXISTS steps (
        id SERIAL PRIMARY KEY,
        tip_id INTEGER REFERENCES tips(id),
        step TEXT NOT NULL ,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP 
        )
        `)

    await db.query(`CREATE TABLE IF NOT EXISTS materials (
        id SERIAL PRIMARY KEY,
        material TEXT NOT NULL,
        tip_id INTEGER REFERENCES tips(id)
        )`)

    

    

    console.log("tables created")
}

createTable()