
const display = document.getElementById("display");

function toDisplay(ui){
    display.value += ui;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}