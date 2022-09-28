const p = document.querySelector(".input");
let count = 0;
p.innerText = count;

const start = document.querySelector('.start');
const stopbtn = document.querySelector('.stop');
const reset = document.querySelector('.reset');

start.addEventListener("click", () => {
    if (count < 100) {
        interval = setInterval(() => {

            count++;
            p.innerHTML = count;
        }, 100);

    }
})

stopbtn.addEventListener("click", () => {
    clearInterval(interval);
})

reset.addEventListener("click", () => {
    count = 0;
    p.innerText = count;
})