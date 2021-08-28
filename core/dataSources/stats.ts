import axios from "axios";
import cheerio from "cheerio";
import BaseDataSource from "./BaseDataSource";

export class StatsDataSource extends BaseDataSource {
  
  async  getDamageStats() {
    const { data: html } = await axios.get('https://ayiti.digital');
    const $ = cheerio.load(html);

    return  $('#infotbhome tbody tr').map((i, el) => {
        const cells = $(el).find('td')
        const key = $(cells[0]).text().trim()
        //TODO: unsafe conversion, wrap in tery catch and handle error
        const value = parseInt($(cells[1]).text().trim())
        return { [key]: value };
    }).get()
    .reduce((map, obj) => Object.assign({}, map, obj), {});
  }
}