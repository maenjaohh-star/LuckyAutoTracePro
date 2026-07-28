export async function smoothVector(vector){


return new Promise(resolve=>{


setTimeout(()=>{


vector.smooth=true;


resolve(vector);


},500);



});


}