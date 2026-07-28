import {renderPreview}
from "./previewRenderer.js";


import {createThumbnail}
from "./thumbnail.js";


import {addWatermark}
from "./watermark.js";


import {createContactSheet}
from "./contactSheet.js";


import {log}
from "./logger.js";



export async function generatePreview(vector,options={}){


log("");

log(
"PREVIEW ENGINE START"
);



const preview =

await renderPreview(

vector,

{


format:"JPG",


width:2000,


height:2000,


background:"white"


}

);



const thumb =

createThumbnail(

preview

);



const finalPreview =

addWatermark(

preview,

options.watermark

);



log("");

log(
"Preview Complete"
);



return {


preview:finalPreview,


thumbnail:thumb



};


}



export function generateBatchPreview(items){


return createContactSheet(items);


}