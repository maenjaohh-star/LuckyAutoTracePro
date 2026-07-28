import {state} from "./state.js";

export async function detectImages(){

state.images=[];

/*

Bagian ini nanti akan membaca document Illustrator.

Contoh:

const doc = app.activeDocument;

*/

const demo=[

{

name:"Logo01.png",

type:"PNG",

width:2000,

height:2000,

linked:true

},

{

name:"Flat02.jpg",

type:"JPG",

width:4000,

height:3000,

linked:false

}

];

state.images=demo;

return demo;

}