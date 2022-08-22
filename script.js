//------------------------
 // For Bangla Frist Paper
 //-----------------------
 function result1(){
	var _tm=parseInt(document.getElementById('tm').value);
	var _pm=parseInt(document.getElementById('pm').value);
	if (_tm <=0 && _pm <=0 || document.getElementById('tm').value=="" && document.getElementById('pm').value) {
		alert("Please Enter Mark First");
		document.getElementById('ttm').value=0;
	}
	else{
		var _totalMark=_tm+_pm;
		document.getElementById('ttm').value=_totalMark;
		
		if (_totalMark >= 80 && _totalMark <=100) {
			document.getElementById('grad').value="A+";
			document.getElementById('point').value="5.00";
		}
		else if (_totalMark >= 70 && _totalMark <=79) {
			document.getElementById('grad').value="A";
			document.getElementById('point').value="4.00";
		}
		else if (_totalMark >= 60 && _totalMark <=69) {
			document.getElementById('grad').value="A-";
			document.getElementById('point').value="3.50";
		}
		else if (_totalMark >= 50 && _totalMark <=59) {
			document.getElementById('grad').value="B";
			document.getElementById('point').value="3.00";
		}
		else if (_totalMark >= 40 && _totalMark <=49) {
			document.getElementById('grad').value="C";
			document.getElementById('point').value="2.00";
		}
		else if (_totalMark >= 33 && _totalMark <=39) {
			document.getElementById('grad').value="D";
			document.getElementById('point').value="1.00";
		}
		else if (_totalMark >= 0 && _totalMark <=32) {
			document.getElementById('grad').value="F";
			document.getElementById('point').value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById('grad').value="";
			document.getElementById('point').value="";
			document.getElementById('tm').value="";
			document.getElementById('pm').value="";
			document.getElementById('ttm').value="";
		}
	}
}
//------------------------
 // For Bangla 2nd Paper
 //-----------------------
 function result2(){
	var _tm=parseInt(document.getElementById('tm1').value);
	var _pm=parseInt(document.getElementById('pm1').value);
	if (_tm <=0 && _pm <=0 || document.getElementById('tm1').value=="" && document.getElementById('pm1').value) {
		alert("Please Enter Mark First");
		document.getElementById('ttm1').value=0;
	}
	else{
		var _totalMark=_tm + _pm;
		document.getElementById('ttm1').value=_totalMark;
		
		if (_totalMark >= 80 && _totalMark <=100) {
			document.getElementById('grad1').value="A+";
			document.getElementById('point1').value="5.00";
		}
		else if (_totalMark >= 70 && _totalMark <=79) {
			document.getElementById('grad1').value="A";
			document.getElementById('point1').value="4.00";
		}
		else if (_totalMark >= 60 && _totalMark <=69) {
			document.getElementById('grad1').value="A-";
			document.getElementById('point1').value="3.50";
		}
		else if (_totalMark >= 50 && _totalMark <=59) {
			document.getElementById('grad1').value="B";
			document.getElementById('point1').value="3.00";
		}
		else if (_totalMark >= 40 && _totalMark <=49) {
			document.getElementById('grad1').value="C";
			document.getElementById('point1').value="2.00";
		}
		else if (_totalMark >= 33 && _totalMark <=39) {
			document.getElementById('grad1').value="D";
			document.getElementById('point1').value="1.00";
		}
		else if (_totalMark >= 0 && _totalMark <=32) {
			document.getElementById('grad1').value="F";
			document.getElementById('point1').value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById('grad1').value="";
			document.getElementById('point1').value="";
			document.getElementById('tm1').value="";
			document.getElementById('pm1').value="";
			document.getElementById('ttm1').value="";
		}
	}
}

 //------------------------
 // For English 1st Pepar
 //------------------------
 function result3(){
	var _tm=parseInt(document.getElementById('tm2').value);
	var _pm=parseInt(document.getElementById('pm2').value);
	if (_tm <=0 && _pm <=0 || document.getElementById('tm2').value=="" && document.getElementById('pm2').value) {
		alert("Please Enter Mark First");
		document.getElementById('ttm2').value=0;
	}
	else{
		var _totalMark=_tm+_pm;
		document.getElementById('ttm2').value=_totalMark;
		
		if (_totalMark >= 80 && _totalMark <=100) {
			document.getElementById('grad2').value="A+";
			document.getElementById('point2').value="5.00";
		}
		else if (_totalMark >= 70 && _totalMark <=79) {
			document.getElementById('grad2').value="A";
			document.getElementById('point2').value="4.00";
		}
		else if (_totalMark >= 60 && _totalMark <=69) {
			document.getElementById('grad2').value="A-";
			document.getElementById('point2').value="3.50";
		}
		else if (_totalMark >= 50 && _totalMark <=59) {
			document.getElementById('grad2').value="B";
			document.getElementById('point2').value="3.00";
		}
		else if (_totalMark >= 40 && _totalMark <=49) {
			document.getElementById('grad2').value="C";
			document.getElementById('point2').value="2.00";
		}
		else if (_totalMark >= 33 && _totalMark <=39) {
			document.getElementById('grad2').value="D";
			document.getElementById('point2').value="1.00";
		}
		else if (_totalMark >= 0 && _totalMark <=32) {
			document.getElementById('grad2').value="F";
			document.getElementById('point2').value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById('grad2').value="";
			document.getElementById('point2').value="";
			document.getElementById('tm2').value="";
			document.getElementById('pm2').value="";
			document.getElementById('ttm2').value="";
		}
	}
}

 
 //------------------------
 // For English 2nd Paper
 //------------------------
