export const numMaker = () => {
    let labelText = "Big Numbers";

    let div = document.createElement("div");
    div.setAttribute("class", "numMaker");
    div.setAttribute("type", "number");

    let topWrap = document.createElement("div");
    topWrap.setAttribute("class", "topWrap");

      let label = document.createElement("label");
      label.setAttribute("for", "num");
      label.textContent = labelText;

        let input = document.createElement("input");
        input.setAttribute("id", "number");
        input.setAttribute("type", "number");

      label.appendChild(input);

      topWrap.appendChild(label);

      let editDiv = document.createElement("div");
      editDiv.setAttribute("class", "editDiv");

        let closeBtn = document.createElement("button");
        closeBtn.setAttribute("class", "closeBtn");
        closeBtn.setAttribute("data-type", "closeBtn");
      editDiv.appendChild(closeBtn);

      closeBtn.addEventListener('click', ()=>{
        div.remove()
      })

        let editBtn = document.createElement("button");
        editBtn.setAttribute("class", "editBtn");
        editBtn.setAttribute("data-type", "editBtn");
      editDiv.appendChild(editBtn);

      editBtn.addEventListener('click', ()=> {
        editOption.classList.toggle('block')
      })

        let copyBtn = document.createElement("button");
        copyBtn.setAttribute("class", "copyBtn");
        copyBtn.setAttribute("data-type", "copyBtn");
      editDiv.appendChild(copyBtn);

      copyBtn.addEventListener('click',() => {
        div.insertAdjacentElement("afterend", numMaker());
    })

      topWrap.appendChild(editDiv);

      div.appendChild(topWrap);


      let editOption = document.createElement("div");
    editOption.setAttribute("class", "editMenu");

        let s1 = document.createElement("div");
        s1.textContent = "Required";
          let editReq = document.createElement("input");
          editReq.setAttribute("type", "checkbox");

        s1.appendChild(editReq);

    editOption.appendChild(s1);

        let s2 = document.createElement("div");
        s2.textContent = "Label";
            let editlabel = document.createElement("input");
            editlabel.setAttribute("type", "text");
            editlabel.value = labelText
        s2.appendChild(editlabel);

    editOption.appendChild(s2);

        let s3 = document.createElement("div");
        s3.textContent = "Help Text";
            let editText = document.createElement("input");
            editText.setAttribute("type", "text");
        s3.appendChild(editText);

    editOption.appendChild(s3);

        let s4 = document.createElement("div");
        s4.textContent = "Class";
            let editClass = document.createElement("input");
            editClass.setAttribute("type", "text");
        s4.appendChild(editClass);

    editOption.appendChild(s4);

        let s5 = document.createElement("div");
        s5.textContent = "Value";
            let editvalue = document.createElement("input");
            editvalue.setAttribute("type", "text");
        s5.appendChild(editvalue);

    editOption.appendChild(s5);

      let s6 = document.createElement("div");
        s6.textContent = "Min";
            let editMin = document.createElement("input");
            editMin.setAttribute("type", "number");
        s6.appendChild(editMin);

    editOption.appendChild(s6);

        let s7 = document.createElement("div");
        s7.textContent = "Min";
            let editMax = document.createElement("input");
            editMax.setAttribute("type", "number");
        s7.appendChild(editMax);

    editOption.appendChild(s7);

        let s8 = document.createElement("div");
        s8.textContent = "Step";
            let editStep = document.createElement("input");
            editStep.setAttribute("type", "number");
        s8.appendChild(editStep);

    editOption.appendChild(s8);


    div.appendChild(editOption);

    return div
  };
