

document.addEventListener("keydown",function(event)
{
    makeSound(event.key);
});

function makeSound(key)
{
    switch (key)
    {
        case "q":
            let auido1 = new Audio("./sounds/tom-1.mp3");
            auido1.play();
            break;
        case "w":
            let auido2 = new Audio("./sounds/tom-2.mp3");
            auido2.play();
            break;
        case "e":
            let audio3 = new Audio("./sounds/tom-3.mp3");
            audio3.play();
            break;
        case "r":
            let audio4 = new Audio("./sounds/tom-4.mp3");
            audio4.play();
            break;
        case "t":
            let audio5 = new Audio("./sounds/crash.mp3")                 
            audio5.play();
            break;
        case "y":
            let audio6 = new Audio("./sounds/kick-bass.mp3")                 
            audio6.play();
            break;
        case "u":
            let audio7 = new Audio("./sounds/snare.mp3")                 
            audio7.play();
            break;    
        default:
            console.log(key);
    }
}
