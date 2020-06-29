const AK = "mRWLZZJm87QShoJL";
const DEVICE_ID = "8537968449007774";
const SENSOR_ID = "SCAN";
const SENSOR_ID2 = "button";
function postData(v){
	var request = new XMLHttpRequest();
	request.onreadystatechange= function () {
		console.log(request);
	}
	request.onload = function(e) {
		console.log(typeof request.response);
		var obj = JSON.parse(request.response);
		console.log(obj);
		obj.forEach(function(currentValue, index) {
			if (index === 0) {
				document.getElementById('answer').innerHTML = currentValue.sid;	
				document.getElementById('answer1').innerHTML = currentValue.time;
				document.getElementById('answer2').innerHTML = currentValue.value[0];
			};
		// var studentid = currentValue.value[0].toString();
		// var classmate = "107AC1013";
		// 	if (studentid = classmate) {
			
		// 		document.getElementById('answer3').innerHTML = "成功喔喔";
				
		// 	}else{
		// 		document.getElementById('answer3').innerHTML = "失敗喔喔";
		// 	}
			   
		});
		

		
	};
	
	

	// "https://ideaschain.com.tw/iot/v1/rawdata/" + DEVICE_ID + "/" + SENSOR_ID
	request.open("GET", "https://ideaschain.com.tw/iot/v1/rawdata/" + DEVICE_ID + "/" + SENSOR_ID2 + "?start=2020-06-12 &end=2020-06-30 20:30 ", true);
	request.setRequestHeader("AK", AK);
	request.setRequestHeader("content-type","application/json");
	var data = JSON.stringify([{
		sid: SENSOR_ID2,	
		value: [v]	
	}])
	request.send(data);
	
	
	
}	


setInterval(function(){
	var a = Math.floor(Math.random()*10);
	postData(a)
},15000)
