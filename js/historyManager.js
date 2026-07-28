export class HistoryManager{


constructor(){

this.history=[];

}



add(action){


this.history.push({

action,


time:
new Date()

});


}



get(){


return this.history;


}


}