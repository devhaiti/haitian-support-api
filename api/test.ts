import { micron } from "@yotie/micron";
import axios from "axios";
import cheerio from 'cheerio'


export default micron(async ({ ok }) => {
    const { data: html } = await axios.get('https://ayiti.digital');

    const $ = cheerio.load(html);
    const data = $('#infotbhome tbody tr').map((i, el) => {
        const cells = $(el).find('td')
        const key = $(cells[0]).text().trim()
        const value = $(cells[1]).text().trim()
        return { [key]: value };
    }).get()
    .reduce((map, obj) => Object.assign({}, map, obj), {});
    
    return ok(data);
})