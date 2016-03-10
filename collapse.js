
function setInitialCollapseState() {
    /*
     * 
     * called by onload attribute of body tag in html
     * 
     */
    var controlNodeList = document.getElementsByClassName('collapseControl');
    var targetElem;
    var img;
    var txt;
    
    for(var i=0;i<controlNodeList.length;i++){
        targetElem = getTarget(controlNodeList[i]);
        
        img = controlNodeList[i].children[1];
        txt = controlNodeList[i].children[0];
        //testing
//        txt.innerHTML = "free yoga";
        //testing
        
        if (isDown(targetElem)) {
            txt.innerHTML = "Hide";
            img.src = "siteImg/arrowDown.png";
            targetElem.style.display = "block";
        } else {
            txt.innerHTML = "Show";
            img.src = "siteImg/arrowLeft.png";
            targetElem.style.display = "none";
        }
    }
}

function toggleCollapse(control) {  
    
    var img = control.children[1];
    var txt = control.children[0];

    var targetElem = getTarget(control);
        
    if (isDown(targetElem)) {
        txt.innerHTML = "Show";
        img.src = "siteImg/arrowLeft.png";
        targetElem.style.display = "none";
        targetElem.className = targetElem.getAttribute("class").replace("isDown", "isUp");
    } else {
        txt.innerHTML = "Hide";
        img.src = "siteImg/arrowDown.png";
        targetElem.style.display = "block";
        targetElem.className = targetElem.getAttribute("class").replace("isUp", "isDown");
    }
}

function isDown(targetElem) {
    var targetElemClasses = targetElem.getAttribute("class");
    
    /* 
     * 
     * currently default is up because if class attribute contains neither "isUp"
     * or "isDown" then this function returns false 
     * 
     */
    if(targetElemClasses.indexOf("isDown") > -1) {
        return true;
    } 
    else {
        return false;
    }
}

function getTarget(control) {
    /*
     * 
     * imgBtnIdString has the purpose of identifying the target. the following 
     * substring and concatenation statement convert the button's id into the 
     * id of the element it targets 
     * 
     */
    var controlIdString = control.getAttribute("id");
    var targetIdString = "t" + controlIdString.substring(9);
    var targetElem = document.getElementById(targetIdString); 
    
    return targetElem;
}

//function getImage(control) {
//    return control.children[1];
//}

//function getLabel(caller){
//    var imgBtnIdString = caller.getAttribute("id");
//    var collapseLabelIdString = "collapseLabel" + imgBtnIdString.substring(14);
//    var collapseLabel = document.getElementById(collapseLabelIdString); 
//    
//    return collapseLabel;
//}