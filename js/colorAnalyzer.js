export function analyzeColors(image){


/*

Nanti bagian ini membaca pixel image.

Untuk prototype:

*/

let colors=0;


if(image.type=="PNG"){

colors=24;

}


if(image.type=="JPG"){

colors=120;

}


return colors;

}