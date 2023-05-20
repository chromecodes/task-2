export const btnMaker = () => {
    let labelText = "Button";

    let div = document.createElement("div");
    div.setAttribute("class", "btnPicker");
    div.setAttribute("type", "btn");

    let topWrap = document.createElement("div");
    topWrap.setAttribute("class", "topWrap");

      let label = document.createElement("button");
      label.textContent = labelText;

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
        s1.textContent = "Label";
          let editlabel = document.createElement("input");
          editlabel.setAttribute("type", "text");
          editlabel.value = labelText

        s1.appendChild(editlabel);
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

    div.appendChild(editOption);

    return div
  };
