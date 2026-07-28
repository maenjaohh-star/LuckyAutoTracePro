import {log}
from "./logger.js";


export function updateProgress(current,total){


let percent =
Math.round(
(current / total) * 100
);



const bar =
document.getElementById("progress");


if(bar){

bar.value=percent;

}



log(
"Progress : "
+
percent
+
"%"

);


}