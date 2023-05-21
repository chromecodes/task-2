import { optionMaker } from "./Chkoptions.js";

let i = 1;

const makeOPtion = (k,a)=>{

  for(;i<=k;i++){

    const input = document.createElement("option");
    input.setAttribute("value", `option-${i}`);
    input.setAttribute( 'id',`id-${i}`);
    input.textContent = `option ${i}`;

    input.addEventListener('click', ()=>{
      let list = document.querySelector(`.optionList`)
      console.log(list);

      let sad = list.querySelector(`#ids-${i-1}`)
      console.log(sad);

      if(input.checked) sad.checked=true
      else sad.checked=false
    })

    a.appendChild(input);

  }

}

export const autoMaker = () => {
    let labelText = "Autocomplete";
    let k = 3

    let div = document.createElement("div");
    div.setAttribute("class", "autocomplete");
    div.setAttribute("type", "autocomplete");

    let topWrap = document.createElement("div");
    topWrap.setAttribute("class", "topWrap");

    let inWrap = document.createElement("div");
    inWrap.setAttribute("class", "inWrap");

      let label = document.createElement("label");
      label.setAttribute("for", "autoInput");
      label.textContent = labelText;

      inWrap.appendChild(label);


      const input = document.createElement("input");
      input.setAttribute("list", "auto");
      input.setAttribute("type", "text");
      input.setAttribute("required", "false");
      input.setAttribute("label", "Autocomplete");
      input.setAttribute("class", "auto");
      input.setAttribute("name", "auto-123");
      input.setAttribute("access", "false");

        const autoInput = document.createElement("datalist");
        autoInput.setAttribute("id", "auto");
        autoInput.setAttribute("list", "auto");

        makeOPtion(k,autoInput)

        input.appendChild(autoInput);

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
        div.insertAdjacentElement("afterend", autoMaker());
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
            s4.textContent = "Placeholder";
                let editPlace = document.createElement("input");
                editPlace.setAttribute("type", "text");

                editPlace.addEventListener('input',(e)=>{
                  input.setAttribute("placeholder", `${e.target.value}`);
                })

            s4.appendChild(editPlace);

        editOption.appendChild(s4);

        let s5 = document.createElement("div");
        s5.textContent = "Class";
          let editClass = document.createElement("input");
          editClass.setAttribute("type", "text");
          editClass.value = "auto"

          editClass.addEventListener('input', (e)=>{
            input.setAttribute('class',`${e.target.value}`)
          })
        s5.appendChild(editClass);

      editOption.appendChild(s5);

      let s6 = document.createElement("div");
      s6.textContent = "Name";
        let editName = document.createElement("input");
        editName.setAttribute("type", "text");
        editName.value = 'auto-123'

        editName.addEventListener('input', (e)=>{
          input.setAttribute('name',`${e.target.value}`)
        })
      s6.appendChild(editName);

    editOption.appendChild(s6);

    let s8 = document.createElement("div");
    s8.textContent = "Options";
        let editChoice = document.createElement("div");
        editChoice.setAttribute("class", "optionWrap");

          let list = document.createElement("ol");
          list.setAttribute("class", "optionList");    

            for(let i=1;i<=k;i++){
  
              let li = document.createElement("li");
                  li.setAttribute("class", "optionCnt");
              
                    let c2 = document.createElement("input");
                    c2.setAttribute("type", "text");
                    c2.value = `Option` 
              
                  li.appendChild(c2);
              
                    let c3 = document.createElement("input");
                    c3.setAttribute("type", "text");
                    c3.value = `option-` 
                      
                  li.appendChild(c3);
                      
                    let c4 = document.createElement("button");
                    c4.setAttribute("type", "button");
                    c4.textContent = 'X'

                    c4.addEventListener('click',()=>li.remove())
              
                  li.appendChild(c4);
              
              list.appendChild(li)
            }
            editChoice.appendChild(list);
        

            let addOption = document.createElement("button");
            addOption.setAttribute("class", "addOption");
            addOption.textContent = "Add Option"; 


            addOption.addEventListener('click',()=>{
                let a = optionMaker()
                list.appendChild(a)
                k++
                makeOPtion(k,autoInput)
            })

        editChoice.appendChild(addOption);
      
    s8.appendChild(editChoice);

  editOption.appendChild(s8);

  let s9 = document.createElement("div");
        s9.textContent = "Access";
          let editAccess = document.createElement("input");
          editAccess.setAttribute("type", "checkbox");

          editAccess.addEventListener('click',()=>{
            console.log(editAccess.checked)
            input.setAttribute('access',`${editAccess.checked}`)

          })
        s9.appendChild(editAccess);
      editOption.appendChild(s9);

    div.appendChild(editOption);

    return div
  };
