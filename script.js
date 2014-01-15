var post = function() {

  /* ブラウザのサイズを取得 */
  var height = document.documentElement.clientHeight;
  var width = document.documentElement.clientWidth;

  //テキストフィールドからテキストを取得
  var text = document.getElementById("input-form").value;

  //domの生成、配置
  var textv = document.createElement("div");
  textv.position = "fixed"
  textv.innerHTML = text;
  document.body.appendChild(textv);
  textv.style.top = "0px";
  textv.style.left = width * Math.random() + "px";

  //domを上から落とす
  for (var i=0; i < height; ++i) {
    textv.style.top = i + "px";
  }

  //domを消す
  document.body.removeChild(textv);
  return 0;
};
