export function updateImageList(images){

let output="";

for(let i=0;i<images.length;i++){

const img=images[i];

output+=

(i+1)+". "+img.name+

" | "+img.type+

" | "+img.width+

"x"+img.height+

"\n";

}

document.getElementById("log").value=output;

}