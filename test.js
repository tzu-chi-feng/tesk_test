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
				// document.getElementById('answer').innerHTML = currentValue.sid;	
				document.getElementById('time').innerHTML = currentValue.time;
				document.getElementById('ans').innerHTML = currentValue.value[0];
			};
			var answer = document.getElementById('ans').innerHTML;
			var answer_1 = "1";
			var answer_2 = "2";
			var answer_3 = "3";
			var answer_4 = "4";
			
			console.log(answer == answer_1);
			if ((answer == answer_1)) {
			
				document.getElementById('pic').innerHTML.src="choo_1.jpg" ;
				
			}else if (answer == answer_2){
				document.getElementById('pic').innerHTML.src="choo_2.jpg";
			}else if (answer == answer_3){
				document.getElementById('pic').innerHTML = " ./img/choo_2.jpg";
			}else if (answer == answer_4){
				document.getElementById('pic').innerHTML = " ./img/choo_2.jpg";
			}
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
