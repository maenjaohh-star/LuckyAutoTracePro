import {analyzeImage}
from "./analyzer.js";


import {startTrace}
from "./trace.js";


import {expandVector}
from "./expand.js";


import {optimizeVector}
from "./optimizer.js";


import {checkStockReady}
from "./stock.js";


export async function processImage(image){



const analysis =
analyzeImage(image);



const traced =
await startTrace(

image,

analysis

);



const expanded =
await expandVector(

traced

);



const optimized =
await optimizeVector(

expanded,

{

simplify:true,

cleanup:true,

smooth:true,

quality:95

}

);



const stock =
checkStockReady(

optimized

);



return {


file:image.name,


status:

stock.ready

?

"READY"

:

"FAILED"



};


}