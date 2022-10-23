document.addEventListener("DOMContentLoaded",()=>{
    const btnAdd = document.querySelector("button.add")
    const inputs = document.querySelectorAll("input")
    const tbodyAddr = document.querySelector("tbody.addr")
    let scoreList =[]

    const scoreLoad = () => {
        const strScore = localStorage.getItem("myscore")
        scoerList = JSON.parse(strScore)
        if(!scoerList){
            scoerList=[]
            return false
        }
        for(let i = 0 ; i < scoerList.length ; i++){
            const tr = document.createElement("TR")
            let td = document.createElement("TD")
            td.textContent = scoerList[i].number
            tr.appendChild(td)

            td = document.createElement("TD")
            td.textContent = scoerList[i].name
            tr.appendChild(td)

            td = document.createElement("TD")
            td.textContent = scoerList[i].kor
            tr.appendChild(td)

            td = document.createElement("TD")
            td.textContent = scoerList[i].eng
            tr.appendChild(td)

            td = document.createElement("TD")
            td.textContent = scoerList[i].math
            tr.appendChild(td)

            td = document.createElement("TD")
            td.textContent = scoerList[i].sum
            tr.appendChild(td)

            td = document.createElement("TD")
            td.textContent = scoerList[i].avg
            tr.appendChild(td)

            tbodyAddr.appendChild(tr)
        }

    }
    scoreLoad()

    const scoreCheck = () =>{
        for(let i = 0 ; i < inputs.length ; i++){
            if(!inputs[i].value){
                alert(`${inputs[i].placeholder} 입력하세요`)
                inputs[i].focus()
                return false
            }
            
            if(i > 1 & (Number(inputs[i].value) < 0 || Number(inputs[i].value) > 100)) {
                alert("0 ~ 100 까지의 숫자를 입력하세요")
                inputs[i].focus()
                inputs[i].value=""
                return false
            }
        }
        return true
    }

    const inputScore = ()=>{
        let sum = 0
        let avg = 0
        for(let i = 0 ; i < inputs.length ; i++){
            if(i > 1){
                sum += Number(inputs[i].value)
                avg = Math.round(sum / 3)            
            }
        }
        const score = {
            number : inputs[0].value,
            name : inputs[1].value,
            kor : inputs[2].value,
            eng : inputs[3].value,
            math : inputs[4].value,
            sum : sum,
            avg : avg
        }
        scoerList.push(score)
        localStorage.setItem("myscore",JSON.stringify(scoerList))

        const tr = document.createElement("TR")
        for(let i = 0 ; i < inputs.length ; i++) {
            const td = document.createElement("TD")
            td.textContent = inputs[i].value
            tr.appendChild(td)
        }
        let td = document.createElement("TD")
        td.textContent = sum
        tr.appendChild(td)

        td = document.createElement("TD")
        td.textContent = avg
        tr.appendChild(td)

        tbodyAddr.append(tr)
    }

    btnAdd.addEventListener("click", ()=>{
        if(scoreCheck()){
            inputScore()
        }
    })
})
