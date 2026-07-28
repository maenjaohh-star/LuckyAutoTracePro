export class AssetDatabase{


constructor(){


this.assets=[];


}



add(asset){


this.assets.push(asset);


}



getAll(){


return this.assets;


}



count(){


return this.assets.length;


}


}