import {extractFeatures}
from "./imageFeatures.js";


import {classifyImage}
from "./classifier.js";


import {createConfidence}
from "./confidence.js";



export function smartAnalyze(image){


const features =
extractFeatures(image);



const classification =
classifyImage(features);



const confidence =
createConfidence(classification);



return {


features,


classification,


confidence


};


}