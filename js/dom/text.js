export const textMaker = () => {
    let labelText = "Text Field";

    let div = document.createElement("div");
    div.setAttribute("class", "textMaker");
    div.setAttribute("type", "text");

    let topWrap = document.createElement("div");
    topWrap.setAttribute("class", "topWrap");

        let label = document.createElement("label");
        label.textContent = labelText;

            let input = document.createElement("input");
            input.setAttribute("id", "text");
            input.setAttribute("type", "text");

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
            s4.textContent = "Placeholder";
                let editPlace = document.createElement("input");
                editPlace.setAttribute("type", "text");
            s4.appendChild(editPlace);

        editOption.appendChild(s4);

            let s5 = document.createElement("div");
            s5.textContent = "Class";
                let editClass = document.createElement("input");
                editClass.setAttribute("type", "text");
            s5.appendChild(editClass);

        editOption.appendChild(s5);

            let s6 = document.createElement("div");
            s6.textContent = "Name";
                let editName = document.createElement("input");
                editName.setAttribute("type", "text");
            s6.appendChild(editName);

        editOption.appendChild(s6);

            let s7 = document.createElement("div");
            s7.textContent = "Value";
                let editvalue = document.createElement("input");
                editvalue.setAttribute("type", "text");
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

        s8.appendChild(editType);

      editOption.appendChild(s8);

        let s9 = document.createElement("div");
        s9.textContent = "Max Length";
          let editLength = document.createElement("input");
          editLength.setAttribute("type", "number");
        s9.appendChild(editLength);

      editOption.appendChild(s9);


    div.appendChild(editOption);

    return div
  };
