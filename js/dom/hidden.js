export const hiddenMaker = () => {
    let labelText = "Hidden Input:hidden-123";

    let div = document.createElement("div");
    div.setAttribute("class", "hiddenMaker");
    div.setAttribute("type", "hidden");

    let topWrap = document.createElement("div");
    topWrap.setAttribute("class", "topWrap");

        let label = document.createElement("label");
        label.setAttribute("type", "hidden");
        label.setAttribute("name", "hidden-123");
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
        div.insertAdjacentElement("afterend", hiddenMaker());
    })

      topWrap.appendChild(editDiv);

    div.appendChild(topWrap);

        let editOption = document.createElement("div");
        editOption.setAttribute("class", "editMenu");

            let s1 = document.createElement("div");
            s1.textContent = "Name";
                let editName = document.createElement("input");
                editName.setAttribute("type", "text");

                editName.addEventListener('input', (e)=>{
                  label.setAttribute('name',`${e.target.value}`)
                })

            s1.appendChild(editName);

        editOption.appendChild(s1);

            let s2 = document.createElement("div");
            s2.textContent = "Value";
                let editvalue = document.createElement("input");
                editvalue.setAttribute("type", "text");

                editvalue.addEventListener('input', (e)=>{
                  label.setAttribute('value',`${e.target.value}`)
                })
            s2.appendChild(editvalue);

        editOption.appendChild(s2);

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

    return div
  };
