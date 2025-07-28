const quiz = [
    { q: "What is the Capital Of Karnataka ?", o: ["Mangalore", "Bangalore", "Hassan", "Mysore"], a: 1 },
    { q: "2 + 2 = ?", o: [2, 8, 4, 6], a: 2 },
    { q: "Which is the Javascript Framework ?", o: ['React', 'Django', 'Spring', 'Linux'], a: 0 }
];

let current = 0, score = 0;

function loadQuestion() {
    if (current >= quiz.length) return;
    const q = quiz[current];
    document.getElementById('question').textContent = q.q;
    const options = document.getElementById('options');
    options.innerHTML = '';
    q.o.forEach((op, i) => {
        const btn = document.createElement('button');
        btn.textContent = op;
        btn.onclick = () => {
            checkAnswer(i);
        }
        options.appendChild(btn);
    })
}

function checkAnswer(i) {
    if (current >= quiz.length) return;
    if (i === quiz[current].a) score++;
    current++;
    if (current < quiz.length)
        loadQuestion();
    else {
        document.getElementById('question').textContent = '';
        document.getElementById('options').textContent = '';
        document.getElementById('score').textContent = `Score : ${score}/${quiz.length}`;
    }
}

loadQuestion();