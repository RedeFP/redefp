$(function(){
    var md = new MobileDetect(window.navigator.userAgent);
    if(md.mobile() != null) {
        $("button").first().remove();
        $(".btnicon").css("padding-right","10%")
    }
})
