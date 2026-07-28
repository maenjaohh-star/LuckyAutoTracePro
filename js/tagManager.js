export function generateTags(type){


const tags={


logo:[

"branding",
"business",
"identity",
"symbol"

],


icon:[

"ui",
"interface",
"element",
"design"

],


flat:[

"illustration",
"color",
"modern",
"graphic"

],


lineart:[

"outline",
"minimal",
"stroke"

]


};



return tags[type] || [];


}