function init_pagelenbar(bar_color, bar_background, bar_heigth) {
    var x = document.getElementsByTagName("BODY")[0]; 
    var colorbar = '<div id="pagelenbar" style="position:fixed; width: 100%; min-height:'+bar_heigth+'px; background: '+bar_background+'; border-left:0px solid '+bar_color+';box-sizing: border-box;"></div><br>';
    x.innerHTML = colorbar + x.innerHTML;
    
    window.onscroll = function() {
        document.getElementById("pagelenbar").style.borderLeft = ((document.body.scrollTop * document.body.scrollWidth) / (document.body.scrollHeight  - window.innerHeight))+"px solid "+bar_color;
    };
}


