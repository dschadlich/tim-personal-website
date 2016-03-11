/*
 * Author: Tim Storck
 */

var iterator = 0;

var imgArr = new Array(new Image(), new Image(), new Image());
imgArr[0].src="img/dog1.jpg";
imgArr[1].src='img/dog2.jpg';
imgArr[2].src='img/dog3.jpg';

function shutter() {
    if(document.getElementById('header').offsetWidth > 640) {
        var upper = document.getElementById('upperLid');
        var lower = document.getElementById('lowerLid');
        upper.style.borderBottom = "1px black solid";
        lower.style.borderTop = "1px black solid";
        var incrementer = -240;
    //    var incrementerEndValue = incrementer * -1;
        var id = setInterval(frame, 3);
        function frame() {
            if (incrementer == 240) {
                upper.style.height = '0px'; 
                lower.style.height = '0px'; 
                upper.style.borderBottom = "0px black solid";
                lower.style.borderTop = "0px black solid";
                clearInterval(id);
            } else {
                incrementer += 10;
                height = 240 - Math.abs(incrementer);
                if (height==240){
                    changeImage();
                }
                upper.style.height = height + 'px'; 
                lower.style.height = height + 'px'; 
                lower.style.top = 2 * Math.abs(incrementer) + 5 + 'px';
            }
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

//not implemented yet [responsive]
function getIncrementerStartValue() {
    
    var testSpan = document.getElementById("testSpan");
    var elem = document.getElementById("header");
    
    return (Math.floor((elem.offsetHeight-2) / 20)) * -10;
}


//for testing
function testGetWidthAndHeight() {
    var testSpan = document.getElementById("testSpan");
    var elem = document.getElementById("header");
    
    testSpan.innerHTML = (elem.offsetWidth - 2) + ", " + (elem.offsetHeight - 2);
}

//for testing
function testGetIncrementerTimesNegativeOne() {
    var incrementer = getIncrementerStartValue();
    var timesNegative = incrementer * -1;
    
    testSpan.innerHTML = timesNegative;
}