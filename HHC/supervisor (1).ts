let joanDataSet = [{"ID":1,"EmployeeName":"John","Age":12,"Salary":3000,"Position":"Analyst"},{"ID":2,"EmployeeName":"Doe","Supervisor":1,"Age":35,"Salary":2500,"Position":"Developer"},{"ID":3,"EmployeeName":"Mike","Supervisor":1,"Age":22,"Salary":3021,"Position":"HR"},{"ID":4,"EmployeeName":"Mary","Supervisor":3,"Age":12,"Salary":3000,"Position":"Dev1"},{"ID":5,"EmployeeName":"Anto","Supervisor":2,"Age":35,"Salary":2000,"Position":"Developer"},{"ID":6,"EmployeeName":"Julia","Supervisor":4,"Age":22,"Salary":3021,"Position":"Dev"},{"ID":7,"EmployeeName":"Mary","Supervisor":6,"Age":22,"Salary":4000,"Position":"Dev1"},{"ID":8,"EmployeeName":"Tess","Supervisor":7,"Age":50,"Salary":34000,"Position":"Developer"},{"ID":9,"EmployeeName":"Essy","Supervisor":1,"Age":23,"Salary":5021,"Position":"Dev"},{"ID":10,"EmployeeName":"Mary","Supervisor":3,"Age":12,"Salary":3000,"Position":"Dev1"},{"ID":11,"EmployeeName":"Anto","Supervisor":2,"Age":35,"Salary":2000,"Position":"Developer"},{"ID":12,"EmployeeName":"Sue","Supervisor":1,"Age":22,"Salary":3021,"Position":"Dev"}];

function getData(array){
    let supervisors = [];
    let result = [];
    
    supervisors = array.filter( x => x.Supervisor);
    supervisors = [... new Set(supervisors.map( x => x.Supervisor))];

    for(let supervisor of supervisors){
        let employeeNames = [];
        let totalSalaries = 0;
        let totalEmployees = 0;
        let averageSalary = 0;
        let supervisorName = array.find( x => x.ID === supervisor).EmployeeName;

        array.forEach( x => {
            if(x.Supervisor === supervisor){
                employeeNames.push(x.EmployeeName);
                totalSalaries += x.Salary;
                totalEmployees = employeeNames.length;
                averageSalary = totalSalaries/totalEmployees
            }
        })
        result.push({
            supervisorName,
            supervisorId: supervisor,
            employeeNames,
            totalSalaries,
            totalEmployees,
            averageSalary
        })
    }
    return result;
}

console.log(getData(joanDataSet));