export function mapProfile(type){


switch(type){


case "logo":

return {

name:"Logo",

colors:8,

path:98,

corner:95,

noise:1

};



case "icon":

return {

name:"Icon",

colors:16,

path:97,

corner:90,

noise:1

};



case "flat":

return {

name:"Flat Illustration",

colors:32,

path:95,

corner:85,

noise:2

};



case "lineart":

return {

name:"Line Art",

colors:2,

path:98,

corner:95,

noise:1

};



case "photo":

return {

name:"High Fidelity Photo",

colors:64,

path:90,

corner:70,

noise:5

};



default:

return {

name:"Auto",

colors:24,

path:95,

corner:85,

noise:2

};


}


}