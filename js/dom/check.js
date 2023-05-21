import { optionMaker } from "./options.js";

export const checkMaker = () => {
    let labelText = "Checkbox Group";

    let div = document.createElement("div");
    div.setAttribute("class", "checkMaker");
    div.setAttribute("type", "checkbox");

    let topWrap = document.createElement("div");
    topWrap.setAttribute("class", "topWrap");

      let label = document.createElement("label");
      label.setAttribute("for", "checkboxCnt");
      label.textContent = labelText;

        let span = document.createElement("label");
        span.setAttribute("for", "checkbox");
        span.textContent = 'option 1'

          let input = document.createElement("input");
          input.setAttribute("id", "checkbox");
          input.setAttribute("type", "checkbox");
          input.setAttribute("value", "option 1");

        span.appendChild(input);
        
      label.appendChild(span);


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
        div.insertAdjacentElement("afterend", checkMaker());
    })

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
        s5.textContent = "Inline";
          let editvalue = document.createElement("input");
          editvalue.setAttribute("type", "checkbox");
          
        s5.appendChild(editvalue);

      editOption.appendChild(s5);

      let s6 = document.createElement("div");
      s6.textContent = "Name";
        let editName = document.createElement("input");
        editName.setAttribute("type", "text");
      s6.appendChild(editName);

    editOption.appendChild(s6);

      let s7 = document.createElement("div");
      s7.textContent = "Eable 'other'";
        let editOther = document.createElement("input");
        editOther.setAttribute("type", "checkbox");
        
      s7.appendChild(editOther);

    editOption.appendChild(s7);


    let s8 = document.createElement("div");
    s8.textContent = "Options";
        let editChoice = document.createElement("div");
        editChoice.setAttribute("class", "optionWrap");

            let list = document.createElement("ol");
            list.setAttribute("class", "optionList");    
            
                let li = document.createElement("li");
                li.setAttribute("class", "optionCnt");
            
                    let c1 = document.createElement("input");
                    c1.setAttribute("id", "checkbox");
                    c1.setAttribute("type", "checkbox");
            
                li.appendChild(c1);
            
                    let c2 = document.createElement("input");
                    c2.setAttribute("type", "text");
                    c2.value = 'option 1'
            
                li.appendChild(c2);
            
                    let c3 = document.createElement("input");
                    c3.setAttribute("type", "text");
                    c3.value = 'option-1'
            
                li.appendChild(c3);
                    
                    let c4 = document.createElement("button");
                    c4.setAttribute("type", "button");
                    c4.textContent = 'X'
            
                li.appendChild(c4);
            
            list.appendChild(li)
            
        
        editChoice.appendChild(list);

            let addOption = document.createElement("button");
            addOption.setAttribute("class", "addOption");
            addOption.textContent = "Add Option"; 


            addOption.addEventListener('click',()=>{
                let a = optionMaker()
                list.appendChild(a)
            })

        editChoice.appendChild(addOption);
      
    s8.appendChild(editChoice);

  editOption.appendChild(s8);


    div.appendChild(editOption);

    return div
  };
