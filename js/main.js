import { datePick } from "./dom/date.js";
import { btnMaker} from './dom/btn.js'
import { checkMaker } from "./dom/check.js";
import { autoMaker } from "./dom/auto.js";
import { fileUp } from "./dom/file.js";
import { headerMaker } from "./dom/header.js";
import { hiddenMaker } from "./dom/hidden.js";
import { numMaker } from "./dom/num.js";
import { paraMaker } from "./dom/para.js";
import { optionMaker } from "./dom/options.js";
import { radioMaker } from "./dom/radio.js";
import { selectMaker } from "./dom/select.js";
import { textMaker } from "./dom/text.js";
import { areaMaker } from "./dom/area.js";
import { createModel } from "./listener.js";


let d1 = document.querySelector('#autoMaker')
let d2 = document.querySelector('#btnMaker')
let d3 = document.querySelector('#checkMaker')

let d4 = document.querySelector('#datePick')
let d5 = document.querySelector('#fileUp')
let d6 = document.querySelector('#headerMaker')
let d7 = document.querySelector('#hiddenMaker')

let d8 = document.querySelector('#numMaker')
let d9 = document.querySelector('#paraMaker')
let d10 = document.querySelector('#radioMaker')
let d11= document.querySelector('#selectMaker')
let d12 = document.querySelector('#textMaker')
let d13 = document.querySelector('#areaMaker')

let mid = document.querySelector('.mid')

let clear = document.querySelector('.clear')
let json = document.querySelector('.json')
let save = document.querySelector('.save')

clear.addEventListener('click',()=>{
    let arrs = [...mid.childNodes]
    arrs.forEach( (arr)=>mid.removeChild(arr))
})

json.addEventListener('click',()=>{
    let arr1 = mid.querySelectorAll("[access]")
    console.log(arr1);
    let Json = [] 
    arr1.forEach((arr)=>{
        console.log(arr.attributes);
        let t2 = arr.attributes
        let obj = {}
        for(let i=0 ;i<t2.length;i++) {
            obj[t2[i].name] = t2[i].value
        }
        Json.push(obj)
    })
    console.log(Json);
    let body = document.querySelector('body')
    body.appendChild(createModel(Json))
})

save.addEventListener('click',()=>{})

d1.addEventListener('dragend',()=>mid.appendChild(autoMaker()) )
d2.addEventListener('dragend',()=>mid.appendChild(btnMaker()))
d3.addEventListener('dragend',()=>mid.appendChild(checkMaker()))
d4.addEventListener('dragend',()=>mid.appendChild(datePick()) )
d5.addEventListener('dragend',()=>mid.appendChild(fileUp() ))
d6.addEventListener('dragend',()=>mid.appendChild(headerMaker()))
d7.addEventListener('dragend',()=>mid.appendChild(hiddenMaker()) )
d8.addEventListener('dragend',()=>mid.appendChild(numMaker()))
d9.addEventListener('dragend',()=>mid.appendChild(paraMaker()))
d10.addEventListener('dragend',()=>mid.appendChild(radioMaker()) )
d11.addEventListener('dragend',()=>mid.appendChild(selectMaker()))
d12.addEventListener('dragend',()=>mid.appendChild(textMaker()))
d13.addEventListener('dragend',()=>mid.appendChild(areaMaker()) )

d1.addEventListener('click',()=>mid.appendChild(autoMaker()) )
d2.addEventListener('click',()=>mid.appendChild(btnMaker()))
d3.addEventListener('click',()=>mid.appendChild(checkMaker()))
d4.addEventListener('click',()=>mid.appendChild(datePick()) )
d5.addEventListener('click',()=>mid.appendChild(fileUp() ))
d6.addEventListener('click',()=>mid.appendChild(headerMaker()))
d7.addEventListener('click',()=>mid.appendChild(hiddenMaker()) )
d8.addEventListener('click',()=>mid.appendChild(numMaker()))
d9.addEventListener('click',()=>mid.appendChild(paraMaker()))
d10.addEventListener('click',()=>mid.appendChild(radioMaker()) )
d11.addEventListener('click',()=>mid.appendChild(selectMaker()))
d12.addEventListener('click',()=>mid.appendChild(textMaker()))
d13.addEventListener('click',()=>mid.appendChild(areaMaker()) )