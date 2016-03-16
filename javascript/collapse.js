/*
* Author: Tim Storck
*/

/*
*
* target element has to contain class value "isDown" or "isUp"
*
document.getElementById("someButton").onclick = function() {
alert("Hello");
};
*/

window.onload = function () {
  setInitialCollapseState ();

};

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
  console.log (controlNodeList);
  for(var i=0;i<controlNodeList.length;i++){
    targetElem = getTarget(controlNodeList[i]);
    console.log (targetElem);

    controlNodeList[i].onclick = function (objectSrc){
      console.log ("got click");

      toggleCollapse (objectSrc.target);
    }

    /*
    function (){
    console.log
    toggleCollapse()
  }; //not sure if I should use this in this case
  */

  img = controlNodeList[i].children[1];
  txt = controlNodeList[i].children[0];

  if (isDown(targetElem)) {
    txt.innerHTML = "Hide";
    img.src = "img/arrowDown.png";
    targetElem.style.display = "block";
  } else {
    txt.innerHTML = "Show";
    img.src = "img/arrowLeft.png";
    targetElem.style.display = "none";
  }
}
}

function toggleCollapse(control) {
  console.log ("toggleCollapse");
  console.log (control);
  //console.log (control.parentElement);

  var img = control.parentElement.children[1];
  var txt = control.parentElement.children[0];

  var targetElem = getTarget(control);
  console.log (targetElem.className);



  if (isDown(targetElem)) {
    txt.innerHTML = "Show";
    img.src = "img/arrowLeft.png";
    targetElem.style.display = "none";
    targetElem.className = targetElem.getAttribute("class").replace("isDown", "isUp");
  } else {
    txt.innerHTML = "Hide";
    img.src = "img/arrowDown.png";
    targetElem.style.display = "block";
    targetElem.className = targetElem.getAttribute("class").replace("isUp", "isDown");
  }


}

function isDown(targetElem) {
  console.log ("isDown?");
  console.log (targetElem);
  var targetElemClasses = targetElem.getAttribute("class");

  if(targetElemClasses.indexOf("isDown") > -1) {
    return true;
  } else {
    return false;
  }
}

function getTarget(control) {
  console.log ("getTarget");
  //console.log (control);
  console.log (control.parentElement.parentElement);
  return control.parentElement.parentElement.getElementsByClassName ("controlsTarget")[0];

  /*
  *
  * controlIdString has the purpose of identifying the target. the following
  * substring and concatenation statement convert the button's id into the
  * id of the element it targets
  *
  */
  var controlIdString = control.getAttribute("id");
  var targetIdString = "t" + controlIdString.substring(9);
  var targetElem = document.getElementById(targetIdString);

  return targetElem;
}
