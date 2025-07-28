function calculateTip() {
    const bill = parseFloat(document.getElementById('bill').value);
    const tip = parseFloat(document.getElementById('tip').value);
    if (isNaN(bill) || bill <= 0) return alert("Enter Valid Bill Amount");
    const total = bill + (bill * tip);
    document.getElementById('total').textContent = `Total : ₹${total.toFixed(2)}`;
}