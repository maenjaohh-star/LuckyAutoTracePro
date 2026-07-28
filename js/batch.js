import {JobQueue}
from "./queue.js";


import {processImage}
from "./processor.js";


import {updateProgress}
from "./progress.js";


import {BatchReport}
from "./report.js";


import {log}
from "./logger.js";



export async function startBatch(images){



log("");

log(
"BATCH ENGINE START"
);



const queue =
new JobQueue();



const report =
new BatchReport();



images.forEach(img=>{

queue.add(img);

});



const total =
queue.size();



let current=0;



while(queue.size()>0){



const image =
queue.getNext();



try{


log("");

log(
"Processing : "
+
image.name
);



const result =
await processImage(image);



if(result.status==="READY"){


report.addSuccess(

image.name

);


}

else{


report.addFailed(

image.name,

"Stock validation failed"

);


}



}

catch(error){


report.addFailed(

image.name,

error.message

);


}



current++;


updateProgress(

current,

total

);


}



log("");

log(
"BATCH COMPLETE"
);



log(
"Success : "
+
report.success.length
);



log(
"Failed : "
+
report.failed.length
);



return report;


}