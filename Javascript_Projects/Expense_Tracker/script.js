let balance = 0;
let list = document.getElementById('list');
let balanceEl = document.getElementById('balance');

function addTransaction() {
    const desc = document.getElementById('desc').value;
    const amount = +document.getElementById('amount').value;

    const type = document.getElementById('type').value;
    if (!amount || !desc) return alert('Please Fill Out All Fields !');
    const li = document.createElement('li');
    li.classList.add(type);
    li.innerHTML = `${desc} <span>${type === 'expense' ? "-" : "+"}₹${amount}</span>`;
    list.append(li);

    balance += type === 'expense' ? -amount : amount;
    balanceEl.textContent = balance;

    document.getElementById('desc').value = '';
    document.getElementById('amount').value = '';
}