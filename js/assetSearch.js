export function searchAsset(database,keyword){


return database.filter(asset=>{


return (

asset.name
.toLowerCase()
.includes(
keyword.toLowerCase()
)

);


});


}