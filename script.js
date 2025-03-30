
const quizData = [
  {
    question: "En quelle année le réseau Bitcoin a-t-il été mis en service ?",
    options: ["2005", "2009", "2013", "2017"],
    answer: [1]
  },
  {
    question: "Quel pseudonyme est associé à la création de Bitcoin ?",
    options: ["Vitalik Buterin", "Elon Musk", "Satoshi Nakamoto", "Charles Hoskinson"],
    answer: [2]
  },
  {
    question: "Parmi les choix suivants, que représente Bitcoin ?",
    options: ["Une entreprise cotée en bourse", "Une monnaie numérique décentralisée", "Une carte bancaire", "Un logiciel de paiement mobile"],
    answer: [1]
  },
  {
    question: "Combien de bitcoins pourront être créés au maximum ?",
    options: ["Un milliard", "100 millions", "21 millions", "Illimité"],
    answer: [2]
  },
  {
    question: "Quel outil est utilisé pour conserver ses bitcoins ?",
    options: ["Une carte SIM", "Un portefeuille numérique (wallet)", "Un compte bancaire", "Un mot de passe"],
    answer: [1]
  },
  // 25 questions restantes à compléter…
];

const explanations = [
  "C’est l’année du lancement officiel du réseau Bitcoin, avec le premier bloc (Genesis Block) miné par Satoshi Nakamoto.",
  "Il s'agit du pseudonyme utilisé par le ou les créateurs de Bitcoin. Son identité réelle est encore inconnue.",
  "Bitcoin n'est ni une entreprise ni une carte bancaire. Il s'agit d’un protocole monétaire ouvert.",
  "L'offre totale de bitcoins est limitée dès le départ à 21 millions, ce qui permet de contrôler l'inflation.",
  "Un wallet permet de gérer les clés privées et d’accéder à ses bitcoins. Ce n’est pas un compte bancaire.",
  // 25 explications restantes à compléter…
];

const form = document.getElementById("quizForm");
const progressBar = document.getElementById("progress-bar");

quizData.forEach((q, index) => {
  const container = document.createElement("div");
  container.className = "question";
  const title = document.createElement("p");
  title.innerHTML = `${index + 1}. ${q.question}`;
  container.appendChild(title);

  const answersDiv = document.createElement("div");
  answersDiv.className = "answers";

  q.options.forEach((opt, i) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = q.answer.length > 1 ? "checkbox" : "radio";
    input.name = "q" + index;
    input.value = i;
    input.onchange = updateProgress;
    label.appendChild(input);
    label.appendChild(document.createTextNode(" " + opt));
    answersDiv.appendChild(label);
  });

  container.appendChild(answersDiv);
  form.appendChild(container);
});

function updateProgress() {
  let total = quizData.length;
  let answered = 0;
  quizData.forEach((_, i) => {
    const selected = document.querySelectorAll(`[name=q${i}]:checked`);
    if (selected.length > 0) answered++;
  });
  const percent = (answered / total) * 100;
  progressBar.style.width = percent + "%";
}

function submitQuiz() {
  let score = 0;
  let feedback = "";

  quizData.forEach((q, index) => {
    const selected = Array.from(document.querySelectorAll(`[name=q${index}]:checked`)).map(el => parseInt(el.value));
    selected.sort();
    const correct = [...q.answer].sort();

    const isCorrect = JSON.stringify(selected) === JSON.stringify(correct);
    if (isCorrect) {
      score++;
    } else {
      feedback += `<div class='question'><strong>${index + 1}. ${q.question}</strong><br>`;
      feedback += `<div class='incorrect'>Votre réponse : ${selected.map(i => q.options[i] || "(non répondu)").join(', ')}</div>`;
      feedback += `<div class='correct'>Bonne réponse : ${correct.map(i => q.options[i]).join(', ')}</div>`;
      feedback += `<div class='explanation'>${explanations[index]}</div></div>`;
    }
  });

  document.getElementById("result").innerHTML =
    `<h2>Résultat : ${score} / ${quizData.length}</h2>` + feedback;
}
