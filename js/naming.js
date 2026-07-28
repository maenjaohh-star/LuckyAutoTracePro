export function generateName(original){


let name = original
.replace(/\.[^/.]+$/, "");


let date =
new Date()
.toISOString()
.split("T")[0];


return (

name
+
"_vector_"
+
date

);


}