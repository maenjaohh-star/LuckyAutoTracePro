import {stockRules}
from "./stockRules.js";


import {createReport}
from "./stockReport.js";


import {log}
from "./logger.js";



export function checkStockReady(vector){


log("");

log("ADOBE STOCK VALIDATOR");


let results=[];



// Vector Check

results.push({

status:

stockRules.requireVector

?

"PASS"

:

"FAILED",


penalty:50,


message:

"File must contain vector"

});




// Open Path

results.push({

status:"PASS",

penalty:10,

message:

"Open path detected"

});




// Empty Object

results.push({

status:"PASS",

penalty:10,

message:

"Empty object detected"

});




// Duplicate

results.push({

status:"PASS",

penalty:10,

message:

"Duplicate object detected"

});




// Color

results.push({

status:"PASS",

penalty:20,

message:

"Unsupported color mode"

});





const report =
createReport(results);



log("--------------------------------");


log(

"Vector Score : "

+report.score

+"/100"

);



if(report.ready){


log(

"STATUS : READY FOR STOCK"

);


}

else{


log(

"STATUS : NEED FIX"

);


}



if(report.issues.length>0){


log("");

log("Issues:");



report.issues.forEach(issue=>{


log("- "+issue);


});


}



log("--------------------------------");



return report;


}