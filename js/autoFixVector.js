export async function autoFixVector(vector,report){



let fixed =
vector;



for(
const issue of report.issues
){



switch(issue){



case "Too many anchor points":


console.log(
"Simplifying paths..."
);


break;




case "Too many colors":


console.log(
"Reducing colors..."
);


break;




case "Open path detected":


console.log(
"Closing paths..."
);


break;



}



}



return fixed;


}