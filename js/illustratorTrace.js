import {TraceSettings}
from "./traceSettings.js";



export async function illustratorTrace(

item,

profile="logo"

){



const settings =

TraceSettings[profile];




if(!item){


throw new Error(
"No raster item found"
);


}





// CREATE TRACE


const traceObject =

await item.trace();





if(!traceObject){


throw new Error(
"Trace failed"
);


}





// APPLY SETTINGS


traceObject.tracingOptions.tracingMode =

settings.mode;



if(settings.colors){


traceObject.tracingOptions.maxColors =

settings.colors;


}



if(settings.threshold){


traceObject.tracingOptions.threshold =

settings.threshold;


}



if(settings.paths){


traceObject.tracingOptions.pathFitting =

settings.paths;


}



if(settings.corners){


traceObject.tracingOptions.cornerAngle =

settings.corners;


}



if(settings.noise){


traceObject.tracingOptions.noiseFidelity =

settings.noise;


}





// UPDATE


await traceObject.update();





return traceObject;


}