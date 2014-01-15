function post() {

  /* ブラウザのサイズを取得 */
  var height = document.documentElement.clientHeight;
  var width = document.documentElement.clientWidth;

  //テキストフィールドからテキストを取得
  var text = document.getElementById("form").value;

  //domの生成、配置
  var textv = document.createElement("div");
  document.body.appendChild(textv);
  textv.offsetTop = 0;
  textv.offsetWidth = width * Math.random();

  //domを上から落とす
  while(textv.offsetTop < height) textv.offsetTop++;

  //domを消す
  document.body.removeChild(textv);
};
