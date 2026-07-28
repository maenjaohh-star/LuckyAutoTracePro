import {generateTitle}
from "./titleGenerator.js";


import {generateKeywords}
from "./keywordGenerator.js";


import {detectCategory}
from "./categoryDetector.js";


import {createAssetReport}
from "./assetReport.js";


import {log}
from "./logger.js";



export function generateMetadata(vector,quality){


log("");

log(
"METADATA ENGINE START"
);



const type =
vector.profile.name
.toLowerCase();



const title =
generateTitle(type);



const keywords =
generateKeywords(type);



const category =
detectCategory(type);



const report =

createAssetReport({

filename:
vector.name,


title:title,


keywords:keywords,


category:category,


quality:quality



});



log("");

log(
"TITLE : "
+
report.title
);


log(
"CATEGORY : "
+
report.category
);



log(
"KEYWORDS : "
+
report.keywords
);



return report;


}