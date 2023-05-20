export const headerMaker = () => {
    let labelText = "Header";

    let div = document.createElement("div");
    div.setAttribute("class", "headerMaker");
    div.setAttribute("type", "header");

    let topWrap = document.createElement("div");
    topWrap.setAttribute("class", "topWrap");

      let label = document.createElement("h1");
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
            editType.setAttribute("id", "editType");

            const editTypeOption1 = document.createElement("option");
            editTypeOption1.setAttribute("value", "h1");
            editTypeOption1.textContent = "h1";
            

            editType.appendChild(editTypeOption1);

            const editTypeOption2 = document.createElement("option");
            editTypeOption2.setAttribute("value", "h2");
            editTypeOption2.textContent = "h2";
            

            editType.appendChild(editTypeOption2);

            const editTypeOption3 = document.createElement("option");
            editTypeOption3.setAttribute("value", "h3");
            editTypeOption3.textContent = "h3";
            

            editType.appendChild(editTypeOption3);

            const editTypeOption4 = document.createElement("option");
            editTypeOption4.setAttribute("value", "h4");
            editTypeOption4.textContent = "h4";
            

            editType.appendChild(editTypeOption4);

            const editTypeOption5 = document.createElement("option");
            editTypeOption5.setAttribute("value", "h5");
            editTypeOption5.textContent = "h5";
            

            editType.appendChild(editTypeOption5);

            const editTypeOption6 = document.createElement("option");
            editTypeOption6.setAttribute("value", "h6");
            editTypeOption6.textContent = "h6";
            

            editType.appendChild(editTypeOption6);

        s2.appendChild(editType);

      editOption.appendChild(s2);

        let s3 = document.createElement("div");
        s3.textContent = "Class";
          let editClass = document.createElement("input");
          editClass.setAttribute("type", "text");
        s3.appendChild(editClass);

      editOption.appendChild(s3);


    div.appendChild(editOption);

    return div
  };