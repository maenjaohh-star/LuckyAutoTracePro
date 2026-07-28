import {log}
from "./logger.js";


export async function exportEPS(document,path){


log(
"Exporting EPS..."
);



const options={


preview:"TIFF",

encoding:"BINARY",

compatible:true


};



document.exportFile(

path,

options

);



return {


format:"EPS",


path:path


};


}