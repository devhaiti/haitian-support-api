import { micron } from "@yotie/micron";
import csv from 'csvtojson';



export default micron(async ({ ok }) => {
    // const file = await fs.readFile('./data.csv')
    const data = await  csv().fromFile('./data.csv')

    return ok(data);
})