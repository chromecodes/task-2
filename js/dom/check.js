import { optionMaker } from "./Chkoptions.js";

let i=1

const makeCheckbox = (k,a)=>{

  for(;i<=k;i++){
    let span = document.createElement("label");
    span.setAttribute("for", "checkbox");
    span.textContent = `option ${i}`
    span.setAttribute( 'id',`id-${i}`);


    let input = document.createElement("input");
    input.setAttribute( 'class',`id-${i}`);
    input.setAttribute("id", "checkbox");
    input.setAttribute("type", "checkbox");
    input.setAttribute("value", `option ${i}`);

    input.addEventListener('click', ()=>{
      let list = document.querySelector(`.optionList`)
      console.log(list);

      let sad = list.querySelector(`#ids-${i-1}`)
      console.log(sad);

      if(input.checked) sad.checked=true
      else sad.checked=false
    })

    a.appendChild(input);

    a.appendChild(span)
  }

}

export const checkMaker = () => {
  let k=1

    if(i>k){i=1}
    let labelText = "Checkbox Group";

    let div = document.createElement("div");
    div.setAttribute("class", "checkMaker");
    div.setAttribute("type", "checkbox");

    let topWrap = document.createElement("div");
    topWrap.setAttribute("class", "topWrap");

    let inWrap = document.createElement("div");
    inWrap.setAttribute("class", "inWrap");

      let label = document.createElement("label");
      label.setAttribute("type", "checkbox");
      label.setAttribute("label", "Checkbox Group");
      label.setAttribute("name", "checkbox-123");
      label.setAttribute("class", "checkbox");
      label.setAttribute("access", "false");
      label.setAttribute("others", "false");
      label.setAttribute("inline", "true");


      
      label.textContent = labelText;

    inWrap.appendChild(label);


        let checkboxCnt = document.createElement("div");
        checkboxCnt.setAttribute("class", "checkboxCnt");

        makeCheckbox(k,checkboxCnt)
        
    inWrap.appendChild(checkboxCnt);

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

          editReq.addEventListener('click',()=>{
            label.setAttribute('required',`${editReq.checked}`)
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
            label.setAttribute("label", `${e.target.value}`);
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
        s4.textContent = "Class";
          let editClass = document.createElement("input");
          editClass.setAttribute("type", "text");
          editClass.value = "checkbox"


          editClass.addEventListener('input', (e)=>{
            label.setAttribute('class',`${e.target.value}`)
          })

        s4.appendChild(editClass);

      editOption.appendChild(s4);

        let s5 = document.createElement("div");
        s5.textContent = "Inline";
          let editvalue = document.createElement("input");
          editvalue.setAttribute("type", "checkbox");
          editvalue.checked=true

          editvalue.addEventListener('click',()=>{
            label.setAttribute('inline',`${editvalue.checked}`)

          })
          
        s5.appendChild(editvalue);

      editOption.appendChild(s5);

      let s6 = document.createElement("div");
      s6.textContent = "Name";
        let editName = document.createElement("input");
        editName.setAttribute("type", "text");
        editName.value = "checkbox-123"
        editName.addEventListener('input', (e)=>{
          label.setAttribute('name',`${e.target.value}`)
        })
      s6.appendChild(editName);

    editOption.appendChild(s6);

      let s7 = document.createElement("div");
      s7.textContent = "Eable 'other'";
        let editOther = document.createElement("input");
        editOther.setAttribute("type", "checkbox");

        editOther.addEventListener('click',()=>{
          label.setAttribute('others',`${editOther.checked}`)
        })
        
      s7.appendChild(editOther);

    editOption.appendChild(s7);


    let s8 = document.createElement("div");
    s8.textContent = "Options";
        let editChoice = document.createElement("div");
        editChoice.setAttribute("class", "optionWrap");

            let list = document.createElement("ol");
            list.setAttribute("class", "optionList");   

            let a = optionMaker(k,checkboxCnt)
                list.appendChild(a)
        
        editChoice.appendChild(list);

            let addOption = document.createElement("button");
            addOption.setAttribute("class", "addOption");
            addOption.textContent = "Add Option"; 


            addOption.addEventListener('click',()=>{
                k++
                makeCheckbox(k,checkboxCnt)

                let a = optionMaker(k,checkboxCnt)
                list.appendChild(a)
            })

        editChoice.appendChild(addOption);
      
    s8.appendChild(editChoice);

  editOption.appendChild(s8);

  let s10 = document.createElement("div");
  s10.textContent = "Access";
    let editAccess = document.createElement("input");
    editAccess.setAttribute("type", "checkbox");

    editAccess.addEventListener('click',()=>{
    label.setAttribute('access',`${editAccess.checked}`)
  })
  s10.appendChild(editAccess);
editOption.appendChild(s10);


    div.appendChild(editOption);

    return div
  };
