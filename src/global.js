window.onload = function() {
  getRem(320, 100);
}; /*640代表设计师给的设计稿的宽度*/
window.onresize = function() {
  getRem(320, 100);
};
function getRem(pwidth, prem) {
  var html = document.getElementsByTagName('html')[0];
  var oWidth =
    document.body.clientWidth || document.documentElement.clientWidth;
  html.style.fontSize = (oWidth / pwidth) * prem + 'px';
}


 
