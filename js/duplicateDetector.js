export function detectDuplicate(asset,library){


let duplicate=false;



library.forEach(item=>{


if(
item.hash === asset.hash
){

duplicate=true;

}


});



return duplicate;


}