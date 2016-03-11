/*
 * Author: Tim Storck
 */

var iterator = 0;

var imgArr = new Array(new Image(), new Image(), new Image());
imgArr[0].src="img/dog1.jpg";
imgArr[1].src='img/dog2.jpg';
imgArr[2].src='img/dog3.jpg';


function shutter() {
    var upper = document.getElementById('upperLid');
    var lower = document.getElementById('lowerLid');
    upper.style.borderBottom = "1px black solid";
    lower.style.borderTop = "1px black solid";
    var pos = -240;
    var id = setInterval(frame, 3);
    function frame() {
        if (pos == 240) {
            upper.style.height = '0px'; 
            lower.style.height = '0px'; 
            upper.style.borderBottom = "0px black solid";
            lower.style.borderTop = "0px black solid";
            clearInterval(id);
        } else {
            pos += 10;
            height = 240 - Math.abs(pos);
            if (height==240){
                changeImage();
            }
            upper.style.height = height + 'px'; 
            lower.style.height = height + 'px'; 
            lower.style.top = 2 * Math.abs(pos) + 5 + 'px';
        }
    }
}

//called by onload attribute of body tag in html to initialize image. also called by shutter() function
function changeImage() {
    document.getElementById('header').style.backgroundImage = "url('" + imgArr[iterator].src + "')";
    if (iterator == imgArr.length -1){
        iterator = 0;
    } else {
        iterator++;
    }
}