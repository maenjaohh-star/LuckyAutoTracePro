import {exportAI}
from "./exportAI.js";


import {exportSVG}
from "./exportSVG.js";


import {exportEPS}
from "./exportEPS.js";


import {exportPDF}
from "./exportPDF.js";


import {log}
from "./logger.js";



export async function exportAll(

document,

config

){


log("");

log(
"EXPORT ENGINE START"
);



let result=[];



if(config.ai){


result.push(

await exportAI(

document,

config.aiPath

)

);


}



if(config.svg){


result.push(

await exportSVG(

document,

config.svgPath

)

);


}



if(config.eps){


result.push(

await exportEPS(

document,

config.epsPath

)

);


}



if(config.pdf){


result.push(

await exportPDF(

document,

config.pdfPath

)

);


}



log("");

log(
"EXPORT COMPLETE"
);



return result;


}