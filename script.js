function changep(){
    document.getElementById("para").innerHTML = "Changed"
}

function changehead(){
    document.getElementById("heading").innerHTML = "Hello, Welcome"
}

let c = 0;
function counter(){
    c++;
    document.getElementById("inc").innerHTML = c.toString();
}

function changecol(){
    document.getElementById("box").style.backgroundColor = "aqua";
}

let currsize = 20;
function incfont(){
    document.getElementById("increasefont").style.fontSize = currsize.toString() + "px";
    currsize += 5;
}

let cv = 1;
function showhide(){
    if(cv === 1){
        document.getElementById("vis").style.visibility = "hidden";
        cv=2;
    }
    else{
        document.getElementById("vis").style.visibility = "visible";
        cv=1;

    }
}

let cbr = 0.5;
function incbr(){
    document.getElementById("img").style.borderRadius = cbr.toString() + "px";
    cbr += 1;
}

let ci = 1;
function changeimg(){
    if(ci===1){
        ci = 2;
        document.getElementById("twoimg").src = "download.jfif";
    }
    else {
        ci = 1;
        document.getElementById("twoimg").src = "background.jpg";
    }
}

const myInterval = setInterval(slideshowimg, 3000);
let currentimg = 2;
function slideshowimg(){
    if(currentimg==4){
        currentimg=1;
    }
    document.getElementById("slideshow").src = "img"+currentimg.toString()+".jpg";
    currentimg++;
}