import {log} from "./logger.js";

import {getTraceSettings}
from "./traceProfile.js";


export async function startTrace(image,analysis){


log("--------------------------------");

log(
"Tracing : "
+image.name
);


const settings =
getTraceSettings(analysis.profile);



log(
"Mode : "
+settings.mode
);


log(
"Colors : "
+settings.colors
);


log(
"Path : "
+settings.paths+"%"
);


log(
"Corner : "
+settings.corners+"%"
);


log(
"Noise : "
+settings.noise
);



/*

Nanti bagian ini dihubungkan
ke Illustrator Image Trace API

*/


await simulateTrace();



return {


name:image.name,

status:"TRACED",

settings:settings


};


}



function simulateTrace(){


return new Promise(resolve=>{


setTimeout(()=>{


log("Vector generated.");


resolve();


},1000);


});


}