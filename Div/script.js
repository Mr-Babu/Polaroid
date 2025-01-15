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
    arrayDiv[i].style.trasform = "rotate("+rot+"deg)";

}
}
async function fetchimmaginiJSON() {
    const response = await fetch('file.json');
    const polaroid = await response.json();
    console.log (polaroid);

    console.log(polaroid.immagini.length);
    for (var i=0; i< polaroid.immagini.length;i++){
        console.log(polaroid.immagini[i].didascalia);
        const div =document.createElement("div");
        div.innerHTML = polaroid.immagini[i].didascalia;
        div.classList.add("polaroid");
        document.getElementById("album").appendChild(div);
        
        const img =document.createElement("img");
        img.src = polaroid.immagini[i].url;
        div.appendChild(img);
        const p = document.createElement("p");
        p.innerHTML= polaroid.immagini[i].didascalia;
        p.classList.add("didascalia");
        div.appendChild(p);
    }
    aggiorna();
}
fetchimmaginiJSON();