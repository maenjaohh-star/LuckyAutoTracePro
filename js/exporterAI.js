import {log}
from "./logger.js";


export async function exportAI(document,path){


log(
"Exporting AI file..."
);



const options={

compatibility:"ILLUSTRATOR2026",

embedICCProfile:true,

compressed:true

};



document.saveAs(

path,

options

);



return {

format:"AI",

path:path

};


}