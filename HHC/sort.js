const didiDataSet = [{"ID":1,"FName":"Riley","Salary":234.50,"Position":"Manager","Age":35},{"ID":2,"Supervisor":1,"FName":"Miley","Salary":100.50,"Position":"Developer","Age":35},{"ID":3,"Supervisor":1,"FName":"Skylar","Salary":100.50,"Position":"Engineer","Age":35},{"ID":4,"Supervisor":1,"FName":"Katie","Salary":100.50,"Position":"Engineer","Age":35}];
 
const joanDataSet = [{"ID":1,"EmployeeName":"John","Age":12,"Salary":3000,"Position":"Analyst"},{"ID":2,"EmployeeName":"Doe","Supervisor":1,"Age":35,"Salary":2500,"Position":"Developer"},{"ID":3,"EmployeeName":"Mike","Supervisor":1,"Age":22,"Salary":3021,"Position":"HR"},{"ID":4,"EmployeeName":"Mary","Supervisor":3,"Age":12,"Salary":3000,"Position":"Dev1"},{"ID":5,"EmployeeName":"Anto","Supervisor":2,"Age":35,"Salary":2000,"Position":"Developer"},{"ID":6,"EmployeeName":"Julia","Supervisor":4,"Age":22,"Salary":3021,"Position":"Dev"},{"ID":7,"EmployeeName":"Mary","Supervisor":6,"Age":22,"Salary":4000,"Position":"Dev1"},{"ID":8,"EmployeeName":"Tess","Supervisor":7,"Age":50,"Salary":34000,"Position":"Developer"},{"ID":9,"EmployeeName":"Essy","Supervisor":1,"Age":23,"Salary":5021,"Position":"Dev"},{"ID":10,"EmployeeName":"Mary","Supervisor":3,"Age":12,"Salary":3000,"Position":"Dev1"},{"ID":11,"EmployeeName":"Anto","Supervisor":2,"Age":35,"Salary":2000,"Position":"Developer"},{"ID":12,"EmployeeName":"Sue","Supervisor":1,"Age":22,"Salary":3021,"Position":"Dev"}];





let sortedArray = sort(joanDataSet);
 
function findIndex(salary){
    let index;
    let lessValues;
 
    if(! (sortedArray.find( x => x.Salary === salary))){
    lessValues = sortedArray.filter( x => x.Salary < salary);
 
    if(lessValues.length > 0){
        lessValues.sort((a,b)  => a - b);
        index = sortedArray.indexOf((lessValues[lessValues.length - 1])) + 1;
        return index;
    }
    else{
        index = 0;
        return index;
    }
    }
    else {
        index = sortedArray.findIndex( x => x.Salary === salary);
        return index;
    }
 
}