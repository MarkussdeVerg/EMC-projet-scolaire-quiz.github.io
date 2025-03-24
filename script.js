const questions = [
  {
      question: "C’est quoi le cyberharcèlement?",
      answers:[
          { text: "Lorsque quelqu'un est gentil avec toi en ligne", correct: false},
          { text: "Lorsque quelqu'un te fait du mal ou te menace en ligne", correct: true},
          { text: "Lorsque tu joues à des jeux en ligne avec tes amis", correct: false},
      ]
  },
  {
      question: "Si on t'embête ou t’insulte sur un réseau social, que dois-tu faire ?",
      answers:[
          { text: "Continuer à lui parler pour arranger la situation tout seul", correct: false},
          { text: "L’insulter en retour", correct: false},
          { text: "Bloquer la personne et en parler à un adulte", correct: true},
      ]
  },
  {
      question: "Est-ce que tout ce que l’on voit sur les réseaux sociaux est vrai ?",
      answers:[
          { text: "Certaines choses peuvent être fausses", correct: true},
          { text: "Tout ce qui est écrit est toujours vrai", correct: false},
          { text: "Les vidéos sont toujours bien faites donc oui/Oui si la chaîne a beaucoup d'abonnées", correct: false},
      ]
  },
  {
      question: "Que faire si un ami te demande de partager une photo embarrassante de quelqu’un d’autre ??",
      answers:[
          { text: "La partager pour rigoler", correct: false},
          { text: "Ne pas la partager et expliquer que ça peut blesser la personne/Non car ça va blesser la personne", correct: true},
          { text: "L'envoyer seulement à quelques amis", correct: false},
      ]
  },
  {
      question: "Pourquoi est-il important de limiter le temps passé sur les réseaux sociaux ?",
      answers:[
          { text: "Pour ne pas trop fatiguer ses yeux et avoir du temps pour d’autres activités", correct: true},
          { text: "Parce que les réseaux sociaux sont dangereux tout le temps", correct: false},
          { text: "Parce que les écrans ne sont jamais bons pour les enfants", correct: false},
      ]
  },
  {
      question: "Qu’est-ce que tu fais avant de poster une photo sur un réseau social ?",
      answers:[
          { text: "Tu vérifies que la photo est jolie", correct: false},
          { text: "Tu la postes tout de suite, sans réfléchir", correct: false},
          { text: "Tu demandes à un adulte proche si c’est une bonne idée de poster cette photo", correct: true},
      ]
  },
  {
      question: "Qu’est-ce que tu risques si tu cliques sur un lien suspect dans un message d’un inconnu ?",
      answers:[
          { text: "Rien du tout", correct: false},
          { text: "Le lien peut être dangereux et infecter ton ordinateur/téléphone… avec des virus.", correct: true},
          { text: "Rien si c'est un site d'une marque(?)", correct: false},
          { text: "Подпиши контракт и получи 300bucks", correct: false},
      ]
  },
  {
      question: "Que se passe-t-il si tu utilises trop ton écran pendant que tu fais tes devoirs ?",
      answers:[
          { text: "Жопа", correct: true},
          { text: "Ça ne change rien, tu peux faire tes devoirs comme d’habitude", correct: false},
          { text: "Ça te distrait et te rend moins concentré", correct: true},
          { text: "Rien sauf ce que tes devoirs finissent plus vite", correct: false},
      ]
  },
  {
      question: "Pourquoi les oiseaux volent ?",
      answers:[
          { text: "Parce qu'ils appartiennent aux milieux sociaux pauvres", correct: true},
          { text: "Parce qu'il est plus difficile de les choper", correct: true},
          { text: "Parce que...", correct: false},
          { text: "...euh je sais pas", correct: false},
      ]
  },
  {
      question: "Qu’est-ce qu’il faut faire si une personne que tu connais pas t’ajoute sur un réseau social ?",
      answers:[
          { text: "Tu lui envoies un message en lui demandant s' il va bien parce que tu es très gentil/lle", correct: false},
          { text: "Tu attends qu’il t’envoie un message", correct: false},
          { text: "Tu ignores la demande", correct: false},
          { text: "Tu ignires la demande et tu en parles à un adulte", correct: true},
      ]
  },
  {
      question: "Est-ce qu’il faut partager des informations personnelles (par exemple: ton école, ton âge, où tu habites….) sur  les réseaux sociaux ?",
      answers:[
          { text: "Non, il n’y a pas que des personnes gentilles sur les réseaux sociaux.", correct: true},
          { text: "Oui, tout le monde aime partager ses informations.", correct: false},
          { text: "On s’en fiche si on les partage ou pas, ça ne change rien.", correct: false},
          { text: "Pourquoi pas, je veux que mes amis sachent où et quand voler ma carte Mastercard", correct: false},
      ]
  },
  {
      question: "Qu'est-ce que tu dois faire si tu vois une personne se faire harceler en ligne ?",
      answers:[
          { text: "Tu l’ignores, ce n’est pas ton problème... et t'es une pute", correct: false},
          { text: "Tu rigoles avec les autres, c’est juste pour s’amuser", correct: false},
          { text: "Tu signales le ou les message(s) qui critiquent la personne et tu en parles à un adulte", correct: true},
      ]
  },
  {
      question: "Pourquoi le vent souffle ?",
      answers:[
          { text: "À cause des différences de température et de pression dans l'atmosphère", correct: true},
          { text: "Parce que les arbres bougent leurs branches", correct: false},
          { text: "À cause des avions qui volent", correct: false},
          { text: "Parce que la terre tourne très vite", correct: false},
      ]
  },
  {
      question: "Pourquoi les fleurs poussent ?",
      answers:[
          { text: "1", correct: false},
          { text: "1", correct: false},
          { text: "1", correct: false},
          { text: "1", correct: false},
      ]
  },
  {
      question: "Pourquoi les nuages bougent ?",
      answers:[
          { text: "1", correct: false},
          { text: "1", correct: false},
          { text: "1", correct: false},
          { text: "1", correct: false},
      ]
  },
  {
      question: "Pourquoi les montagnes sont hautes ?",
      answers:[
          { text: "1", correct: false},
          { text: "1", correct: false},
          { text: "1", correct: false},
          { text: "1", correct: false},
      ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  let content = questionNo + ". " + currentQuestion.question;
  if (currentQuestion.image) {
    content += `<br><img src="${currentQuestion.image}" style="max-width: 100%; height: 600px; object-fit: cover; border-radius: 8px; margin: 10px 0;">`;
  }
  questionElement.innerHTML = content;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();