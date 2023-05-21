export const createModel = (a)=>{

    let div = document.createElement('div')
    div.setAttribute('class','modalWrapper')
    div.addEventListener('click',()=>div.remove())

    let span = document.createElement('pre')
    span.setAttribute('class','modal')
    let str = JSON.stringify(a, null, 4);

    span.textContent = str

    div.appendChild(span)

    return div
}