export class BatchReport{


constructor(){

this.success=[];

this.failed=[];

}



addSuccess(file){

this.success.push(file);

}



addFailed(file,error){

this.failed.push({

file:file,

error:error

});

}



summary(){

return {


success:this.success.length,


failed:this.failed.length


};


}


}