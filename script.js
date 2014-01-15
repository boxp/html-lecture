var post = function() {

  //ブラウザのサイズを取得
  let height = document.documentElement.clientHeight;
  let width = document.documentElement.clientWidth;

  //テキストフィールドからテキストを取得
  let text = document.js.textf.value;

  //domの生成、配置
  let textv = document.createElement("div");
  document.body.appendChild(textv);
  textv.offsetTop = 0;
  textv.offsetWidth = width * Math.random();

  //domを上から落とす
  while(textv.offsetTop < height) textv.offsetTop++;

  //domを消す
  document.body.removeChild(textv);
};
