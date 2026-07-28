export class ProductionReport{


constructor(){

this.completed=[];

this.failed=[];

}



success(file){

this.completed.push(file);

}



error(file,message){

this.failed.push({

file:file,

message:message

});

}



get(){

return {


completed:
this.completed.length,


failed:
this.failed.length


};


}


}