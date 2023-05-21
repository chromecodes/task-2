export const optionMaker = (i,b) => {

    let crt = i;
    let sad = b.querySelector(`#id-${crt}`)


    let li = document.createElement("li");
    li.setAttribute("class", "optionCnt");
    li.setAttribute("data-index", `${i}`);


        let c2 = document.createElement("input");
        c2.setAttribute("type", "text");
        c2.value = `option ${i}`

        c2.addEventListener('input',(e)=>{
            sad.setAttribute('value', `${e.target.value}`)  
        })

    li.appendChild(c2);


        let c4 = document.createElement("button");
        c4.setAttribute("type", "button");
        c4.textContent = 'X'

        c4.addEventListener('click',()=>{
            li.remove()
            sad.remove()
        })

    li.appendChild(c4);

    return li
}
