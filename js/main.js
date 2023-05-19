import { dom } from "./dom";

let a1 = document.querySelector('#datePick')

a1.addEventListener('click',()=>{
    console.log(1)
    let a = dom.datePick();
    let c = document.querySelector('.mid')
    console.log(a)
    console.log(c)

    c.appendChild(a)
})