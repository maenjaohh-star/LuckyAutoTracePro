export function classifyImage(features){


let type="flat";

let confidence=70;



// Logo

if(
features.colors <= 10 &&
features.complexity < 50
){

type="logo";

confidence=95;


}



// Icon

else if(
features.colors <= 30 &&
features.complexity < 70
){

type="icon";

confidence=90;


}



// Photo

else if(
features.format==="JPG" &&
features.colors > 80
){

type="photo";

confidence=96;


}



// Line Art

else if(
features.colors <= 5
){

type="lineart";

confidence=88;


}



return {


type:type,


confidence:confidence



};


}