export function setlocal(key,val){
    localStorage.setItem(key,val)
}
export function getlocal(key, val) {
    return localStorage.getItem(key)
}
/***滑动限制***/
export function stop() {
  var mo = function (e) {
    e.preventDefault();
  };
  document.body.style.overflow = 'hidden';
  document.addEventListener("touchmove", mo, false); //禁止页面滑动
}
/***取消滑动限制***/
export function move() {
  var mo = function (e) {
    e.preventDefault();
  };
  document.body.style.overflow = ''; //出现滚动条
  document.removeEventListener("touchmove", mo, false);
}


   