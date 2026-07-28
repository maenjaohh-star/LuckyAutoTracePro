export function detectCategory(type){


const categories={


logo:
"Business",


icon:
"Objects",


flat:
"Illustrations",


lineart:
"Graphic Resources",


photo:
"Backgrounds"


};



return categories[type] ||

"Other";


}