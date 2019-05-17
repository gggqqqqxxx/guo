/**
 * Created by Administrator on 2018/12/27.
 */
function refreshRem() {
    var desW=750;
    winW=document.documentElement.clientWidth;
    ratio=winW/desW;
    document.documentElement.style.fontSize=ratio*100+'px';
}
refreshRem();
window.addEventListener('resize',refreshRem);