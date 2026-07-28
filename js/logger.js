export function log(text){

const area=document.getElementById("log");

area.value+=text+"\n";

area.scrollTop=area.scrollHeight;

}