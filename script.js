let numEl = document.getElementById("num-el");
let numGuest = document.getElementById("num-guest");
let count = 0;

function addOneHome(){
    count += 1;
    numEl.textContent = count;
}
function addTwoHome(){
    count += 2;
    numEl.textContent = count;
}
function addTreeHome(){
    count += 3;
    numEl.textContent = count;
}
function addOneGuest(){
    count += 1;
    numGuest.textContent = count;
}
function addTwoGuest(){
    count +=2
    numGuest.textContent = count;
}
function addtreeGuest(){
    count +=3
    numGuest.textContent = count;
}