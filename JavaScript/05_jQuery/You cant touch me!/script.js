const h1 = $("h1")[0];
h1.addEventListener("click",changeIt);
const body = $("body")[0];
let number = 1;
function changeIt()
{
    
    switch(number)
    {
        case(1):
            body.classList.remove();
            body.className=" ";
            body.classList.add("top-left")
            h1.textContent="Really?" 
            number++;
            break;
        case(2):
            body.classList.remove();
            body.className=" ";
            body.classList.add("top-right");
            h1.textContent="Are you sure about this?";
            number++;
            break;   
        case(3):
            body.classList.remove();
            body.className=" ";
            body.classList.add("top-left");
            h1.textContent="You are so annoying!"; 
            number++;
            break;
        case(4):
            body.classList.remove();
            body.className=" ";
            body.classList.add("under-right");
            h1.textContent="Please, leave me alone!!" 
            number++;
            break;
        case(5):
            body.classList.remove();
            body.className=" ";
            body.classList.add("under-left")
            h1.textContent="If you click me one more i will quit"; 
            number++;
            break;    
        default:
            body.classList.remove();
            body.className=" ";
            body.classList.add("center")
            h1.f
            h1.textContent="Okey, you win!"                    
            break;
    }
}