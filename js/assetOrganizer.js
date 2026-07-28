import {getCategoryFolder}
from "./categoryFolder.js";


import {smartRename}
from "./smartRename.js";


import {generateTags}
from "./tagManager.js";


import {detectDuplicate}
from "./duplicateDetector.js";


import {log}
from "./logger.js";



export function organizeAsset(asset,library){


log("");

log(
"ASSET ORGANIZER ENGINE"
);



const folder =

getCategoryFolder(

asset.type

);



const filename =

smartRename(

asset

);



const duplicate =

detectDuplicate(

asset,

library

);



const tags =

generateTags(

asset.type

);



const result={


folder,


filename,


duplicate,


tags


};



log(
"Folder : "
+
folder
);


log(
"Filename : "
+
filename
);


log(
"Duplicate : "
+
duplicate
);



return result;


}