import {log}
from "./logger.js";


import {simplifyVector}
from "./simplify.js";


import {cleanupVector}
from "./cleanup.js";


import {smoothVector}
from "./smooth.js";


import {validateVector}
from "./validator.js";



export async function optimizeVector(vector,settings){


log("");

log("VECTOR OPTIMIZER START");


if(settings.simplify){


log("Simplifying paths...");


vector =
await simplifyVector(

vector,

settings.quality

);


}



if(settings.cleanup){


log("Cleaning objects...");


vector =
await cleanupVector(vector);


}



if(settings.smooth){


log("Smoothing curves...");


vector =
await smoothVector(vector);


}



const report =
validateVector(vector);



log("");

log("Validation:");

log(
"Open Path : "
+report.openPath
);


log(
"Empty Object : "
+report.emptyObject
);


log(
"Duplicate : "
+report.duplicate
);



log("");

log("Optimization Complete");


return vector;


}