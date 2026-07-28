import {DatabaseManager}
from "./databaseManager.js";


const db =
new DatabaseManager();



export function saveAsset(asset){


db.insert(asset);


return asset;


}



export function getAssets(){


return db.getAll();


}



export function searchAssets(keyword){


return db.find(keyword);


}