function result4(){
	var _tm=parseInt(document.getElementById('tm4').value);
	var _pm=parseInt(document.getElementById('pm4').value);
	if (_tm <=0 && _pm <=0 || document.getElementById('tm4').value=="" && document.getElementById('pm4').value) {
		alert("Please Enter Mark First");
		document.getElementById('ttm4').value=0;
	}
	else{
		var _totalMark=_tm+_pm;
		document.getElementById('ttm4').value=_totalMark;
		
		if (_totalMark >= 80 && _totalMark <=100) {
			document.getElementById('grad4').value="A+";
			document.getElementById('point4').value="5.00";
		}
		else if (_totalMark >= 70 && _totalMark <=79) {
			document.getElementById('grad4').value="A";
			document.getElementById('point4').value="4.00";
		}
		else if (_totalMark >= 60 && _totalMark <=69) {
			document.getElementById('grad4').value="A-";
			document.getElementById('point4').value="3.50";
		}
		else if (_totalMark >= 50 && _totalMark <=59) {
			document.getElementById('grad4').value="B";
			document.getElementById('point4').value="3.00";
		}
		else if (_totalMark >= 40 && _totalMark <=49) {
			document.getElementById('grad4').value="C";
			document.getElementById('point4').value="2.00";
		}
		else if (_totalMark >= 33 && _totalMark <=39) {
			document.getElementById('grad4').value="D";
			document.getElementById('point4').value="1.00";
		}
		else if (_totalMark >= 0 && _totalMark <=32) {
			document.getElementById('grad4').value="F";
			document.getElementById('point4').value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById('grad4').value="";
			document.getElementById('point4').value="";
			document.getElementById('tm4').value="";
			document.getElementById('pm4').value="";
			document.getElementById('ttm4').value="";
		}
	}
}


