import {log}
from "./logger.js";


export function createContactSheet(items){


log("");

log(
"Creating contact sheet..."
);



return {


total:
items.length,


filename:
"contact_sheet.jpg"


};


}