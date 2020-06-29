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
				document.getElementById('a11').innerHTML = currentValue.time;
				document.getElementById('a12').innerHTML = currentValue.value[0];
			};
			var studentid = document.getElementById('a12').innerHTML;
			var classmate = '106AC1013';
			var th_lu = '107AC1229';
			var th_wu = '107AC2048';
			var th_hu = '107AC1234';
			var th_won = '107AC1827';
			var th_young = '107AC2957';
			var th_chen = '107AC2345';
			console.log(studentid == classmate);
			if ((studentid == classmate)) {
			
				document.getElementById('a13').innerHTML = '106AC1013簽到成功';
				
			}else if (studentid == th_lu){
				document.getElementById('lu').innerHTML = '簽到成功';
				document.getElementById('a13').innerHTML = '盧俊諺';
			}else if (studentid == th_wu){
				document.getElementById('wu').innerHTML = '簽到成功';
				document.getElementById('a13').innerHTML = '吳國禎';
			}else if (studentid == th_hu){
				document.getElementById('hu').innerHTML = '簽到成功';
				document.getElementById('a13').innerHTML = '胡縉祥 ';
			}else if (studentid == th_won){
				document.getElementById('won').innerHTML = '簽到成功';
				document.getElementById('a13').innerHTML = '翁哲川 ';
			}else if (studentid == th_young){
				document.getElementById('young').innerHTML = '簽到成功';
				document.getElementById('a13').innerHTML = '楊宙航 ';
			}else if (studentid == th_chen){
				document.getElementById('chen').innerHTML = '簽到成功';
				document.getElementById('a13').innerHTML = '陳圳卿';
			}else{
				document.getElementById('a13').innerHTML = '資料錯誤';
			}
			// if ((studentid == classmate)) {
			
			// 	document.getElementById('answer3').innerHTML = '106AC1013簽到成功';
				
			// }else{
			// 	document.getElementById('answer3').innerHTML = '讀取簽到中';
				
			// }
			   
		});
		

		
	};
	
	

	// "https://ideaschain.com.tw/iot/v1/rawdata/" + DEVICE_ID + "/" + SENSOR_ID
	request.open("GET", "https://ideaschain.com.tw/iot/v1/rawdata/" + DEVICE_ID + "/" + SENSOR_ID + "?start=2020-06-12 &end=2020-06-30 20:30 ", true);
	request.setRequestHeader("AK", AK);
	request.setRequestHeader("content-type","application/json");
	var data = JSON.stringify([{
		sid: SENSOR_ID,	
		value: [v]	
	}])
	request.send(data);
	
	
	
}	



setInterval(function(){
	var a = Math.floor(Math.random()*10);
	postData(a)
},15000)



