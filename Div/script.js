/*var num = 13;
var str="Hello WORLD!";
var sum = num + str;
alert(sum);*/

/*var title = document.getElementsByTagName("h1");
var title = document.getElementsByTagName("h2");
console.log(h2[0].innerText);
for( var i=0; i<h2.lenght; i++)
    {console.log(h2[i].innerText);}*/
  
// console.log(myArray.length);

/*function aggiorna(classname){

    var myArray = document.getElementsByClassName (classname);

    var posx = Math.floor(Math.random()*500);
    var posy= Math.floor(Math.random()*201);
    var rot = Math.floor(Math.random()*91);

    myArray[0].style.trasform= "rotate(" + rot + "deg)";
    myArray[0].style.left = posx + "px";
    myArray[0].style.top = posy + "px";
}

function aggiornatutto(){
    aggiorna("a");
    aggiorna("b");
    aggiorna("c");
    aggiorna("d");
    aggiorna("e");
}

aggiorna();*/
var arrayDiv = document.getElementsByTagName("div");
function aggiorna(){
for (var i=0; i<arrayDiv.length;i++){
    
    var posx=Math.floor(Math.random()*500);// genera uno spostamento da sx
    var posy=Math.floor(Math.random()*260);//genera uno spostamento dall'alto
    var rot=Math.floor(Math.random()*720)-360;// genera un grado di rotazione
    arrayDiv[i].style.left= posx +"px";//assegna ad un div da .css specificando l'unità di misura dello spostamento o della rotazione
    arrayDiv[i].style.top= posy +"px";
    arrayDiv[i].style.trasform = "rotate ("+ rot,"deg)";

}}