import {detectStrayPoints}
from "./strayDetector.js";


import {removeDuplicateObjects}
from "./duplicateCleaner.js";


import {mergeColors}
from "./colorMerger.js";


import {optimizeAnchors}
from "./anchorOptimizer.js";


import {cleanMasks}
from "./maskCleaner.js";


import {log}
from "./logger.js";



export async function cleanupVector(vector){



log("");

log(
"VECTOR CLEANUP ENGINE START"
);



const stray =
detectStrayPoints(vector);



const duplicate =
removeDuplicateObjects(vector);



const colors =
mergeColors(vector);



const anchors =
optimizeAnchors(

vector,

95

);



const masks =
cleanMasks(vector);



log("");

log(
"CLEANUP COMPLETE"
);



return {


vector,


cleanup:{


stray,


duplicate,


colors,


anchors,


masks


}


};



}