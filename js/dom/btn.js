export const btnMaker = () => {
    let labelText = "Button";

    let div = document.createElement("div");
    div.setAttribute("class", "btnPicker");
    div.setAttribute("type", "btn");

    let topWrap = document.createElement("div");
    topWrap.setAttribute("class", "topWrap");

      let label = document.createElement("button");
      label.setAttribute("type", "button");
      label.setAttribute("label", "Button");
      label.setAttribute("name", "button-123");
      label.setAttribute("class", "btn");
      label.setAttribute("access", "false");

      
      label.textContent = labelText;

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
          div.insertAdjacentElement("afterend", btnMaker());
      })

      topWrap.appendChild(editDiv);

    div.appendChild(topWrap);


      let editOption = document.createElement("div");
      editOption.setAttribute("class", "editMenu");

        let s1 = document.createElement("div");
        s1.textContent = "Label";
          let editlabel = document.createElement("input");
          editlabel.setAttribute("type", "text");
          editlabel.value = labelText

        s1.appendChild(editlabel);

        editlabel.addEventListener('input',(e)=>{
          label.textContent = e.target.value
          label.setAttribute("label", `${e.target.value}`);
        })

      editOption.appendChild(s1);

        let s2 = document.createElement("div");
        s2.textContent = "Type";
          
          const editType = document.createElement("select");
            editType.setAttribute("id", "priority-update");

            const editTypeOption1 = document.createElement("option");
            editTypeOption1.setAttribute("value", "button");
            editTypeOption1.textContent = "Button";
            

            editType.appendChild(editTypeOption1);

            const editTypeOption2 = document.createElement("option");
            editTypeOption2.setAttribute("value", "submit");
            editTypeOption2.textContent = "submit";
            

            editType.appendChild(editTypeOption2);

            const editTypeOption3 = document.createElement("option");
            editTypeOption3.setAttribute("value", "reset");
            editTypeOption3.textContent = "reset";
            

            editType.appendChild(editTypeOption3);

        s2.appendChild(editType);

        editType.addEventListener('change',(e)=>{
          label.setAttribute('type',`${e.target.value}`)
        })

      editOption.appendChild(s2);

        let s4 = document.createElement("div");
        s4.textContent = "Name";
          let editName = document.createElement("input");
          editName.setAttribute("type", "text");
          editName.value = 'button-123'
        s4.appendChild(editName);

        editName.addEventListener('input', (e)=>{
          label.setAttribute('name',`${e.target.value}`)
        })

      editOption.appendChild(s4);

        let s3 = document.createElement("div");
        s3.textContent = "Class";
          let editClass = document.createElement("input");
          editClass.setAttribute("type", "text");
        s3.appendChild(editClass);

      editOption.appendChild(s4);

        let s5 = document.createElement("div");
        s5.textContent = "Value";
          let editvalue = document.createElement("input");
          editvalue.setAttribute("type", "text");
        s5.appendChild(editvalue);

        editvalue.addEventListener('input', (e)=>{
          label.setAttribute('value',`${e.target.value}`)
        })

      editOption.appendChild(s5);

      let s6 = document.createElement("div");
        s6.textContent = "Access";
          let editAccess = document.createElement("input");
          editAccess.setAttribute("type", "checkbox");

          editAccess.addEventListener('click',()=>{
            console.log(editAccess.checked)
            label.setAttribute('access',`${editAccess.checked}`)

          })

        s6.appendChild(editAccess);
      editOption.appendChild(s6);

    div.appendChild(editOption);

    return div
  };
