import {QualityRules}
from "./qualityRules.js";



export function inspectVector(vector){



let report={


score:100,


issues:[],


details:{


anchors:0,


colors:0,


openPaths:0,


emptyObjects:0


}



};





// CHECK ANCHOR POINT


if(vector.points){


report.details.anchors =
vector.points.length;



if(
report.details.anchors >
QualityRules.maxAnchorPoints
){


report.score -=20;


report.issues.push(
"Too many anchor points"
);


}



}





// CHECK COLOR


if(vector.colors){


report.details.colors =
vector.colors.length;



if(
report.details.colors >
QualityRules.maxColors
){


report.score -=15;


report.issues.push(
"Too many colors"
);


}



}





// CHECK OPEN PATH


if(vector.openPaths){


report.details.openPaths =
vector.openPaths;



if(
vector.openPaths > 0
){


report.score -=25;


report.issues.push(
"Open path detected"
);


}


}





// SCORE LIMIT


if(report.score < 0){


report.score=0;


}




return report;


}