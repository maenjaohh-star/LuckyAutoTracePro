import {

getAssets,

searchAssets

}

from "../js/assetRepository.js";



function render(items){



const gallery =
document.getElementById(
"gallery"
);



gallery.innerHTML="";



items.forEach(asset=>{


gallery.innerHTML += `


<div>


<h3>
${asset.filename}
</h3>


<p>
Quality:
${asset.quality}
</p>


<p>
${asset.category}
</p>


</div>


`;



});


}



document
.getElementById(
"btnSearch"
)
.onclick=()=>{


const value =

document
.getElementById(
"search"
)
.value;



const result =

searchAssets(value);



render(result);



};



render(
getAssets()
);