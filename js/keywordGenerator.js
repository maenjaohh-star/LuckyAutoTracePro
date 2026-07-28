export function generateKeywords(type){


const database={


logo:[

"logo",
"branding",
"symbol",
"identity",
"modern",
"business",
"vector"

],


icon:[

"icon",
"interface",
"ui",
"symbol",
"graphic",
"vector"

],


flat:[

"flat",
"illustration",
"colorful",
"design",
"character",
"vector"

],


lineart:[

"line",
"outline",
"minimal",
"stroke",
"art",
"vector"

],


photo:[

"background",
"graphic",
"digital",
"art",
"design"

]


};



return database[type] || [];


}