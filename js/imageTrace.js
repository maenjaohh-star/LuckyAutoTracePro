import {log}
from "./logger.js";



export async function runImageTrace(item,profile){


log(
"Starting Illustrator Image Trace..."
);



const traceOptions = {


preset:
profile.name,


colorCount:
profile.colors,


pathFidelity:
profile.path,


cornerFidelity:
profile.corner,


noise:
profile.noise



};



/*

Illustrator 2026 Trace API

*/


item.tracing.tracingOptions =
traceOptions;



item.tracing.expand();



log(
"Trace completed"
);



return item;


}