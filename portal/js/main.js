$( document ).ready(function() {
    
    var bgImgArray = ['img/bg_001.jpg','img/bg_002.jpg','img/bg_003.jpg','img/bg_004.jpg','img/bg_005.jpg','img/bg_006.jpg','img/bg_007.jpg','img/bg_008.jpg','img/bg_009.jpg','img/bg_010.jpg','img/bg_011.jpg','img/bg_012.jpg','img/bg_013.jpg'],
    selectBG = bgImgArray[Math.floor(Math.random() * bgImgArray.length)];
    $('body').css('background', 'url(' + selectBG + ')');
    $('body').css('background-position', 'center');
    $('body').css('background-repeat', 'no-repeat');
    $('body').css('background-size', 'cover');
});