import { optionMaker } from "./options.js";

export const radioMaker = () => {
    let labelText = "Radio Group";

    let div = document.createElement("div");
    div.setAttribute("class", "radioMaker");
    div.setAttribute("type", "radio");

    let topWrap = document.createElement("div");
    topWrap.setAttribute("class", "topWrap");

      let label = document.createElement("label");
      label.setAttribute("for", "radioMaker");
      label.textContent = labelText;

        const radioGrp = document.createElement("div");
        radioGrp.setAttribute("class", "radioGrp");

            const radioOption1 = document.createElement("label");
            radioOption1.setAttribute("for", "radio1");
            radioOption1.textContent = "option 1";

                const radioInputOption1 = document.createElement("input");
                radioInputOption1.setAttribute("type", "radio");
                radioInputOption1.setAttribute("id", "radio1");
                radioInputOption1.setAttribute("value", "option 1");
                radioInputOption1.setAttribute("name", "radio");
                radioInputOption1.textContent = "option 1";
                
            radioOption1.appendChild(radioInputOption1);
            
        radioGrp.appendChild(radioOption1);

            const radioOption2 = document.createElement("label");
            radioOption2.setAttribute("for", "radio2");
            radioOption2.textContent = "option 2";

                const radioInputOption2 = document.createElement("input");
                radioInputOption2.setAttribute("type", "radio");
                radioInputOption2.setAttribute("id", "radio2");
                radioInputOption2.setAttribute("value", "option 2");
                radioInputOption2.setAttribute("name", "radio");
                radioInputOption2.textContent = "option 2";
                
            radioOption2.appendChild(radioInputOption2);
            
        radioGrp.appendChild(radioOption2);

            const radioOption3 = document.createElement("label");
            radioOption3.setAttribute("for", "radio3");
            radioOption3.textContent = "option 3";

                const radioInputOption3 = document.createElement("input");
                radioInputOption3.setAttribute("type", "radio");
                radioInputOption3.setAttribute("id", "radio3");
                radioInputOption3.setAttribute("value", "option 3");
                radioInputOption3.setAttribute("name", "radio");
                radioInputOption3.textContent = "option 3";
                
            radioOption3.appendChild(radioInputOption3);
            
        radioGrp.appendChild(radioOption3);

      label.appendChild(radioGrp);

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
        div.insertAdjacentElement("afterend", radioMaker());
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
      s4.textContent = "Inline";
        let editvalue = document.createElement("input");
        editvalue.setAttribute("type", "checkbox");
        
      s4.appendChild(editvalue);

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
      s7.textContent = "Enable 'Other'";
        let editOther = document.createElement("input");
        editOther.setAttribute("type", "checkbox");
        
      s7.appendChild(editOther);

    editOption.appendChild(s7);

    let s8 = document.createElement("div");
    s8.textContent = "Options";
        let editChoice = document.createElement("div");
        editChoice.setAttribute("class", "optionWrap");

        for(let i=0;i<4;i++){
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
                        c2.value = `Option ${i}` 
                
                    li.appendChild(c2);
                
                        let c3 = document.createElement("input");
                        c3.setAttribute("type", "text");
                        c3.value = `option-${i}` 
                
                
                    li.appendChild(c3);
                        
                        let c4 = document.createElement("button");
                        c4.setAttribute("type", "button");
                        c4.textContent = 'X'
                
                    li.appendChild(c4);
                
                list.appendChild(li)
                
            
            editChoice.appendChild(list);
        }

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