//------------------------
 // For Bangladesh studies
 //------------------------
 function result5(){
	var _tm=parseInt(document.getElementById('tm5').value);
	var _pm=parseInt(document.getElementById('pm5').value);
	if (_tm <=0 && _pm <=0 || document.getElementById('tm5').value=="" && document.getElementById('pm5').value) {
		alert("Please Enter Mark First");
		document.getElementById('ttm5').value=0;
	}
	else{
		var _totalMark=_tm+_pm;
		document.getElementById('ttm5').value=_totalMark;
		
		if (_totalMark >= 80 && _totalMark <=100) {
			document.getElementById('grad5').value="A+";
			document.getElementById('point5').value="5.00";
		}
		else if (_totalMark >= 70 && _totalMark <=79) {
			document.getElementById('grad5').value="A";
			document.getElementById('point5').value="4.00";
		}
		else if (_totalMark >= 60 && _totalMark <=69) {
			document.getElementById('grad5').value="A-";
			document.getElementById('point5').value="3.50";
		}
		else if (_totalMark >= 50 && _totalMark <=59) {
			document.getElementById('grad5').value="B";
			document.getElementById('point5').value="3.00";
		}
		else if (_totalMark >= 40 && _totalMark <=49) {
			document.getElementById('grad5').value="C";
			document.getElementById('point5').value="2.00";
		}
		else if (_totalMark >= 33 && _totalMark <=39) {
			document.getElementById('grad5').value="D";
			document.getElementById('point5').value="1.00";
		}
		else if (_totalMark >= 0 && _totalMark <=32) {
			document.getElementById('grad5').value="F";
			document.getElementById('point5').value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById('grad5').value="";
			document.getElementById('point5').value="";
			document.getElementById('tm5').value="";
			document.getElementById('pm5').value="";
			document.getElementById('ttm5').value="";
		}
	}
}
//-----------------------5
 // For Mathmatics
 //------------------------
 function result6(){
	var _tm=parseInt(document.getElementById('tm6').value);
	var _pm=parseInt(document.getElementById('pm6').value);
	if (_tm <=0 && _pm <=0 || document.getElementById('tm6').value=="" && document.getElementById('pm6').value) {
		alert("Please Enter Mark First");
		document.getElementById('ttm6').value=0;
	}
	else{
		var _totalMark=_tm+_pm;
		document.getElementById('ttm6').value=_totalMark;
		
		if (_totalMark >= 80 && _totalMark <=100) {
			document.getElementById('grad6').value="A+";
			document.getElementById('point6').value="5.00";
		}
		else if (_totalMark >= 70 && _totalMark <=79) {
			document.getElementById('grad6').value="A";
			document.getElementById('point6').value="4.00";
		}
		else if (_totalMark >= 60 && _totalMark <=69) {
			document.getElementById('grad6').value="A-";
			document.getElementById('point6').value="3.50";
		}
		else if (_totalMark >= 50 && _totalMark <=59) {
			document.getElementById('grad6').value="B";
			document.getElementById('point6').value="3.00";
		}
		else if (_totalMark >= 40 && _totalMark <=49) {
			document.getElementById('grad6').value="C";
			document.getElementById('point6').value="2.00";
		}
		else if (_totalMark >= 33 && _totalMark <=39) {
			document.getElementById('grad6').value="D";
			document.getElementById('point6').value="1.00";
		}
		else if (_totalMark >= 0 && _totalMark <=32) {
			document.getElementById('grad6').value="F";
			document.getElementById('point6').value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById('grad6').value="";
			document.getElementById('point6').value="";
			document.getElementById('tm6').value="";
			document.getElementById('pm6').value="";
			document.getElementById('ttm6').value="";
		}
	}
}



//------------------------
 // For physics
 //-----------------------
 function result7(){
	var _tm=parseInt(document.getElementById('tm7').value);
	var _pm=parseInt(document.getElementById('pm7').value);
	if (_tm <=0 && _pm <=0 || document.getElementById('tm7').value=="" && document.getElementById('pm7').value) {
		alert("Please Enter Mark First");
		document.getElementById('ttm7').value=0;
	}
	else{
		var _totalMark=_tm+_pm;
		document.getElementById('ttm7').value=_totalMark;
		
		if (_totalMark >= 80 && _totalMark <=100) {
			document.getElementById('grad7').value="A+";
			document.getElementById('point7').value="5.00";
		}
		else if (_totalMark >= 70 && _totalMark <=79) {
			document.getElementById('grad7').value="A";
			document.getElementById('point7').value="4.00";
		}
		else if (_totalMark >= 60 && _totalMark <=69) {
			document.getElementById('grad7').value="A-";
			document.getElementById('point7').value="3.50";
		}
		else if (_totalMark >= 50 && _totalMark <=59) {
			document.getElementById('grad7').value="B";
			document.getElementById('point7').value="3.00";
		}
		else if (_totalMark >= 40 && _totalMark <=49) {
			document.getElementById('grad7').value="C";
			document.getElementById('point7').value="2.00";
		}
		else if (_totalMark >= 33 && _totalMark <=39) {
			document.getElementById('grad7').value="D";
			document.getElementById('point7').value="1.00";
		}
		else if (_totalMark >= 0 && _totalMark <=32) {
			document.getElementById('grad7').value="F";
			document.getElementById('point7').value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById('grad7').value="";
			document.getElementById('point7').value="";
			document.getElementById('tm7').value="";
			document.getElementById('pm7').value="";
			document.getElementById('ttm7').value="";
		}
	}
 }

