var getBtn = document.getElementById('menu');
var getNav = document.getElementById('navslide');
var getIcon = document.getElementsByClassName('fas');

navslide.style.right = "-200px";

getBtn.onclick = function(){
    if(navslide.style.right == "-200px"){
        navslide.style.right = "0"; 
        
    }

    else{
        navslide.style.right = "-200px";
    }
}