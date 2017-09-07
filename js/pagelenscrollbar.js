/*!
 * PageLenScrollBar v0.0.1-beta (https://github.com/Gabrock94/pagelenscrollbar)
 * Copyright 2017 Giulio Gabrieli (https://github.com/Gabrock94)
 * Licensed under MIT
 */


function init_pagelenbar(bar_color, bar_background, bar_heigth) {
    var x = document.getElementsByTagName("BODY")[0]; 
    var colorbar = '<div id="pagelenbar" style="position:fixed; width: 100%; min-height:'+bar_heigth+'px; background: '+bar_background+'; border-left:0px solid '+bar_color+';box-sizing: border-box;"></div>';
    x.innerHTML = colorbar + x.innerHTML;
    
    window.onscroll = function() {
        var st = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        document.getElementById("pagelenbar").style.borderLeft = ((st * document.body.scrollWidth) / (document.body.scrollHeight  - window.innerHeight))+"px solid "+bar_color;
    };
}


