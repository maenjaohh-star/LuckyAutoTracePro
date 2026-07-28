export class ProductionQueue{


constructor(){

this.queue=[];

}



add(item){

this.queue.push(item);

}



next(){

return this.queue.shift();

}



length(){

return this.queue.length;

}


}