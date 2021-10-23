function recurse(array, mainArray) {
    let supervisedEmployees = [];
    for(let supervisor of array){
    supervisedEmployees = mainArray.filter( x => x.Supervisor === supervisor);
    console.log(supervisedEmployees)
     }
    if(supervisedEmployees.length > 0){
    recurse(supervisedEmployees, mainArray);
     }
    }