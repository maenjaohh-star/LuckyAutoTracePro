export function smartRename(asset){


const category =
asset.type.toUpperCase();



const date =
new Date()
.toISOString()
.split("T")[0];



return (

category

+

"_"

+

asset.index

+

"_"

+

date

);

}