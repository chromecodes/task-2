export const optionMaker = () => {

    let li = document.createElement("li");
    li.setAttribute("class", "optionCnt");

        let c1 = document.createElement("input");
        c1.setAttribute("id", "checkbox");
        c1.setAttribute("type", "checkbox");

    li.appendChild(c1);

        let c2 = document.createElement("input");
        c2.setAttribute("type", "text");
        c2.value = 'option'

    li.appendChild(c2);


        let c3 = document.createElement("input");
        c3.setAttribute("type", "text");
        c3.value = 'option'

    li.appendChild(c3);


        let c4 = document.createElement("button");
        c4.setAttribute("type", "button");
        c4.textContent = 'X'

        c4.addEventListener('click',()=>li.remove())

    li.appendChild(c4);

    return li
}
