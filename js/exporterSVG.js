import {log}
from "./logger.js";


export async function exportSVG(document,path){


log(
"Exporting SVG..."
);



const options={


responsive:false,


embedImages:true,


decimalPlaces:3


};



document.exportFile(

path,

options

);



return {

format:"SVG",

path:path

};


}