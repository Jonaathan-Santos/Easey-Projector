import axios from "axios";
import * as cheerio from 'cheerio';



const Api = axios.create({
  baseURL: ""
  
})






export async function  getLyric ( path: string, ){

  const response =  await Api.get(`${path}`)
  const result = await response.data


  const Vdon = cheerio.load(result)

  

 return Vdon('#lyrics').html()?.replaceAll('<br><br>', "##").split("##") as string[]

}





