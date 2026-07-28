export function addWatermark(image,text){


return {


...image,


watermark:text || null


};


}