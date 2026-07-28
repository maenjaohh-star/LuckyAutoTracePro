export function getCategoryFolder(type){


const folders={


logo:
"LOGOS",


icon:
"ICONS",


flat:
"ILLUSTRATIONS",


lineart:
"LINE_ART",


photo:
"GRAPHIC"



};


return folders[type] || "OTHER";


}