let container = document.getElementById('noteContainer');
document.getElementById('addNote').onclick = () => {
    createNote('');
    saveNote();
}

function createNote(context) {
    const div = document.createElement('div');
    div.className = 'note';
    const textArea = document.createElement('textarea');
    textArea.value = context;
    textArea.oninput = saveNote;
    const btn = document.createElement('button');
    btn.textContent = "X";
    btn.onclick = () => {
        div.remove();
        saveNote();
    }
    div.append(textArea, btn);
    container.append(div);
}

function saveNote() {
    let notes = [];
    document.querySelectorAll('.note textarea').forEach((note) => notes.push(note.value));
    localStorage.setItem('notes', JSON.stringify(notes));
}

(function loadNotes() {
    const saved = JSON.parse(localStorage.getItem('notes')) || [];
    saved.forEach(createNote);
})