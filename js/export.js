import {exportAll}
from "./exportManager.js";


export async function exportVector(

data,

options

){



const document =
app.activeDocument;



return await exportAll(

document,

{


ai:options.ai,


svg:options.svg,


eps:options.eps,


pdf:options.pdf,


aiPath:
"/READY_UPLOAD/VECTOR/artwork.ai",


svgPath:
"/READY_UPLOAD/VECTOR/artwork.svg",


epsPath:
"/READY_UPLOAD/VECTOR/artwork.eps",


pdfPath:
"/READY_UPLOAD/VECTOR/artwork.pdf"



}

);


}