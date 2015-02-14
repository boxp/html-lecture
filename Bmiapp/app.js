//起動時に読み込む関数
window.onload = function(){
	//IDを指定してボタンをクリックした時のイベントを指定
	document.getElementById('judge').onclick = function(){
		//IDから値を取り出して定義する
		var kg = document.getElementById("kg").value;
		var cm = document.getElementById("cm").value;
		var bmi = kg/(cm*cm/10000);

		//判定
		if(bmi >= 25){
			alert("BMIは" + bmi + "：肥満です");
		}else if(bmi >= 18.5){
			alert("BMIは" + bmi + "：標準です");
		}else{
			alert("BMIは" + bmi + "：低体重です");
		}
	};
};