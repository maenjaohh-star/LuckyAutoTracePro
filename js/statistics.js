export function calculateStatistics(assets){


let total =
assets.length;


let quality=0;



assets.forEach(item=>{


quality += item.quality || 0;


});



return {


totalAssets:total,


averageQuality:

total ?

Math.round(
quality/total
)

:0



};


}