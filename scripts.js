document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product");
    const cartList = document.getElementById("cart-list");
    const totalDisplay = document.getElementById("total");

    products.forEach(product => {
        const incBtn = product.querySelector(".increment");
        const decBtn = product.querySelector(".decrement");
        const qtyInput = product.querySelector(".quantity");

        incBtn.addEventListener("click", () => {
            qtyInput.value = parseInt(qtyInput.value) + 1;
            updateCart();
        });

        decBtn.addEventListener("click", () => {
            if (parseInt(qtyInput.value) > 0) {
                qtyInput.value = parseInt(qtyInput.value) - 1;
                updateCart();
            }
        });

        qtyInput.addEventListener("input", () => {
            if (qtyInput.value < 0) qtyInput.value = 0;
            updateCart();
        });
    });

    function updateCart() {
        cartList.innerHTML = "";
        let total = 0;

        products.forEach(product => {
            const name = product.dataset.name;
            const price = parseFloat(product.dataset.price);
            const qty = parseInt(product.querySelector(".quantity").value);

            if (qty > 0) {
                const item = document.createElement("li");
                item.textContent = `${name} x ${qty} = $${(price * qty).toFixed(2)}`;
                cartList.appendChild(item);
                total += price * qty;
            }
        });

        totalDisplay.textContent = total.toFixed(2);
    }

    document.getElementById("submitPmnt").addEventListener("click", (e) => {
        const alertMessage = `
            Payment Details:
            Name: ${document.getElementById("name").value}
            Address: ${document.getElementById("address").value}
            Card Number: ${document.getElementById("card-number").value}
            Total Amount: $${totalDisplay.textContent}
            Payment submitted successfully! (This is a demo)
        `;
        alert(alertMessage);
    });
});
