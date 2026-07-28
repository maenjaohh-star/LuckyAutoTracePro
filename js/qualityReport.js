export function createQualityReport(results){


let total=0;


results.forEach(item=>{


total += item.score;


});



let finalScore =
Math.round(

total / results.length

);



return {


score:finalScore,


details:results,


ready:

finalScore>=85


};


}