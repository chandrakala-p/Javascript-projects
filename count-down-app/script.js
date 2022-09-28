input = Number(prompt("Start position to count (write the Numbers)"));

// console.log(typeof input)

const pvalue = document.querySelector(".value");
pvalue.innerText = input;


interval = setInterval(() => {
    if (input > 0) {
        input--;
        pvalue.innerText = input;
    }
    if (input === 0) {
        clearInterval(interval);
    }

}, 300);
