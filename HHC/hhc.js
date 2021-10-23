// Get teh dataset
const joanDataset=[
  {"ID":1,"EmployeeName":"John","Age":12,"Salary":3000,"Position":"Analyst"},
  {"ID":2,"EmployeeName":"Doe","Supervisor":1,"Age":35,"Salary":2500,"Position":"Developer"}
  ,{"ID":3,"EmployeeName":"Mike","Supervisor":1,"Age":22,"Salary":3021,"Position":"HR"},{"ID":4,"EmployeeName":"Mary","Supervisor":3,"Age":12,"Salary":3000,"Position":"Dev1"},{"ID":5,"EmployeeName":"Anto","Supervisor":2,"Age":35,"Salary":2000,"Position":"Developer"},{"ID":6,"EmployeeName":"Julia","Supervisor":4,"Age":22,"Salary":3021,"Position":"Dev"},{"ID":7,"EmployeeName":"Mary","Supervisor":6,"Age":22,"Salary":4000,"Position":"Dev1"},{"ID":8,"EmployeeName":"Tess","Supervisor":7,"Age":50,"Salary":34000,"Position":"Developer"},{"ID":9,"EmployeeName":"Essy","Supervisor":1,"Age":23,"Salary":5021,"Position":"Dev"},{"ID":10,"EmployeeName":"Mary","Supervisor":3,"Age":12,"Salary":3000,"Position":"Dev1"},{"ID":11,"EmployeeName":"Anto","Supervisor":2,"Age":35,"Salary":2000,"Position":"Developer"},{"ID":12,"EmployeeName":"Sue","Supervisor":1,"Age":22,"Salary":3021,"Position":"Dev"}]

// const didiDataset= [{​​​​​​​​"ID":1,"FName":"Riley","Salary":234.50,"Position":"Manager","Age":35}​​​​​​​​,{​​​​​​​​"ID":2,"Supervisor":1,"FName":"Miley","Salary":100.50,"Position":"Developer","Age":35}​​​​​​​​,{​​​​​​​​"ID":3,"Supervisor":1,"FName":"Skylar","Salary":100.50,"Position":"Engineer","Age":35}​​​​​​​​,{​​​​​​​​"ID":4,"Supervisor":1,"FName":"Katie","Salary":100.50,"Position":"Engineer","Age":35}​​​​​​​​]

function getPositionSummary(b){
  const arrayPositions=new Set(b.map((x)=>x.Position))
  const positions=Array.from(arrayPositions)
  // console.log(filteredPositions)
  let totalPositions=[]
   for(position of positions){
      filteredPositions=b.filter((x)=>x.Position===position)
      totalPositions.push({
        position:position,
        count:filteredPositions.length,
        names:filteredPositions.map(x=>x.EmployeeName)
      })
   } 
  
   return totalPositions
}
// getPositionSummary(joanDataset)

let x=[1,2,3,4,5]



// List of supervisors
// filter by superrvisor id 


function reportingList(b){
    newData=b.filter((x)=>x.Supervisor)
    employees=[]
    supervisorsList=Array.from(new Set(newData.map((x)=>x.Supervisor)))
    
    for(let supervisor of supervisorsList){
        filteredEmployees=b.filter((x)=>x.Supervisor===supervisor)
        employees.push({
          supervisor:supervisor,
          supervisorName:b.find((x)=>x.ID === supervisor).EmployeeName,
          names:filteredEmployees.map((x)=>x.EmployeeName),
          salary:filteredEmployees.map((x)=>x.Salary),
          averageSalary:filteredEmployees.map((x)=>x.Salary).reduce((a,b)=>a+b)/filteredEmployees.length,
          count:filteredEmployees.length
        })
    }

    console.log(employees)
  
}


 function getSummarySalary(b){
   let  overallSupervisor=b.find(x=>!x.Supervisor)
  let subOrdinates=b.filter(x=>x.Supervisor===overallSupervisor.ID)
  
  let reachedEnd=true
  let subPeople=[]
  let subNumber=subOrdinates.length

  while(subNumber!==0){
    if(subOrdinates.length===0){
      reachedEnd=false
    }else{
      for(let sub of subOrdinates){
        let subIds=subOrdinates.map((x)=>x.ID)
        subPeople=[...subPeople,...subIds]
        console.log(subPeople)
        subOrdinates=b.filter(x=>x.Supervisor===sub.ID)
        subNumber+=subOrdinates.length
        console.log(subNumber)
        subNumber--
      }
    }

  }
  console.log("Out")
  console.log(subPeople)

}


getSummarySalary(joanDataset)

