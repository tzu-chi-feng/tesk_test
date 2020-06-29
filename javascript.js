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
			var studentid = document.getElementById('answer2').innerHTML;
			var classmate = '106AC1013';
			var th_lu = '12';
			var th_wu = '21';
			var th_hu = '112';
			var th_won = '121';
			var th_young = '122';
			var th_chen = '1221';
			console.log(studentid == classmate);
			if ((studentid == classmate)) {
			
				document.getElementById('answer3').innerHTML = '106AC1013簽到成功';
				
			}else if (studentid == th_lu){
				document.getElementById('answer3').innerHTML = '盧俊諺同學簽到成功';
			}else if (studentid == th_wu){
				document.getElementById('answer3').innerHTML = '吳國禎同學簽到成功';
			}else if (studentid == th_hu){
				document.getElementById('answer3').innerHTML = '胡縉祥同學簽到成功';
			}else if (studentid == th_won){
				document.getElementById('answer3').innerHTML = '翁哲川同學簽到成功';
			}else if (studentid == th_young){
				document.getElementById('answer3').innerHTML = '楊宙航同學簽到成功';
			}else if (studentid == th_chen){
				document.getElementById('answer3').innerHTML = '陳圳卿同學簽到成功';
			}else{
				document.getElementById('answer3').innerHTML = '資料錯誤';
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



