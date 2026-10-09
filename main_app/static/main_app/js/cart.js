let quantity = 1;

function changeQuantity(amount) {

    quantity += amount;

    if (quantity < 1) {
    quantity = 1;
    }

    document.getElementById("quantity").textContent = quantity;
}