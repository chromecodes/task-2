export const textMaker = () => {
    let labelText = "Text Field";

    let div = document.createElement("div");
    div.setAttribute("class", "textMaker");
    div.setAttribute("type", "text");

    let topWrap = document.createElement("div");
    topWrap.setAttribute("class", "topWrap");


      let inWrap = document.createElement("div");
      inWrap.setAttribute("class", "inWrap");

        let label = document.createElement("label");
        label.textContent = labelText;

      inWrap.appendChild(label);

            let input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("required", "false");
            input.setAttribute("label", "Text Field");
            input.setAttribute("class", "text");
            input.setAttribute("name", "text-123");
            input.setAttribute("access", "false");

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
        div.insertAdjacentElement("afterend", textMaker());
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
            s4.textContent = "Placeholder";
                let editPlace = document.createElement("input");
                editPlace.setAttribute("type", "text");

                editPlace.addEventListener('input',(e)=>{
                  input.setAttribute("placeholder", `${e.target.value}`);
                })
            s4.appendChild(editPlace);

        editOption.appendChild(s4);

            let s5 = document.createElement("div");
            s5.textContent = "Class";
                let editClass = document.createElement("input");
                editClass.setAttribute("type", "text");
                editClass.value = "text"


                editClass.addEventListener('input', (e)=>{
                  input.setAttribute('class',`${e.target.value}`)
                })
            s5.appendChild(editClass);

        editOption.appendChild(s5);

            let s6 = document.createElement("div");
            s6.textContent = "Name";
                let editName = document.createElement("input");
                editName.setAttribute("type", "text");
                editName.value = "text-123"

                editName.addEventListener('input', (e)=>{
                  input.setAttribute('name',`${e.target.value}`)
                })
            s6.appendChild(editName);

        editOption.appendChild(s6);

            let s7 = document.createElement("div");
            s7.textContent = "Value";
                let editvalue = document.createElement("input");
                editvalue.setAttribute("type", "text");

                editvalue.addEventListener('input', (e)=>{
                  input.setAttribute('value',`${e.target.value}`)
                })
            s7.appendChild(editvalue);

        editOption.appendChild(s7);

        let s8 = document.createElement("div");
        s8.textContent = "Type";
          
          const editType = document.createElement("select");
            editType.setAttribute("id", "editType");

            const editTypeOption1 = document.createElement("option");
            editTypeOption1.setAttribute("value", "Text Field");
            editTypeOption1.textContent = "Text Field";
            

            editType.appendChild(editTypeOption1);

            const editTypeOption2 = document.createElement("option");
            editTypeOption2.setAttribute("value", "Password");
            editTypeOption2.textContent = "Password";
            

            editType.appendChild(editTypeOption2);

            const editTypeOption3 = document.createElement("option");
            editTypeOption3.setAttribute("value", "email");
            editTypeOption3.textContent = "email";
            

            editType.appendChild(editTypeOption3);

            const editTypeOption4 = document.createElement("option");
            editTypeOption4.setAttribute("value", "color");
            editTypeOption4.textContent = "color";
            

            editType.appendChild(editTypeOption4);

            const editTypeOption5 = document.createElement("option");
            editTypeOption5.setAttribute("value", "tel");
            editTypeOption5.textContent = "tel";
            

            editType.appendChild(editTypeOption5);

            editType.addEventListener('change',(e)=>{
              input.setAttribute('type',`${e.target.value}`)
            })

        s8.appendChild(editType);

      editOption.appendChild(s8);

        let s9 = document.createElement("div");
        s9.textContent = "Max Length";
          let editLength = document.createElement("input");
          editLength.setAttribute("type", "number");

          editLength.addEventListener('input',(e)=>{
            input.setAttribute('maxlength',`${e.target.value}`)
          })
        s9.appendChild(editLength);

      editOption.appendChild(s9);

      let s10 = document.createElement("div");
      s10.textContent = "Access";
        let editAccess = document.createElement("input");
        editAccess.setAttribute("type", "checkbox");

        editAccess.addEventListener('click',()=>{
        input.setAttribute('access',`${editAccess.checked}`)
      })
      s10.appendChild(editAccess);
  editOption.appendChild(s10);

    div.appendChild(editOption);

    return div
  };
