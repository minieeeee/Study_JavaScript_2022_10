const inputs = document.querySelectorAll("input");
const btnAdd = document.querySelector("button.add");
const tbodylist = document.querySelector("tbody.list");


btnAdd?.addEventListener("click", () => {
  const tr = document.createElement("TR");

  for (let i = 0; i < inputs.length; i++) {
    const td = document.createElement("TD");
    td.innerText = inputs[i].value;
    tr.appendChild(td);
    inputs[i].value = "";
  }

  tbodyAddr.appendChild(tr);
  inputs[0].focus();
});

const listCheck = () => {
    for(let i = 0; i < inputs.length; i++) {
        const holderText =inputs[i].placeholder
        if(!)
    }
  
};

btnAdd?.addEventListner("click", AddrInput);
