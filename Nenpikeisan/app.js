//起動時に読み込む関数
window.onload = function(){
	//IDを指定してボタンをクリックした時のイベントを指定
	document.getElementById('judge').onclick = function(){
		//IDから値を取り出して定義する
		var km = document.getElementById("km").value;
		var l = document.getElementById("l").value;

		//判定
		if(km/l > 20){
			alert("GOOD JOB!");
		}else if(km/l > 10){
			alert("SOSO");
		}else{
			alert("Bad");
		}
	};
};