//------------------------
 // For chemisty
 //------------------------
 function result8(){
	var _tm=parseInt(document.getElementById('tm8').value);
	var _pm=parseInt(document.getElementById('pm8').value);
	if (_tm <=0 && _pm <=0 || document.getElementById('tm8').value=="" && document.getElementById('pm8').value) {
		alert("Please Enter Mark First");
		document.getElementById('ttm8').value=0;
	}
	else{
		var _totalMark=_tm+_pm;
		document.getElementById('ttm8').value=_totalMark;
		
		if (_totalMark >= 80 && _totalMark <=100) {
			document.getElementById('grad8').value="A+";
			document.getElementById('point8').value="5.00";
		}
		else if (_totalMark >= 70 && _totalMark <=79) {
			document.getElementById('grad8').value="A";
			document.getElementById('point8').value="4.00";
		}
		else if (_totalMark >= 60 && _totalMark <=69) {
			document.getElementById('grad8').value="A-";
			document.getElementById('point8').value="3.50";
		}
		else if (_totalMark >= 50 && _totalMark <=59) {
			document.getElementById('grad8').value="B";
			document.getElementById('point8').value="3.00";
		}
		else if (_totalMark >= 40 && _totalMark <=49) {
			document.getElementById('grad8').value="C";
			document.getElementById('point8').value="2.00";
		}
		else if (_totalMark >= 33 && _totalMark <=39) {
			document.getElementById('grad8').value="D";
			document.getElementById('point8').value="1.00";
		}
		else if (_totalMark >= 0 && _totalMark <=32) {
			document.getElementById('grad8').value="F";
			document.getElementById('point8').value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById('grad8').value="";
			document.getElementById('point8').value="";
			document.getElementById('tm8').value="";
			document.getElementById('pm8').value="";
			document.getElementById('ttm8').value="";
		}
	}
 }
//------------------------
 // For biology
 //------------------------
 function result9(){
	var _tm=parseInt(document.getElementById('tm9').value);
	var _pm=parseInt(document.getElementById('pm9').value);
	if (_tm <=0 && _pm <=0 || document.getElementById('tm9').value=="" && document.getElementById('pm9').value) {
		alert("Please Enter Mark First");
		document.getElementById('ttm9').value=0;
	}
	else{
		var _totalMark=_tm+_pm;
		document.getElementById('ttm9').value=_totalMark;
		
		if (_totalMark >= 80 && _totalMark <=100) {
			document.getElementById('grad9').value="A+";
			document.getElementById('point9').value="5.00";
		}
		else if (_totalMark >= 70 && _totalMark <=79) {
			document.getElementById('grad9').value="A";
			document.getElementById('point9').value="4.00";
		}
		else if (_totalMark >= 60 && _totalMark <=69) {
			document.getElementById('grad9').value="A-";
			document.getElementById('point9').value="3.50";
		}
		else if (_totalMark >= 50 && _totalMark <=59) {
			document.getElementById('grad9').value="B";
			document.getElementById('point9').value="3.00";
		}
		else if (_totalMark >= 40 && _totalMark <=49) {
			document.getElementById('grad9').value="C";
			document.getElementById('point9').value="2.00";
		}
		else if (_totalMark >= 33 && _totalMark <=39) {
			document.getElementById('grad9').value="D";
			document.getElementById('point9').value="1.00";
		}
		else if (_totalMark >= 0 && _totalMark <=32) {
			document.getElementById('grad9').value="F";
			document.getElementById('point9').value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById('grad9').value="";
			document.getElementById('point9').value="";
			document.getElementById('tm9').value="";
			document.getElementById('pm9').value="";
			document.getElementById('ttm9').value="";
		}
	}

 }
//------------------------
 // For ic10
 //------------------------
 function result10(){
	var _tm=parseInt(document.getElementById('tm10').value);
	var _pm=parseInt(document.getElementById('pm10').value);
	if (_tm <=0 && _pm <=0 || document.getElementById('tm10').value=="" && document.getElementById('pm10').value) {
		alert("Please Enter Mark First");
		document.getElementById('ttm10').value=0;
	}
	else{
		var _totalMark=_tm+_pm;
		document.getElementById('ttm10').value=_totalMark;
		
		if (_totalMark >= 80 && _totalMark <=100) {
			document.getElementById('grad10').value="A+";
			document.getElementById('point10').value="5.00";
		}
		else if (_totalMark >= 70 && _totalMark <=79) {
			document.getElementById('grad10').value="A";
			document.getElementById('point10').value="4.00";
		}
		else if (_totalMark >= 60 && _totalMark <=69) {
			document.getElementById('grad10').value="A-";
			document.getElementById('point10').value="3.50";
		}
		else if (_totalMark >= 50 && _totalMark <=59) {
			document.getElementById('grad10').value="B";
			document.getElementById('point10').value="3.00";
		}
		else if (_totalMark >= 40 && _totalMark <=49) {
			document.getElementById('grad10').value="C";
			document.getElementById('point10').value="2.00";
		}
		else if (_totalMark >= 33 && _totalMark <=39) {
			document.getElementById('grad10').value="D";
			document.getElementById('point10').value="1.00";
		}
		else if (_totalMark >= 0 && _totalMark <=32) {
			document.getElementById('grad10').value="F";
			document.getElementById('point10').value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById('grad10').value="";
			document.getElementById('point10').value="";
			document.getElementById('tm10').value="";
			document.getElementById('pm10').value="";
			document.getElementById('ttm10').value="";
		}
	}
 }
