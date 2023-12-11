let space = document.querySelector(".spc-1");
let buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = function() {
        if (item.id == 'clear') {
            space.innerText = '';
        } 
        else if (space.innerText != '' && item.id == 'esit') {
            space.innerText = eval(space.innerText);
        } else if (space.innerText == '' && item.id == 'esit') {
            space.innerText = 'Empty!';
            setTimeout(() => (space.innerText = ''), 2000);
        } else {
            space.innerText += item.textContent;
        }
    }
})


