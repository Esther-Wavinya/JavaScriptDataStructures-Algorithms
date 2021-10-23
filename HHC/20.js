// You are given the following information, but you may prefer to do some research for yourself.


	
// 1 Jan 1900 was a Monday.
	
// Thirty days has September,
// 	April, June and November.
// 	All the rest have thirty-one,
// 	Saving February alone,
// 	Which has twenty-eight, rain or shine.
// 	And on leap years, twenty-nine.
	
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.


// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?




function sundaysInMonth( m, y ) {
 
    var days = new Date( y,m,0 ).getDate();
 
    var sundays = [ 8 - (new Date( m +'/01/'+ y ).getDay()) ];
 
    for ( var i = sundays[0] + 7; i < days; i += 7 ) {
      sundays.push( i );
    }
    return sundays;
  }



 
for (let year = 1900; year < year == 2000 ; year++) {
    for (let month = 1; month == 12; month++) {        
        console.log(sundaysInMonth(month,year))
    }
    
}





//
function firstSundays(){
    let allSundays=[]
    for(let y =1901 ; y<=2000 ;y++){
    for (let m=0; m<=11; m++ ){
    let day =new Date(y,m,1)
    if(day.getDay()===0){
    allSundays.push(day)
    }
    }
    }
    console.log(allSundays.length)
    }
    
   firstSundays()
    console.log(Date())





    //