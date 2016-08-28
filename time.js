var zerofill=function(n){
	if(n<10) return '0' + n;
	else return n;
}
var translateNATURAL=function(date){
		var naturalDate=new Date(date);
		var naturalDateStr=Date.parse(naturalDate).toString();
		var unixDateStr=naturalDateStr.substring(0,naturalDateStr.length-3)
		var doc={

			naturalDate : date,
			unixDate : parseInt(unixDateStr)
}


			return doc;
}

var translateUNIX=function(date){


	var months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	var naturalDate=new Date(date*1000);
	var month=months[naturalDate.getMonth()];
	var theDate=naturalDate.getDate();
	var year=naturalDate.getFullYear();
	var hour=naturalDate.getHours();
	var minutes=naturalDate.getMinutes();
	var seconds=naturalDate.getSeconds();

	var naturalDateString=month+" "+zerofill(theDate)+", "+zerofill(year)+" "+zerofill(hour)+":"+zerofill(minutes)+":"+zerofill(seconds);



	var doc={
			naturalDate : naturalDateString,
			unixDate : parseInt(date)
	}



	return(doc);
}

	

module.exports.translateunix=translateUNIX;
module.exports.translatenatural=translateNATURAL;

