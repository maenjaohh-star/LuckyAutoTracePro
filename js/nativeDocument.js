export function getRasterItems(){



const doc =

app.activeDocument;



let images=[];



for(
let i=0;
i<doc.placedItems.length;
i++
){



images.push(

doc.placedItems[i]

);


}



return images;


}