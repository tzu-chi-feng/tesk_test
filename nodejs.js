const HOST = "ideaschain.com.tw";

const AK = "YOUR_PROJECT_KEY(AK)";
const DEVICE_ID = "YOUR_DEVICE_ID";
const SENSOR_ID = "YOUR_SENSOR_ID";

var ideaschain = {
	request : function(method,path,postData,callback){
		var https = require('https');
		var options = {
			hostname: HOST,
			path: path,
			method: method,
			headers : {
				'Content-Type': 'application/json',
				'AK' : AK
				}
		}	
		var req = https.request(options, (resp) => {
			var data = '';
			resp.on('data', (chunk) => {
				data += chunk;
			});
			resp.on('end', () => {
				if(typeof(callback)=="function"){
					if(data)
						callback(JSON.parse(data));
					else
						callback({result:true})
				}
			});
		}).on("error", (err) => {
			debug(err);
			if(typeof(callback)=="function"){
				callback("Error: " + err.message);
			}
		});		
		if(postData){
			req.write(JSON.stringify(postData));
		}
		req.end();
	},
	postData : function(did,data){
		this.request("POST","/iot/v1/rawdata/"+did,data,function(d){
			if(typeof(callback)=="function"){
				callback(d);
			}
		})	
	}	
}
setInterval(function(){
	var a = Math.floor(Math.random()*10);
    ideaschain.postData(DEVICE_ID,
        [{sid : SENSOR_ID, value : [a]}]
    );
},3000)
