import { datePick } from "./dom/date.js";
import {btnMaker} from './dom/btn.js'


let a1 = document.querySelector('#datePick')
let a2 = document.querySelector('#btnMaker')






a1.addEventListener('click',()=>{
    console.log(1)
    let a = datePick();
    let c = document.querySelector('.mid')
    console.log(a)
    console.log(c)

    c.appendChild(a)
})
a2.addEventListener('click',()=>{
    let a =btnMaker()
    let c = document.querySelector('.mid')
    c.appendChild(a)


})