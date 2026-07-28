import {log}
from "./logger.js";


export async function exportPDF(document,path){


log(
"Exporting PDF..."
);



const options={


preset:"High Quality Print",


preserveEditability:true


};



document.exportFile(

path,

options

);



return {


format:"PDF",


path:path


};


}