import {analyzeColors}
from "./colorAnalyzer.js";


import {calculateComplexity}
from "./complexity.js";


import {profiles}
from "./profile.js";



export function analyzeImage(image){


let colors=
analyzeColors(image);



let complexity=
calculateComplexity(image);



let result={};



if(colors<=10 && complexity<40){

result.type="logo";

}


else if(colors<=30 && complexity<60){

result.type="flat";

}


else if(colors<=20){

result.type="icon";

}


else{

result.type="photo";

}



result.profile=
profiles[result.type];



return result;


}