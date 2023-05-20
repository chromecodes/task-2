export const hiddenMaker = () => {
    let labelText = "Hidden Input:hidden-123";

    let div = document.createElement("div");
    div.setAttribute("class", "hiddenMaker");
    div.setAttribute("type", "hidden");

    let topWrap = document.createElement("div");
    topWrap.setAttribute("class", "topWrap");

        let label = document.createElement("label");
        div.setAttribute("class", "hiddenLabel");

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
            s1.textContent = "Name";
                let editName = document.createElement("input");
                editName.setAttribute("type", "text");

            s1.appendChild(editName);

        editOption.appendChild(s1);

            let s2 = document.createElement("div");
            s2.textContent = "Value";
                let editvalue = document.createElement("input");
                editvalue.setAttribute("type", "text");
            s2.appendChild(editvalue);

        editOption.appendChild(s2);

    return div
  };
