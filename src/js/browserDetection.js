;(function(){
    const isIE11 = navigator.userAgent.match("Trident") && navigator.userAgent.match("rv:11")
    if(isIE11){
        document.documentElement.classList.add("ie11")
    }
})()