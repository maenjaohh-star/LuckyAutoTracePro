import {TraceProfiles}
from "./profileDatabase.js";



export function selectProfile(features){



if(

features.hasOutline

&&

features.colorCount <= 3

){


return TraceProfiles.lineart;


}




if(

features.colorCount <= 8

&&

features.complexity < 40

){


return TraceProfiles.logo;


}




if(

features.isFlat

){


return TraceProfiles.flat;


}




if(

features.colorCount <= 10

){


return TraceProfiles.icon;


}




return TraceProfiles.photo;


}