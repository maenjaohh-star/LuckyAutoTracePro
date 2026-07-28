export function analyzeFeatures(image){


let feature={



colorCount:
image.colors || 0,



complexity:
image.complexity || 0,



hasOutline:
image.outline || false,



isFlat:
image.flat || false



};



return feature;


}