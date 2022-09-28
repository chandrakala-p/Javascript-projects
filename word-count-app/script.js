const content = document.querySelector(".value");


const inputval = document.querySelector('.input-val');
// console.log(input);

inputval.addEventListener("input", (e) => {
    content.innerText = e.target.value.length
})
