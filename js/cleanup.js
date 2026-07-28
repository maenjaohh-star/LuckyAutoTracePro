export async function cleanupVector(vector){


return new Promise(resolve=>{


setTimeout(()=>{


vector.cleanup=true;


resolve(vector);


},500);



});


}