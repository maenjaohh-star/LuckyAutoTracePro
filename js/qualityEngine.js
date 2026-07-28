import {calculateAnchorScore}
from "./anchorScore.js";


import {calculateColorScore}
from "./colorScore.js";


import {calculateEditScore}
from "./editScore.js";


import {calculateComplexityScore}
from "./complexityScore.js";


import {createQualityReport}
from "./qualityReport.js";


import {log}
from "./logger.js";



export function analyzeVectorQuality(vector){


log("");

log(
"AI VECTOR QUALITY ENGINE"
);



const results=[


calculateAnchorScore(vector),


calculateColorScore(vector),


calculateEditScore(vector),


calculateComplexityScore(vector)


];



const report =
createQualityReport(results);



log("");

log(
"QUALITY SCORE : "
+
report.score
+
"/100"
);



results.forEach(item=>{


log(

item.name
+
" : "
+
item.score
+
"%"

);


});



if(report.ready){


log(
"STATUS : MARKET READY"
);


}

else{


log(
"STATUS : NEED OPTIMIZATION"
);


}



return report;


}