export class DatabaseManager{


constructor(){

this.assets=[];

}



insert(asset){


this.assets.push(asset);


}



getAll(){


return this.assets;


}



find(keyword){


return this.assets.filter(asset=>


asset.filename
.toLowerCase()
.includes(
keyword.toLowerCase()
)


);


}



delete(id){


this.assets =
this.assets.filter(
asset=>asset.id!==id
);


}



}