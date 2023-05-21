import { optionMaker } from "./Seloptions.js";

let i=1


const makeSelbox = (k,a)=>{

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

export const selectMaker = () => {
  i=1
    let labelText = "Select";
    let k=1

    let div = document.createElement("div");
    div.setAttribute("class", "selectMaker");
    div.setAttribute("type", "select");

    let topWrap = document.createElement("div");
    topWrap.setAttribute("class", "topWrap");

      let label = document.createElement("label");
      label.setAttribute("type", "select");
      label.setAttribute("label", "Select");
      label.setAttribute("name", "select-123");
      label.setAttribute("class", "select");
      label.setAttribute("access", "false");
      label.textContent = labelText;

        const editInput = document.createElement("select");
        editInput.setAttribute("id", "editInput");

        makeSelbox(k,editInput)

      label.appendChild(editInput);

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
        div.insertAdjacentElement("afterend", selectMaker());
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
            s4.textContent = "Placeholder";
                let editPlace = document.createElement("input");
                editPlace.setAttribute("type", "text");

                editPlace.addEventListener('input',(e)=>{
                  label.setAttribute("placeholder", `${e.target.value}`);
                })
            s4.appendChild(editPlace);

        editOption.appendChild(s4);

        let s5 = document.createElement("div");
        s5.textContent = "Class";
          let editClass = document.createElement("input");
          editClass.setAttribute("type", "text");
          editClass.value='select'
          editClass.addEventListener('input', (e)=>{
            label.setAttribute('class',`${e.target.value}`)
          })
        s5.appendChild(editClass);

      editOption.appendChild(s5);

      let s6 = document.createElement("div");
      s6.textContent = "Name";
        let editName = document.createElement("input");
        editName.setAttribute("type", "text");
        editName.value='select-123'
        editName.addEventListener('input', (e)=>{
          label.setAttribute('name',`${e.target.value}`)
        })
      s6.appendChild(editName);

    editOption.appendChild(s6);

      let s7 = document.createElement("div");
      s7.textContent = "Multi selection";
        let editOther = document.createElement("input");
        editOther.setAttribute("type", "checkbox");

        editOther.addEventListener('click',()=>{
          label.setAttribute('multi',`${editOther.checked}`)
        })
        
      s7.appendChild(editOther);

    editOption.appendChild(s7);

    let s8 = document.createElement("div");
    s8.textContent = "Options";
        let editChoice = document.createElement("div");
        editChoice.setAttribute("class", "optionWrap");

                let list = document.createElement("ol");
                list.setAttribute("class", "optionList");    

                let a = optionMaker(k,editInput)
                list.appendChild(a)
                
            editChoice.appendChild(list);

            let addOption = document.createElement("button");
            addOption.setAttribute("class", "addOption");
            addOption.textContent = "Add Option"; 


            addOption.addEventListener('click',()=>{
                k++
                makeSelbox(k,editInput)
                let a = optionMaker(k,editInput)
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
