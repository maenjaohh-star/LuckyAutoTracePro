import {analyzeFeatures}
from "./imageFeatureAnalyzer.js";


import {selectProfile}
from "./profileSelector.js";



export function autoTraceProfile(image){



const features =

analyzeFeatures(image);




const profile =

selectProfile(features);




return {


features,


profile



};


}