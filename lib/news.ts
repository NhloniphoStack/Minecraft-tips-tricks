import { link } from "fs";
import { NextRequest } from "next/server"
import Parser from "rss-parser";
const RSS_URL = 'https://www.minecraft.net/en-us/feeds/community-content/rss';
import next from "next";
const parser = new Parser({
   customFields: {
      item: [["a10:link", "articleLink", {keepArray: false}]]
   }
})

export async function getAllNews(){

     
    try{
    
          const res = await fetch(RSS_URL, {
            next: {revalidate: 600}
          })
    
       if(!res.ok){
          throw new Error(`Failed to fetch News`)
       }
    
      const buffer = await res.arrayBuffer();
      const decoder = new TextDecoder("utf-16le")
      const xml = decoder.decode(buffer)
      const feed = await parser.parseString(xml)
    
       console.dir(feed.items[0], {depth: null})
    
       const news = feed.items.map(item => ({
          title: item.title,
          desciption: item.contentSnippet,
          link: item.articleLink?.$.href ?? null,
          publishedAt: item.pubDate,
          image: item.enclosure?.url ?? null
       }))
       
       return news
    
       }catch(error){
         
         throw new Error(`error: ${error}`)
       }
}