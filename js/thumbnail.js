import {log}
from "./logger.js";


export function createThumbnail(preview){


log(
"Creating thumbnail..."
);



return {


name:
preview.name
+
"_thumb.png",


width:500,


height:500


};


}