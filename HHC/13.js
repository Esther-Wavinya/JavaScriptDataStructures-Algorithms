const joanDataSet = [{"ID":1,"EmployeeName":"John","Age":12,"Salary":3000,"Position":"Analyst"},{"ID":2,"EmployeeName":"Doe","Supervisor":1,"Age":35,"Salary":2500,"Position":"Developer"},{"ID":3,"EmployeeName":"Mike","Supervisor":1,"Age":22,"Salary":3021,"Position":"HR"},{"ID":4,"EmployeeName":"Mary","Supervisor":3,"Age":12,"Salary":3000,"Position":"Dev1"},{"ID":5,"EmployeeName":"Anto","Supervisor":2,"Age":35,"Salary":2000,"Position":"Developer"},{"ID":6,"EmployeeName":"Julia","Supervisor":4,"Age":22,"Salary":3021,"Position":"Dev"},{"ID":7,"EmployeeName":"Mary","Supervisor":6,"Age":22,"Salary":4000,"Position":"Dev1"},{"ID":8,"EmployeeName":"Tess","Supervisor":7,"Age":50,"Salary":34000,"Position":"Developer"},{"ID":9,"EmployeeName":"Essy","Supervisor":1,"Age":23,"Salary":5021,"Position":"Dev"},{"ID":10,"EmployeeName":"Mary","Supervisor":3,"Age":12,"Salary":3000,"Position":"Dev1"},{"ID":11,"EmployeeName":"Anto","Supervisor":2,"Age":35,"Salary":2000,"Position":"Developer"},{"ID":12,"EmployeeName":"Sue","Supervisor":1,"Age":22,"Salary":3021,"Position":"Dev"}];


//filter data
//populate
//return the object

//filter by position
//find names for each position
//Count and map into array


var uniquePositions = [];
for (let index = 0; index < joanDataSet.length; index++) {
  const oneEmployee = joanDataSet[index];

  if (!uniquePositions.includes(oneEmployee.Position)) {
    uniquePositions.push(oneEmployee.Position)
      
    }
    
  }
console.log(uniquePositions);

let result = [];
for (let index = 0; index < uniquePositions.length; index++) {
  const oneUniquePosition = uniquePositions[index];

  let employeesOfUniquePosition = joanDataSet.filter((x) => x.Position === oneUniquePosition)
  let count =  employeesOfUniquePosition.length;
  let names = employeesOfUniquePosition.map((x) => x.EmployeeName)


  let oneResult = {
    Position: oneUniquePosition,
    names: names,
    count: count
  };

  result.push((oneResult))
}


console.log(result);



//Patrick Kimemia Mwaura
//9/13, 4:25 PM
const arr = [{​​​​​​​​"ID":1,"FName":"Riley","Salary":234.50,"Position":"Manager","Age":35}​​​​​​​​,{​​​​​​​​"ID":2,"Supervisor":1,"FName":"Miley","Salary":100.50,"Position":"Developer","Age":35}​​​​​​​​,{​​​​​​​​"ID":3,"Supervisor":1,"FName":"Skylar","Salary":100.50,"Position":"Engineer","Age":35}​​​​​​​​,{​​​​​​​​"ID":4,"Supervisor":1,"FName":"Katie","Salary":100.50,"Position":"Engineer","Age":35}​​​​​​​​]
const joanDataSet = [{​​​​​​​​"ID":1,"EmployeeName":"John","Age":12,"Salary":3000,"Position":"Analyst"}​​​​​​​​,{​​​​​​​​"ID":2,"EmployeeName":"Doe","Supervisor":1,"Age":35,"Salary":2500,"Position":"Developer"}​​​​​​​​,{​​​​​​​​"ID":3,"EmployeeName":"Mike","Supervisor":1,"Age":22,"Salary":3021,"Position":"HR"}​​​​​​​​,{​​​​​​​​"ID":4,"EmployeeName":"Mary","Supervisor":3,"Age":12,"Salary":3000,"Position":"Dev1"}​​​​​​​​,{​​​​​​​​"ID":5,"EmployeeName":"Anto","Supervisor":2,"Age":35,"Salary":2000,"Position":"Developer"}​​​​​​​​,{​​​​​​​​"ID":6,"EmployeeName":"Julia","Supervisor":4,"Age":22,"Salary":3021,"Position":"Dev"}​​​​​​​​,{​​​​​​​​"ID":7,"EmployeeName":"Mary","Supervisor":6,"Age":22,"Salary":4000,"Position":"Dev1"}​​​​​​​​,{​​​​​​​​"ID":8,"EmployeeName":"Tess","Supervisor":7,"Age":50,"Salary":34000,"Position":"Developer"}​​​​​​​​,{​​​​​​​​"ID":9,"EmployeeName":"Essy","Supervisor":1,"Age":23,"Salary":5021,"Position":"Dev"}​​​​​​​​,{​​​​​​​​"ID":10,"EmployeeName":"Mary","Supervisor":3,"Age":12,"Salary":3000,"Position":"Dev1"}​​​​​​​​,{​​​​​​​​"ID":11,"EmployeeName":"Anto","Supervisor":2,"Age":35,"Salary":2000,"Position":"Developer"}​​​​​​​​,{​​​​​​​​"ID":12,"EmployeeName":"Sue","Supervisor":1,"Age":22,"Salary":3021,"Position":"Dev"}​​​​​​​​];







// let Position = joanDataSet.map((x) => x.Position)

// let result = [];

// for (let i = 0; i < joanDataSet.length; i++) {
//   const pos = joanDataSet[i];
//   let totalCount = joanDataSet.filter((x) => x === pos).length;
//   let newPositionCount = {
//     position: pos,
//     totalCount
//   }
//   result.push(newPositionCount);
  
// }
// console.log(result);


