import {log}
from "./logger.js";


export async function executeTrace(image,profile){


log("");

log(
"ILLUSTRATOR TRACE ENGINE"
);


log(
"Image : "
+image.name
);


log(
"Preset : "
+profile.name
);


log(
"Colors : "
+profile.colors
);


log(
"Path : "
+profile.path+"%"
);


log(
"Corner : "
+profile.corner+"%"
);


log(
"Noise : "
+profile.noise
);



/*

Nanti bagian ini akan
diganti dengan pemanggilan
Illustrator Action / UXP API

*/


import {runImageTrace}
from "./imageTrace.js";


import {expandTrace}
from "./expandAI.js";



export async function executeTrace(image,profile){



console.log(
"ILLUSTRATOR TRACE ENGINE"
);



const result =

await runImageTrace(

image,

profile

);



await expandTrace();



return {


name:image.name,


vector:true,


profile:profile,


object:result



};


}


}