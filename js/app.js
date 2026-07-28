import {inspectVector} from "./vectorInspector.js";
import {autoFixVector} from "./autoFixVector.js";

import {detectImages} from "./detector.js";
import {updateImageList} from "./imageList.js";
import {log} from "./logger.js";
import {getDocumentInfo} from "./document.js";

import {analyzeImage} from "./analyzer.js";

import {expandVector} from "./expand.js";
import {optimizeVector} from "./optimizer.js";
import {cleanupVector} from "./cleanupEngine.js";

import {generateMetadata} from "./metadataEngine.js";
import {generatePreview} from "./previewEngine.js";

import {organizeAsset} from "./assetOrganizer.js";

import {checkStockReady} from "./stock.js";

import {exportVector} from "./export.js";

import {startBatch} from "./batch.js";

import {smartAnalyze} from "./smartAnalyzer.js";

import {startMarketplaceBatch} from "./marketplaceBatch.js";

import {saveAsset} from "./assetRepository.js";
import {illustratorTrace} from "./illustratorTrace.js";


import {getRasterItems} from "./nativeDocument.js";




// QUALITY SLIDER

const quality =
document.getElementById("quality");


const qualityValue =
document.getElementById("qualityValue");



if(quality && qualityValue){

quality.oninput=()=>{

qualityValue.innerHTML =
quality.value;

};

}



// =========================
// ANALYZE BUTTON
// =========================


const analyzeButton =
document.getElementById("btnAnalyze");



if(analyzeButton){


analyzeButton.onclick=async()=>{


log("================================");

log("Lucky AutoTrace Pro Analyzer");


const info =
await getDocumentInfo();



log(
"Document : "
+
info.name
);


log(
"Artboards : "
+
info.artboards
);


log(
"Color Mode : "
+
info.colorMode
);



const images =
getRasterItems();



log(
images.length+
" image(s) detected."
);



updateImageList(images);



log("");

log("SMART AI CLASSIFICATION");



for(let i=0;i<images.length;i++){


const smartResult =
smartAnalyze(images[i]);



log("--------------------------------");


log(
"Image : "
+
images[i].name
);



log(
"Detected Type : "
+
(
smartResult?.classification?.type 
|| 
"unknown"
)
);



log(
"Confidence : "
+
(smartResult?.confidence?.score || 0)
+
"%"
);



}



log("--------------------------------");

log("Analyzer finished.");

log("================================");


};


}




// =========================
// AUTO TRACE BUTTON
// =========================



const traceButton =
document.getElementById("btnTrace");



if(traceButton){


traceButton.onclick=async()=>{


log("================================");

log("AUTO TRACE ENGINE START");



const images =
getRasterItems();




for(let i=0;i<images.length;i++){

try{



log("--------------------------------");


log(
"Processing : "
+
images[i].name
);




// SMART TRACE

const autoProfile =
autoTraceProfile(
images[i]
);

log(
"PROFILE : "
+
autoProfile.profile.name
);

const result =
await illustratorTrace(

images[i],

autoProfile.profile.type

);

continue;

}


// EXPAND

const expanded =
await expandVector(
result
);



// CLEANUP

const cleaned =
await cleanupVector(

expanded

);




// OPTIMIZER

const autoProfile =

autoTraceProfile(

images[i]

);



log(
"PROFILE : "
+
autoProfile.profile.name
);



const optimized =

await optimizeVector(

cleaned,

{

simplify:

autoProfile.profile.simplify,


cleanup:

autoProfile.profile.cleanup,


smooth:

autoProfile.profile.smooth,


quality:

autoProfile.profile.accuracy


}

);




// STOCK CHECK

checkStockReady(

optimized

);




// VECTOR AI INSPECTOR


const qualityReport =

inspectVector(

optimized

);



log("");

log(
"VECTOR QUALITY SCORE : "
+
qualityReport.score
);



if(
qualityReport.issues.length > 0
){


log(
"ISSUES FOUND:"
);



qualityReport.issues.forEach(

issue=>{


log(
"- "
+
issue
);


}

);



const fixedVector =

await autoFixVector(

optimized,

qualityReport

);



optimized =
fixedVector;


}



// METADATA

const metadata =

generateMetadata(

optimized,

qualityReport

);




// PREVIEW

const preview =

await generatePreview(

optimized,

{

watermark:null

}

);




// ORGANIZER

const organized =

organizeAsset(

{

name:
optimized.name,


type:
type:
autoProfile.profile.name

index:i,


hash:""

},

[]

);




// DATABASE SAVE

await saveAsset({

filename:
optimized.name || images[i].name,


type:
organized?.folder || "OTHER",


category:
organized?.folder || "OTHER",


keywords:
metadata.keywords || [],


quality:
qualityReport.score || 0,


preview:
preview.preview || preview.path || "",


vectorPath:
optimized.path || "",


createdAt:
new Date()


});



log("");

log(
"Asset Saved To Library"
);



log(
"Completed : "
+
images[i].name
);



}



log("");

log("ALL VECTOR COMPLETE");

log("================================");



};


}






// =========================
// BATCH BUTTON
// =========================


const batchButton =
document.getElementById("btnBatch");



if(batchButton){


batchButton.onclick=async()=>{


log("");

log("================================");

log("BATCH ENGINE START");



const images =
getRasterItems();



await startBatch(images);



log("================================");


};


}





// =========================
// MARKETPLACE FACTORY
// =========================



const productionButton =
document.getElementById("btnProduction");



if(productionButton){


productionButton.onclick=async()=>{


log("");

log(
"START MARKETPLACE FACTORY"
);



const images =
await detectImages();



await startMarketplaceBatch(

images

);



};


}





// =========================
// EXPORT BUTTON
// =========================



const exportButton =
document.getElementById("btnExport");



if(exportButton){


exportButton.onclick=async()=>{


log(
"Starting Export..."
);



await exportVector(

{

name:"Artwork"

},

{

ai:true,

svg:true,

eps:true,

pdf:true,


aiPath:
"READY_UPLOAD/VECTOR/artwork.ai",


svgPath:
"READY_UPLOAD/VECTOR/artwork.svg",


epsPath:
"READY_UPLOAD/VECTOR/artwork.eps",


pdfPath:
"READY_UPLOAD/VECTOR/artwork.pdf"


}

);


};


}


// =========================
// UXP PANEL EVENT BRIDGE
// =========================


window.addEventListener(

"TRACE",

()=>{


const button =
document.getElementById(
"btnTrace"
);


if(button){

button.click();

}


}

);





window.addEventListener(

"ANALYZE",

()=>{


const button =
document.getElementById(
"btnAnalyze"
);


if(button){

button.click();

}


}

);





window.addEventListener(

"BATCH",

()=>{


const button =
document.getElementById(
"btnProduction"
);


if(button){

button.click();

}


}

);



window.addEventListener(

"EXPORT",

()=>{


const button =
document.getElementById(
"btnExport"
);


if(button){

button.click();

}


}

);