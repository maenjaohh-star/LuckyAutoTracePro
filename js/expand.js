import {log}
from "./logger.js";


export async function expandVector(result){


log(
"Expanding vector..."
);



return new Promise(resolve=>{


setTimeout(()=>{


log(
"Expand complete."
);



resolve({

...result,

expanded:true


});


},700);



});


}