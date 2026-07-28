export function calculateComplexity(image){


let score=0;


// ukuran gambar

let area=image.width*image.height;


if(area>10000000){

score+=40;

}

else if(area>3000000){

score+=20;

}

else{

score+=10;

}



// tipe gambar

if(image.type=="JPG"){

score+=40;

}

else{

score+=20;

}



return score;

}