//------------------------
 // For speaking englis11
 //------------------------
 function result11(){
	var _tm=parseInt(document.getElementById('tm11').value);
	var _pm=parseInt(document.getElementById('pm11').value);
	if (_tm <=0 && _pm <=0 || document.getElementById('tm11').value=="" && document.getElementById('pm11').value) {
		alert("Please Enter Mark First");
		document.getElementById('ttm11').value=0;
	}
	else{
		var _totalMark=_tm+_pm;
		document.getElementById('ttm11').value=_totalMark;
		
		if (_totalMark >= 80 && _totalMark <=100) {
			document.getElementById('grad11').value="A+";
			document.getElementById('point11').value="5.00";
		}
		else if (_totalMark >= 70 && _totalMark <=79) {
			document.getElementById('grad11').value="A";
			document.getElementById('point11').value="4.00";
		}
		else if (_totalMark >= 60 && _totalMark <=69) {
			document.getElementById('grad11').value="A-";
			document.getElementById('point11').value="3.50";
		}
		else if (_totalMark >= 50 && _totalMark <=59) {
			document.getElementById('grad11').value="B";
			document.getElementById('point11').value="3.00";
		}
		else if (_totalMark >= 40 && _totalMark <=49) {
			document.getElementById('grad11').value="C";
			document.getElementById('point11').value="2.00";
		}
		else if (_totalMark >= 33 && _totalMark <=39) {
			document.getElementById('grad11').value="D";
			document.getElementById('point11').value="1.00";
		}
		else if (_totalMark >= 0 && _totalMark <=32) {
			document.getElementById('grad11').value="F";
			document.getElementById('point11').value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById('grad11').value="";
			document.getElementById('point11').value="";
			document.getElementById('tm11').value="";
			document.getElementById('pm11').value="";
			document.getElementById('ttm11').value="";
		}
	}

 }

    // final result
function finalResult(){
	
	
		var _tm=document.getElementById('ttm').value;
		var _tm1=document.getElementById('ttm1').value;
		var _tm2=document.getElementById('ttm2').value;
        var _tm4=document.getElementById('ttm4').value;
        var _tm5=document.getElementById('ttm5').value;
        var _tm6=document.getElementById('ttm6').value;
        var _tm7=document.getElementById('ttm7').value;
        var _tm8=document.getElementById('ttm8').value;
        var _tm9=document.getElementById('ttm9').value;
		var _tm10=document.getElementById('ttm10').value;
		var _tm11=document.getElementById('ttm11').value;
		var _totalMark = parseInt(_tm)+parseInt(_tm1)+parseInt(_tm2)+parseInt(_tm4)+parseInt(_tm5)+parseInt(_tm6)+parseInt(_tm7)+
		parseInt(_tm8)+parseInt(_tm9)+parseInt(_tm10)+parseInt(_tm11);

		document.getElementById('totalMark').value=_totalMark;

		var _point =document.getElementById('point').value;
		var _point1 =document.getElementById('point1').value;
		var _point2 =document.getElementById('point2').value;
		var _point4 =document.getElementById('point4').value;
		var _point5 =document.getElementById('point5').value;
		var _point6 =document.getElementById('point6').value;
		var _point7 =document.getElementById('point7').value;
		var _point8 =document.getElementById('point8').value;
		var _point9 =document.getElementById('point9').value;
		var _point10 =document.getElementById('point10').value;
		var _point11 =document.getElementById('point11').value;
		var _totalPoint=((parseFloat(_point) + parseFloat(_point1) +parseFloat(_point2)+ parseFloat(_point4)+ parseFloat(_point5)+ parseFloat(_point6)+ parseFloat(_point7)+ parseFloat(_point8)+ parseFloat(_point9)+ parseFloat(_point10)+ parseFloat(_point11))/11);

		document.getElementById("totalPoint").value=_totalPoint;

		if (_totalPoint==5.00) {
			document.getElementById("totalgrade").value="A+";
		}
		else if(_totalPoint >= 4.00 && _totalPoint<=4.99){
			document.getElementById("totalgrade").value="A";
		}
		else if(_totalPoint >= 3.00 && _totalPoint<=3.99){
			document.getElementById("totalgrade").value="A-";
		}
		else if(_totalPoint >= 2.00 && _totalPoint<=2.99){
			document.getElementById("totalgrade").value="A-";
		}
		else if(_totalPoint >= 1.00 && _totalPoint<=1.99){
			document.getElementById("totalgrade").value="A-";
		}
	}

