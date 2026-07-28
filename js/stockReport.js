export function createReport(results){


let score=100;


let issues=[];



results.forEach(item=>{


if(item.status==="FAILED"){


score-=item.penalty;


issues.push(item.message);


}


});



return {


score:score,


issues:issues,


ready:score>=80


};


}