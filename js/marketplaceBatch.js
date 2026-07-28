import {ProductionQueue}
from "./productionQueue.js";


import {ProductionReport}
from "./productionReport.js";


import {createOutputStructure}
from "./outputManager.js";


import {smartTrace}
from "./traceBridge.js";


import {expandVector}
from "./expand.js";


import {cleanupVector}
from "./cleanupEngine.js";


import {optimizeVector}
from "./optimizer.js";


import {analyzeVectorQuality}
from "./qualityEngine.js";


import {generateMetadata}
from "./metadataEngine.js";


import {log}
from "./logger.js";



export async function startMarketplaceBatch(images){



log("");

log(
"MARKETPLACE PRODUCTION ENGINE"
);



const queue =
new ProductionQueue();


const report =
new ProductionReport();



const output =
createOutputStructure();



images.forEach(image=>{

queue.add(image);

});



while(queue.length()>0){



const image =
queue.next();



try{


log("");

log(
"PROCESSING : "
+
image.name
);



const traced =
await smartTrace(image);



const expanded =
await expandVector(

traced.trace

);



const cleaned =
await cleanupVector(

expanded

);



const optimized =
await optimizeVector(

cleaned,

{

simplify:true,

cleanup:true,

smooth:true,

quality:95

}

);



const quality =
analyzeVectorQuality(

optimized

);



const metadata =
generateMetadata(

optimized,

quality

);



report.success(

image.name

);



log(

"COMPLETED : "
+
image.name

);



}

catch(error){



report.error(

image.name,

error.message

);


}



}



log("");

log(
"PRODUCTION FINISHED"
);



log(
JSON.stringify(

report.get()

)

);



return {


output,

report


};


}