import {log}
from "./logger.js";


export async function renderPreview(vector,options){


log("");

log(
"Rendering preview..."
);



const preview = {


name:
vector.name,


format:
options.format || "JPG",


width:
options.width || 2000,


height:
options.height || 2000,


background:
options.background || "white"



};



log(

"Preview size : "
+
preview.width
+
"x"
+
preview.height

);



return preview;


}