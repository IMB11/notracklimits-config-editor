import { parse, stringify } from "@kilcekru/lua-table";
import { writeFileSync } from "fs";
 
const luaSrc = `{
    [PUT LUA TABLE HERE]
}`;

const jsObj = parse(luaSrc);

console.clear();
writeFileSync("./output.json", JSON.stringify(jsObj, null, 2));