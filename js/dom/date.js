export const datePick = () => {
    let labelText = "Date Field";

    let div = document.createElement("div");
    div.setAttribute("class", "datePicker");
    div.setAttribute("type", "date");

    let topWrap = document.createElement("div");
    topWrap.setAttribute("class", "topWrap");

      let label = document.createElement("label");
      label.setAttribute("for", "date");
      label.textContent = labelText;

        let input = document.createElement("input");
        input.setAttribute("id", "date");
        input.setAttribute("type", "date");
        input.setAttribute("type", "date");

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
        s5.textContent = "Value";
          let editvalue = document.createElement("input");
          editvalue.setAttribute("type", "text");
        s5.appendChild(editvalue);

      editOption.appendChild(s5);

    div.appendChild(editOption);

    return div
  };
