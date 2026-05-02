let total = 0;

function AddtoCart(title, description, price, image) {

    // All cart items stored in li
    let li = document.createElement("li")

    let info = document.createElement("div")
    info.classList.add("info")


    let actions = document.createElement("div")
    actions.classList.add("actions")
        // image

    let img = document.createElement("img")
    img.src = image;
    img.style.width = "50px";
    img.style.height = "50px";


    // text 
    let h3 = document.createElement("h3");
    h3.style.fontFamily = "sans-serif";
    h3.style.fontSize = "x-large"
    h3.style.fontWeight = "bold"
    h3.innerText = `${title} - ${description} `

    let span = document.createElement("span")
    span.style.fontWeight = "bold"
    span.style.fontSize = "large"
    span.style.fontFamily = "sans-serif"
    span.innerText = `${price}`


    let quantity = 1;

    let span2 = document.createElement("span")
    span2.innerText = quantity;


    let plus = document.createElement("button")
    plus.innerText = `+`;

    let minus = document.createElement("button")
    minus.innerText = `-`;

    plus.onclick = function() {
        quantity = quantity + 1
        span2.innerText = quantity

        total += price
        updateTotal()
        updateItemTotal()
    }
    minus.onclick = function() {
        if (quantity > 1) {
            quantity = quantity - 1
            span2.innerText = quantity


            total -= price
            updateTotal()
            updateItemTotal()
        }
    }


    // Remove Button
    let btn = document.createElement("button")
    btn.innerText = `Remove`;
    btn.onclick = function() {
        total -= price
        li.remove()
        updateTotal()
    }



    // append 
    li.appendChild(img)
    info.appendChild(h3)
    info.appendChild(span)
    actions.appendChild(minus)
    actions.appendChild(span2)
    actions.appendChild(plus)
    actions.appendChild(btn)
    li.appendChild(actions)

    document.getElementById("cart").appendChild(li)


    // update total 
    total += price * quantity
    updateTotal()



}

// update total
function updateTotal() {
    document.getElementById("total").innerText = `Total:${total}`
}