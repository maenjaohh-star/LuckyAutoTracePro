const {app} =
require("illustrator");



const analyze =
document.getElementById(
"analyze"
);



const trace =
document.getElementById(
"trace"
);



const batch =
document.getElementById(
"batch"
);



const exportBtn =
document.getElementById(
"export"
);





analyze.onclick=()=>{


updateStatus(
"Analyzing document..."
);



window.dispatchEvent(

new CustomEvent(

"ANALYZE"

)

);



};





trace.onclick=()=>{


updateStatus(

"Auto Trace Running..."

);



window.dispatchEvent(

new CustomEvent(

"TRACE"

)

);



};





batch.onclick=()=>{


updateStatus(

"Batch Production Running..."

);



window.dispatchEvent(

new CustomEvent(

"BATCH"

)

);



};





exportBtn.onclick=()=>{


updateStatus(

"Exporting..."

);



window.dispatchEvent(

new CustomEvent(

"EXPORT"

)

);



};





function updateStatus(text){


document
.getElementById(
"status"
)
.innerHTML=text;


}



export function updateQuality(value){


document
.getElementById(
"quality"
)
.innerHTML=

value
+
"%";


}