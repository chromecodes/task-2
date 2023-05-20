export const fileUp = () => {
    let labelText = "File Upload";

    let div = document.createElement("div");
    div.setAttribute("class", "fileUp");
    div.setAttribute("type", "file");

    
        let topWrap = document.createElement("div");
        topWrap.setAttribute("class", "topWrap");
    
            let label = document.createElement("label");
            label.setAttribute("for", "file");
            label.textContent = labelText;
    
                let input = document.createElement("input");
                input.setAttribute("id", "file");
                input.setAttribute("type", "file");
    
            label.appendChild(input);
    
        topWrap.appendChild(label);
        
            let editDiv = document.createElement("div");
            editDiv.setAttribute("class", "editDiv");
        
                let closeBtn = document.createElement("button");
                closeBtn.setAttribute("class", "closeBtn");
                closeBtn.setAttribute("data-type", "closeBtn");
            editDiv.appendChild(closeBtn);
        
                let editBtn = document.createElement("button");
                editBtn.setAttribute("class", "editBtn");
                editBtn.setAttribute("data-type", "editBtn");
            editDiv.appendChild(editBtn);
        
                let copyBtn = document.createElement("button");
                copyBtn.setAttribute("class", "copyBtn");
                copyBtn.setAttribute("data-type", "copyBtn");
            editDiv.appendChild(copyBtn);
    
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

            s6.appendChild(multiFile);
        editOption.appendChild(s6);

    div.appendChild(editOption);

    return div
  };
