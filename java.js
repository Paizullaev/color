let body = document.querySelector(".body");
let h1 = document.querySelector("#h1");
let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let teg = "#"
    let letter = "0123456789abcdef"
    let letterTwo = Math.round(Math.random() * 10)
    if (letterTwo == 4) {
        for (let i = 0; i < 4; i++) {
            teg += letter[Math.round(Math.random() * 10)]
            h1.innerText = teg
            body.style.backgroundColor = teg
        }
    } else {
        for (let i = 0; i < 6; i++) {
            teg += letter[Math.round(Math.random() * 10)]
            h1.innerText = teg
            body.style.backgroundColor = teg
        }
    }
})