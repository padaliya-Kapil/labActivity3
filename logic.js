
function selected(element){
    console.log(element.value)
    switch (element.value) {
        case "Random":
            changeColor();
            break;
        case "Blue":
            changeColor("btn-primary")
            break;
        case "Green":
            changeColor("btn-success")
            break;
        case "Red":
            changeColor("btn-danger")
            break;
        case "Yellow":
            changeColor("btn-warning")
                break;
    
        default:
            console.log("This should never come!");
            break;
    }
}

function changeColor(bootStrapClass = ""){
    let buttons = document.getElementsByTagName("button");
    for( var i = 0 ; i < buttons.length ; i++){
        buttons[i].classList.remove(...buttons[i].classList);
        if(bootStrapClass.length===0){
            var randomclasses  = ["btn-primary","btn-success","btn-danger","btn-warning","btn-secondary"];
            var computerchoice = Math.floor(Math.random() * Math.floor(randomclasses.length));
            console.log(computerchoice);
            buttons[i].classList.add("btn",randomclasses[computerchoice]); 
        }else{
            buttons[i].classList.add("btn",bootStrapClass); 
        }
    }
}

document.getElementById("hover").onmouseover = function() 
{
    this.classList.remove(...this.classList);
    this.classList.add("btn","btn-secondary");
    alert("Button will change to grey");
}

document.getElementById("alert").onclick = function() 
{
    alert("Hello! Click okay if you're awesome:)");
}

document.getElementById("prompt").onclick = function() 
{
    var person = prompt("Please enter your name");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
}
}