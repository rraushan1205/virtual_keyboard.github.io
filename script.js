function checkchar(e){if("control"==e.toLowerCase())var o="ctrl";else if(" "==e.toLowerCase())var o="spacebar";else if(","==e.toLowerCase())var o="com";else if("."==e.toLowerCase())var o="dot";else if("/"==e.toLowerCase())var o="sl";else if(";"==e.toLowerCase())var o="sem";else if("'"==e.toLowerCase())var o="icom";else if("["==e.toLowerCase())var o="obr";else if("]"==e.toLowerCase())var o="ocr";else if("\\"==e.toLowerCase())var o="fsl";else if(isNaN(e))var o=e.toLowerCase();else var o="num"+e;return o}document.addEventListener("keydown",function(e){document.getElementById("key-disp").textContent=e.key,keys=checkchar(m=e.key),console.log(e.key);var o=document.querySelector("."+keys);o.style.backgroundColor="rgb(252, 84, 140)",o.style.boxShadow="0 0 0 0 rgba(70, 2, 2, 0.75)"}),document.addEventListener("keyup",function(e){document.getElementById("key-disp").textContent=e.key,keys=checkchar(m=e.key);var o=document.querySelector("."+keys);o.style.backgroundColor="pink",o.style.boxShadow="0px 2px 1px 2px rgba(70, 2, 2, 0.75)"});