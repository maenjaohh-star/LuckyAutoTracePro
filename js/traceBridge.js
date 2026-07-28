import {mapProfile}
from "./profileMapper.js";


import {executeTrace}
from "./illustratorBridge.js";


import {smartAnalyze}
from "./smartAnalyzer.js";



export async function smartTrace(image){



const analysis =
smartAnalyze(image);



const profile =
mapProfile(

analysis.classification.type

);



const result =
await executeTrace(

image,

profile

);



return {


analysis:analysis,

trace:result


};


}