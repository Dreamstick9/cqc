const displsay = document.getElementById('display');
function appendtodisplay(input){
    displsay.value += input;
}
function clearDisplay(){
    displsay.value = ""
}
function calculate(){
    try {
        displsay.value = eval(displsay.value)
    }
    catch(error){
        displsay.value = "Error"
    }
}
