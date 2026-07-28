export function generateCSV(items){


let csv =
"Filename,Title,Keywords,Category,Quality\n";



items.forEach(item=>{


csv +=

`${item.filename},${item.title},${item.keywords},${item.category},${item.quality}\n`;



});



return csv;


}