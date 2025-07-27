const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

window.onload = () => {
    const saved = JSON.parse(localStorage.getItem('todos')) || [];
    saved.forEach(addItem);
}

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addItem(input.value);
        save();
        input.value = '';
    }
});

function addItem(text) {
    const li = document.createElement('li');
    li.textContent = text;
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
        save();
    });
    const btn = document.createElement('button');
    btn.textContent = 'X';
    btn.onclick = () => {
        li.remove();
        save();
    }
    li.appendChild(btn);
    list.appendChild(li);
}

function save() {
    const items = [];
    list.querySelectorAll('li').forEach(li => {
        items.push(li.textContent.replace('X', '').trim());
    })
    localStorage.setItem('todos', JSON.stringify(items));
}