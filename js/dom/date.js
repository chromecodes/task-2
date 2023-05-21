export const datePick = () => {
    let labelText = "Date Field";

    let div = document.createElement("div");
    div.setAttribute("class", "datePicker");
    div.setAttribute("type", "date");

    let topWrap = document.createElement("div");
    topWrap.setAttribute("class", "topWrap");

      let inWrap = document.createElement("div");
      inWrap.setAttribute("class", "inWrap");

        let label = document.createElement("label");
        label.setAttribute("for", "date");
        label.textContent = labelText;

      inWrap.appendChild(label);

          let input = document.createElement("input");
          input.setAttribute("type", "date");
          input.setAttribute("required", "false");
          input.setAttribute("label", "Date Field");
          input.setAttribute("class", "date");
          input.setAttribute("name", "date-123");
          input.setAttribute("access", "false");


          input.addEventListener('input', (e)=>{
            input.setAttribute('value',`${e.target.value}`)
          })

      inWrap.appendChild(input);

      topWrap.appendChild(inWrap);

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
        div.insertAdjacentElement("afterend", datePick());
    })

      topWrap.appendChild(editDiv);

      div.appendChild(topWrap);


      let editOption = document.createElement("div");
      editOption.setAttribute("class", "editMenu");

        let s1 = document.createElement("div");
        s1.textContent = "Required";
          let editReq = document.createElement("input");
          editReq.setAttribute("type", "checkbox");

          editReq.addEventListener('click',()=>{
            input.setAttribute('required',`${editReq.checked}`)
        })

        s1.appendChild(editReq);
      editOption.appendChild(s1);

        let s2 = document.createElement("div");
        s2.textContent = "Label";
          let editlabel = document.createElement("input");
          editlabel.setAttribute("type", "text");
          editlabel.value = labelText

          editlabel.addEventListener('input',(e)=>{
            label.textContent = e.target.value
            input.setAttribute("label", `${e.target.value}`);
          })

        s2.appendChild(editlabel);

      editOption.appendChild(s2);

        let s3 = document.createElement("div");
        s3.textContent = "Help Text";
          let editText = document.createElement("input");
          editText.setAttribute("type", "text");

          editText.addEventListener('input',(e)=>{
            label.setAttribute("tooltip", `${e.target.value}`);
          })

        s3.appendChild(editText);

      editOption.appendChild(s3);

        let s4 = document.createElement("div");
        s4.textContent = "Class";
          let editClass = document.createElement("input");
          editClass.setAttribute("type", "text");
          editClass.value = 'date'
          editClass.addEventListener('input', (e)=>{
            input.setAttribute('class',`${e.target.value}`)
          })
        s4.appendChild(editClass);

      editOption.appendChild(s4);

        let s5 = document.createElement("div");
        s5.textContent = "Value";
          let editvalue = document.createElement("input");
          editvalue.setAttribute("type", "text");

          editvalue.addEventListener('input', (e)=>{
            input.setAttribute('value',`${e.target.value}`)
          })
        s5.appendChild(editvalue);

      editOption.appendChild(s5);

      let s6 = document.createElement("div");
      s6.textContent = "Name";
        let editName = document.createElement("input");
        editName.setAttribute("type", "text");
        editName.value = 'date-123'

        editName.addEventListener('input', (e)=>{
          input.setAttribute('name',`${e.target.value}`)
        })
      s6.appendChild(editName);

    editOption.appendChild(s6);

    let s9 = document.createElement("div");
    s9.textContent = "Access";
      let editAccess = document.createElement("input");
      editAccess.setAttribute("type", "checkbox");

      editAccess.addEventListener('click',()=>{
        input.setAttribute('access',`${editAccess.checked}`)
      })
    s9.appendChild(editAccess);
  editOption.appendChild(s9);

    div.appendChild(editOption);

    return div
  };
