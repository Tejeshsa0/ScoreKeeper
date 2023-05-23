const select = document.querySelector('select');
const sp1 = document.querySelector('#sp1');
const sp2 = document.querySelector('#sp2');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const reset = document.querySelector('.reset');



player1.addEventListener('click', (e) => {
    if (parseInt(sp1.innerText) < parseInt(select.value) && parseInt(sp2.innerText) < parseInt(select.value)) {
        let points = parseInt(sp1.innerText);
        points++;
        sp1.innerText = `${points}`;
    }
    if (sp1.innerText === select.value) {
        sp1.style.color = "green";
        sp2.style.color = "red";
    }
});

player2.addEventListener('click', (e) => {
    if (parseInt(sp1.innerText) < parseInt(select.value) && parseInt(sp2.innerText) < parseInt(select.value)) {
        let point = parseInt(sp2.innerText);
        point++;
        sp2.innerText = `${point}`;
    }
    if (sp2.innerText === select.value) {
        sp2.style.color = "green";
        sp1.style.color = "red";
    }
});
reset.addEventListener('click', (e) => {
    sp1.innerText = "0";
    sp2.innerText = "0";
    select.selectedIndex = 0;
    sp1.style.color = "black";
    sp2.style.color = "black";
});


