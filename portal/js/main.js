$( document ).ready(function() {
    
    var bgImgArray = ['img/bg_001.jpg','img/bg_002.jpg','img/bg_003.jpg','img/bg_004.jpg'],
    selectBG = bgImgArray[Math.floor(Math.random() * bgImgArray.length)];
    $('body').css('background', 'url(' + selectBG + ')');
    $('body').css('background-position', 'center');
    $('body').css('background-repeat', 'no-repeat');
    $('body').css('background-size', 'cover');
});