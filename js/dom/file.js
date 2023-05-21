export const fileUp = () => {
    let labelText = "File Upload";

    let div = document.createElement("div");
    div.setAttribute("class", "fileUp");
    div.setAttribute("type", "file");

    
        let topWrap = document.createElement("div");
        topWrap.setAttribute("class", "topWrap");

            let inWrap = document.createElement("div");
            inWrap.setAttribute("class", "inWrap");
        
                let label = document.createElement("label");
                label.setAttribute("for", "file");
                label.textContent = labelText;

            inWrap.appendChild(label);

    
                let input = document.createElement("input");
                input.setAttribute("id", "file");
                input.setAttribute("type", "file");
                input.setAttribute("required", "false");
                input.setAttribute("label", "File Upload");
                input.setAttribute("class", "file");
                input.setAttribute("name", "file-123");
                input.setAttribute("access", "false");
                input.setAttribute("multiple", "false");

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
                div.insertAdjacentElement("afterend", fileUp());
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

              editClass.addEventListener('input', (e)=>{
                input.setAttribute('class',`${e.target.value}`)
              })

            s4.appendChild(editClass);
    
        editOption.appendChild(s4);

            let s5 = document.createElement("div");
            s5.textContent = "Type";
            
            const editType = document.createElement("select");
                editType.setAttribute("id", "priority-update");

                const editTypeOption1 = document.createElement("option");
                editTypeOption1.setAttribute("value", "Fine Uploader");
                editTypeOption1.textContent = "Fine Uploader";
                

                editType.appendChild(editTypeOption1);

                const editTypeOption2 = document.createElement("option");
                editTypeOption2.setAttribute("value", "file Uploader");
                editTypeOption2.textContent = "File Uploader";
                

                editType.appendChild(editTypeOption2);

            s5.appendChild(editType);

        editOption.appendChild(s5);

            let s6 = document.createElement("div");
            s6.textContent = "Required";
                let multiFile = document.createElement("input");
                multiFile.setAttribute("type", "checkbox");

                multiFile.addEventListener('click',()=>{
                    input.setAttribute('multiple',`${editReq.checked}`)
          
                })

            s6.appendChild(multiFile);
        editOption.appendChild(s6);

    div.appendChild(editOption);

    return div
  };
