export class JobQueue{


constructor(){

this.jobs=[];

}



add(job){

this.jobs.push(job);

}



getNext(){

return this.jobs.shift();

}



size(){

return this.jobs.length;

}



clear(){

this.jobs=[];

}


}