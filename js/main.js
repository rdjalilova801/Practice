let images = document.querySelector(".section")
let main = document.querySelector(".main")
let picture = document.querySelector(".picture")
add()
function add() {
    images.innerHTML =""
    massiv_img.map((item,index) =>{

        let col = document.createElement("div")
        col.classList.add("row")

        let card = document.createElement("div")
        card.classList.add("text-center", "text-warning")

        let img = document.createElement("img")
        img.src = item.img
        img.alt = "Picture"
        img.setAttribute("onclick", `almash(${index})`)
        img.classList.add("images")

        let h_3 = document.createElement("h3")
        h_3.textContent = item.name

        let h_5 = document.createElement("h5")
        h_5.textContent = item.narx

        
        card.appendChild(img)
        card.appendChild(h_3)
        card.appendChild(h_5)
        col.appendChild(card)
        images.appendChild(col)
    })
}


function almash(son) {
    // picture.src = massiv_img[son].src
    
    let img = picture.src
    picture.src = massiv_img[son].src
    massiv_img[son].src = img
    
    add()
}



run()
function run() {
    main.innerHTML=""
    massiv_img.map((item,index) =>{
        let card = document.createElement("div")
        card.classList.add("card", "text-center", "text-warning", "p-5","card1" , "bg-dark","mb-5","mt-4")

        let row = document.createElement("div")
        row.classList.add("row")

        let col1 = document.createElement("div")
        col1.classList.add("col-4")

        let col2 = document.createElement("div")
        col2.classList.add("col-6")
        
        let button = document.createElement("button")
        button.classList.add("btn", "btn-warning", "fw-bold", "text-light", "form-control","mt-3")
        button.textContent = "Uy sotib olish"

        let h4name = document.createElement("h4")
        h4name.textContent = item.name
        h4name.classList.add("py-3")

        let btncha = document.createElement("button")
        btncha.classList.add("btn","btncha", "btn-outline-warning", "fw-bold", "text-light")
        btncha.textContent = "Ko`proq"

        let h5 = document.createElement("h5")
        h5.textContent = "Uyning narxi"
        h5.classList.add("text-light","py-3")

        let div = document.createElement("div")

        let h05 = document.createElement("h5")
        h05.textContent = "Qurilish rejasi"
        h05.classList.add("text-light")

        let hr = document.createElement("hr")
        hr.classList.add("text-warning", "bg-warning")

        let h5narx = document.createElement("h5")
        h5narx.textContent = item.narx
        h5narx.classList.add("fs-4")

        col1.appendChild(h4name)
        col1.appendChild(btncha)
        col1.appendChild(h5)
        col2.appendChild(div)
        col2.appendChild(h05)
        col2.appendChild(hr)
        col2.appendChild(h5narx)
        row.appendChild(col1)
        row.appendChild(col2)
        card.appendChild(row)
        card.appendChild(button)
        main.appendChild(card)
        
    })
}
