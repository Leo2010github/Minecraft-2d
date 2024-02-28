var Canvas = new fabric.Canvas("canvas");
var PSteveX = 280;
var PSteveY = 160;
var BloquesA = 30;
var BloquesAl = 30;
var Steve = "";
var Bloques = "";
function CSteve(){
    fabric.Image.fromURL("SteveM.png", function(Img){
        Steve = Img;
        Steve.scaleToWidth(80);
        Steve.scaleToHeight(120);
        Steve.set({top: PSteveY, left: PSteveX});
        Canvas.add(Steve);
    })
}
function ImgDeBloques(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        Bloques = Img;
        Bloques.scaleToWidth(BloquesA);
        Bloques.scaleToHeight(BloquesAl);
        Bloques.set({top: PSteveY, left: PSteveX})
        Canvas.add(Bloques);
    })
}
window.addEventListener("keydown", Teclas);
function Teclas(e){
    Botones = e.keyCode;
    console.log(Botones);
    //49uno 50dos
    if (Botones == "37"){
        Izquierda();
    }
    if (Botones == "38"){
        Arriba();
    }
    if (Botones == "39"){
        Derecha();
    }
    if (Botones == "40"){
        Abajo();
    }
    if (Botones == "68"){
        ImgDeBloques("DiamanteM.png");
    }
    if (Botones == "72"){
        ImgDeBloques("HojasM.png");
    }
    if (Botones == "66"){
        ImgDeBloques("Ladrillos.jpeg");
    }
    if (Botones == "76"){
        ImgDeBloques("LibreroM.jpg");
    }
    if (Botones == "77"){
        ImgDeBloques("MaderaM.png");
    }   
    if (Botones == "79"){
        ImgDeBloques("ObsidianaM.png");
    }
    if (Botones == "67"){
        ImgDeBloques("PastoM.jpg");
    }
    if (Botones == "80"){
        ImgDeBloques("PiedraM.jpg");
    }
    if (Botones == "84"){
        ImgDeBloques("TroncoM.jpg");
    }
    if (Botones == "81"){
        ImgDeBloques("BlancoM.jpg")
    }
    if (e.shiftKey == true && Botones == "49"){
        BPequeños();
    }
    if (e.shiftKey == true && Botones == "50"){
        BGrandes();
    }
}
function Izquierda(){
    if (PSteveX >= 0){
        PSteveX = PSteveX - BloquesA;
        Canvas.remove(Steve);
        CSteve();
    }
}
function Arriba(){
    if (PSteveY >= 0){
        PSteveY = PSteveY - BloquesAl;
        Canvas.remove(Steve);
        CSteve();
    }
}
function Derecha(){
    if (PSteveX <= 520){
        PSteveX = PSteveX + BloquesA;
        Canvas.remove(Steve);
        CSteve();
    }
}
function Abajo(){
    if (PSteveY <= 280){
        PSteveY = PSteveY + BloquesA;
        Canvas.remove(Steve);
        CSteve();
    }
}
function BGrandes(){
    if (BloquesA < 80){
        BloquesA = BloquesA + 10;
        BloquesAl = BloquesAl + 10;
        document.getElementById("AnchoB").innerHTML = BloquesA;
        document.getElementById("AltoB").innerHTML = BloquesAl;
        }
}
function BPequeños(){
    if (BloquesA > 10){
        BloquesA = BloquesA - 10;
        BloquesAl = BloquesAl - 10;
        document.getElementById("AnchoB").innerHTML = BloquesA;
        document.getElementById("AltoB").innerHTML = BloquesAl;
        }
}