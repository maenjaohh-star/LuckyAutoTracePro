export function createAssetReport(data){


return {


filename:data.filename,


title:data.title,


keywords:data.keywords.join(","),


category:data.category,


quality:data.quality.score



};


}