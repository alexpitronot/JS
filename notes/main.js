function task() {
	const taskSubject=document.getElementById("taskName").value;
	const taskDate=document.getElementById("taskDate").value;
	const taskTime=document.getElementById("taskTime").value;
	
	if (taskSubject == "" || taskDate == "" ) {
		alert ("You have to fill all fields"); }
	else {
var myObj, myJSON;
var myJSON = '{"task":"'+taskSubject+'", "date":"'+taskDate+'", "time":"'+taskTime+'"}';
var myObj = JSON.parse(myJSON);

var notecount;

if (localStorage.getItem("note")== null) {
	notecount="1";
	localStorage.setItem("note", notecount);
	} 
	else {
	notecount=localStorage.getItem("note")*1+1;
	localStorage.setItem("note", notecount);		
	}
	
var notecount1;
if (notecount1*1 !== 0) {notecount1=notecount-1;} else {notecount1=notecount+1;};
document.getElementById("petekk").innerHTML = document.getElementById("petekk").innerHTML + "<div onmouseover=xbut("+notecount+") onmouseout=xbut1("+notecount+") class=petek id=p"+notecount+"><table><tr><td><div id=subjectpetek"+notecount+" class=spetek></div></td></tr><tr><td><div id=datepetek"+notecount+" class=dpetek></div></td></tr><tr><td><div id=timepetek"+notecount+" class=tpetek></div></td></tr></table></div><span><img src=img/xbut.png class=xbut id=xbut"+notecount+" onmouseover=xbut("+notecount+") onclick=taskclear("+notecount+")></span>";
document.getElementById("subjectpetek"+notecount+"").innerHTML = myObj.task;
document.getElementById("datepetek"+notecount+"").innerHTML = myObj.date;
document.getElementById("timepetek"+notecount+"").innerHTML = myObj.time;
document.getElementById("p"+notecount1+"").style = "opacity: 1;";
document.getElementById("p"+notecount+"").style = "opacity: 1; animation-name: fadeInOpacity; animation-iteration-count: 1; animation-timing-function: ease-in; animation-duration: 1s;";
	}
}

function reset() {
	taskSubject=document.getElementById("taskName").value = "";
	taskDate=document.getElementById("taskDate").value = "";
	taskTime=document.getElementById("taskTime").value = "";
	window.localStorage.removeItem('note');		
}

function xbut(notecount) {
	document.getElementById("xbut"+notecount+"").style = "display: inline; margin-right: -25px; cursor: pointer";
}

function xbut1(notecount) {
	document.getElementById("xbut"+notecount+"").style = "display: none;";
}

function taskclear(notecount2) {
	document.getElementById("p"+notecount2+"").style = "display: none !important;";
}