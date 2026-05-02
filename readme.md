let total = 0;

function AddtoCart(name, price, image) {
    let li = document.createElement("li");

    // images 

    let img = document.createElement("img")
    img.src = image;
    img.style.width = "50px"
    img.style.height = "50px"

    // text

    let span = document.createElement("span");
    span.innerText = `${name} - ${price}`

    // Remove button 

    let btn = document.createElement("button");

    btn.innerText = `Remove`
    btn.onclick = function() {
        total -= price
        li.remove();
        updateTotal()
    };

    // append 

    li.appendChild(img)
    li.appendChild(span);
    li.appendChild(btn);
    document.getElementById("cart").appendChild(li);

    // update total 
    total += price;
    updateTotal();
}

// update total

function updateTotal() {
    document.getElementById("total").innerText = `Total: ${total}`

}