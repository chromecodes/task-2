export const optionMaker = (i,b) => {

    let crt = i;
    let sad = b.querySelector(`#id-${crt}`)
    let bad = b.querySelector(`.id-${crt}`)


    let li = document.createElement("li");
    li.setAttribute("class", "optionCnt");
    li.setAttribute("data-index", `${i}`);


        let c1 = document.createElement("input");
        c1.setAttribute("id", `ids-${i}`);
        c1.setAttribute("type", "radio");
        c1.setAttribute("name", "radio");

        c1.addEventListener('click',()=>{
            if(c1.checked) bad.checked=true
            else bad.checked=false
        })

    li.appendChild(c1);

        let c2 = document.createElement("input");
        c2.setAttribute("type", "text");
        c2.value = `option ${i}`

        c2.addEventListener('input',(e)=>{
            sad.textContent = e.target.value
        })

    li.appendChild(c2);


        let c3 = document.createElement("input");
        c3.setAttribute("type", "text");
        c3.value = `option ${i}`

    li.appendChild(c3);


        let c4 = document.createElement("button");
        c4.setAttribute("type", "button");
        c4.textContent = 'X'

        c4.addEventListener('click',()=>{
            li.remove()
            bad.remove()
            sad.remove()
        })

    li.appendChild(c4);

    return li
}
