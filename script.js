"use strict";
function post(){

  //dom作成
  var textv = document.createElement("div");
  document.body.appendChild(textv);
  textv.removeAttribute("style");
  textv.style.position = "fixed";
  textv.style.transition = "all 2s";
  textv.style.top = "0px";
  textv.style.fontSize = "6em";

  /* ブラウザのサイズを取得 */
  var height = document.documentElement.clientHeight;
  var width = document.documentElement.clientWidth;

  //テキストフィールドからテキストを取得
  //var text = document.getElementById("input-form").value;
  var text = document.getElementsByName("input-form")[0].value;

  //domの生成、配置
  textv.textContent = text;
  textv.style.left = width * Math.random() + "px";

  //domを上から落とす
  textv.style.top = height + 200 + "px";

  //domを消す
  setTimeout(function(){document.body.removeChild(textv);},2000)
  return 0;
};
