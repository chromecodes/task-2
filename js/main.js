import { datePick } from "./dom/date.js";
import {btnMaker} from './dom/btn.js'
import { checkMaker } from "./dom/check.js";


let a1 = document.querySelector('#datePick')
let a2 = document.querySelector('#btnMaker')
let a3 = document.querySelector('#checkMaker')






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
a3.addEventListener('click',()=>{
    let a =checkMaker()
    let c = document.querySelector('.mid')
    c.appendChild(a)
})