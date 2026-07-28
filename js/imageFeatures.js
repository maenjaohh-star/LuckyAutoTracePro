export function extractFeatures(image){


return {


name:image.name,


width:image.width,


height:image.height,


area:
image.width * image.height,


format:image.type,


colors:
estimateColors(image),


hasTransparency:
image.type==="PNG",


complexity:
estimateComplexity(image)


};


}



function estimateColors(image){


if(image.type==="PNG"){

return 24;

}


if(image.type==="JPG"){

return 120;

}


return 64;


}



function estimateComplexity(image){


let score=0;


if(image.width*image.height > 5000000){

score+=40;

}
else{

score+=20;

}


if(image.type==="JPG"){

score+=40;

}
else{

score+=20;

}


return score;


}