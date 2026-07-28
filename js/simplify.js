export async function simplifyVector(vector, amount){

return new Promise(resolve=>{


setTimeout(()=>{


vector.simplified=true;

vector.simplifyAmount=amount;


resolve(vector);


},500);


});


}