// Récupération des différents éléments
const introParagraph = document.querySelector("p");
const container = document.querySelector(".quiz__container");
const questionBox = document.querySelector(".question");
const choicesBox = document.querySelector(".choices");
const nextBtn = document.querySelector(".nextBtn");
const scoreCard = document.querySelector(".score__card");
const alert = document.querySelector(".alert");
const startBtn = document.querySelector(".startBtn");

// Make an array of objects that stores question, choices of question and answer
const quiz = [
  {
    question: "Q. Quelle race de chiens est associée au LOSC Lille ?",
    choices: ["Le bouvier des Flandres", "Le berger du Nord", "Le dogue"],
    answer: "Le dogue",
  },
  {
    question:
      "Q. Quel club est souvent présenté comme 'le club doyen' du football français ?",
    choices: ["Le Havre AC", " Le RC Lens", "Le Stade de Reims"],
    answer: "Le Havre AC",
  },
  {
    question:
      "Q. En 2018-2019, quel club est promu en Ligue 1, vingt-cinq ans après avoir quitté la Première Division ?",
    choices: ["Le Nîmes Olympique", "Le Stade de Reims", "L'Amiens SC"],
    answer: "Le Nîmes Olympique",
  },
  {
    question:
      "Q. Le club de Sedan a marqué le championnat de France dans les années 1960. Comment sont surnomés ses joueurs ?",
    choices: ["Les Bisons", "Les Buffles", "Les Sangliers"],
    answer: "Les Sangliers",
  },
  {
    question: "Q. Quel est le surnom des joueurs de l'Olympique Lyonnais ?",
    choices: ["Les Poulbots", "Les Minots", "Les Gones"],
    answer: "Les Gones",
  },
  {
    question:
      "Q. Après 45 ans d'absence au plus haut niveau, quel club de l'Isère a connu la Ligue 1 entre 2008 et 2010 avant de redevenir amateur en 2011 ?",
    choices: ["L'Evian TG FC", "Le Grenoble Foot 38", "Le SO Chambéry Foot"],
    answer: "Le Grenoble Foot 38",
  },
  {
    question:
      "Q. Lors de la saison 1955-1956, lorsque Raymond Kopa est parti au Real Madrid, le Stade de Reims est allé chercher son remplaçant à l'OGC Nice. De qui s'agit-il ?",
    choices: ["Charly Loubet", "Just Fontaine", "Antoine Cuissard"],
    answer: "Just Fontaine",
  },
  {
    question:
      "Q. Au début des années 2000, le plus long règne a été celui de l'Olympique Lyonnais. Combien de titre consécutifs le club a-t-il remportés ?",
    choices: ["7", "8", "10"],
    answer: "7",
  },
  {
    question:
      "Q. Quel est le premier club a avoir obtenu dix titres de champion de France ?",
    choices: [
      "L'AS Saint-Etienne",
      "L'Olympique de Marseille",
      "Le Paris Saint-Germain",
    ],
    answer: "L'AS Saint-Etienne",
  },
  {
    question:
      "Q. Lors de quelle saison le championnat de France a-t-il changé de nom pour passer de la Première Division à la Ligue 1 ?",
    choices: ["1999-2000", "2000-2001", "2002-2003"],
    answer: "2002-2003",
  },
  {
    question:
      "Q. Quel gardien de but est reconnu comme le premier buteur dans le jeu et non sur penalty de l'histoire du championnat ?",
    choices: [
      "Grégory wimbéé (AS Nancy-Lorraine)",
      "Bernard Lama (Paris Saint-Germain",
      "Ali Ahamada (Toulouse FC)",
    ],
    answer: "Grégory wimbéé (AS Nancy-Lorraine)",
  },
  {
    question:
      "Q. En 2004, le groupe Mickey 3D a rendu hommage à un joueur de l'ASSE dans une chanson intitulée : ",
    choices: ["Michel Platini", "Dominique Rocheteau", "Johnny Rep"],
    answer: "Johnny Rep",
  },
  {
    question:
      "Q. Quel footballeur tahitien, révélé par le FC Nantes, était célébre pour fêter ses buts en faisant mine de pagayer sur le terrain ?",
    choices: ["Marama Vahirua", "Pascal Vahirua", "Christian Karembeu"],
    answer: "Marama Vahirua",
  },
  {
    question:
      "Q. A quel poste Laurent Blanc a-t-il débuté sa carrière (au Montpellier Hérault SC) ?",
    choices: ["Gardien de but", "Milieu offensif", "Défenseur central"],
    answer: "Milieu offensif",
  },
  {
    question:
      "Q. Quel est le seul joueur français ayant obtenu un Ballon d'Or alors qu'il évoluait encore dans le championnat de France ?",
    choices: ["Raymond Kopa", "Michel Platini", "Jean-Pierre Papin"],
    answer: "Jean-Pierre Papin",
  },
  {
    question:
      "Q. Le Brésilien Juninho excellait dans l'art de tirer les coups francs. Sur les 100 buts qu'il a inscrits pour Lyon, combien l'étaient sur coup franc ?",
    choices: ["28", "36", "44"],
    answer: "44",
  },
  {
    question:
      "Q. A partir de quelle saison est apparue définitivement la règle de la victoire à trois points ?",
    choices: ["2000-2001", "1990-1991", "1994-1995"],
    answer: "1994-1995",
  },
  {
    question:
      "Q. Quel est le joueur ayant disputé le plus grand nombre de matchs en championnat de France (618) ?",
    choices: ["Mickaël Landreau", "Jean-Luc Ettori", "Dominique Dropsy"],
    answer: "Mickaël Landreau",
  },
  {
    question: "Q. Quel est le tout premier champion de France de football ?",
    choices: [
      "L'Olympique Lillois",
      "Le RC Paris",
      "Le FC Sochaux Montbéliard",
    ],
    answer: "L'Olympique Lillois",
  },
  {
    question:
      "Q. Quel est le premier club à avoir remporté le championnat de France sept fois de suite ?",
    choices: [
      "L'Olympique de Marseille",
      "Le Paris Saint-Germain",
      "L'Olympique Lyonnais",
    ],
    answer: "L'Olympique Lyonnais",
  },
];

// Création des variables
let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;

// Fonction showQuestions qui va permettre d'afficher les questions
const showQuestions = () => {
  const questionDetails = quiz[currentQuestionIndex];
  questionBox.textContent = questionDetails.question;

  choicesBox.textContent = "";
  // Boucle for qui va parcourir le tableau des choix de réponse
  for (let i = 0; i < questionDetails.choices.length; i++) {
    const currentChoice = questionDetails.choices[i];
    // Création et ajout d'un élément div dans le DOM
    const choiceDiv = document.createElement("div");
    choiceDiv.textContent = currentChoice;
    choiceDiv.classList.add("choice");
    choicesBox.appendChild(choiceDiv);

    // Ecoute de l'événement "click" sur la réponse choisie par l'internaute
    choiceDiv.addEventListener("click", () => {
      if (choiceDiv.classList.contains("selected")) {
        choiceDiv.classList.remove("selected");
      } else {
        choiceDiv.classList.add("selected");
      }
    });
  }
};

// Fonction checkAnswer qui va permettre de vérifier si la réponse est la bonne ou pas
const checkAnswer = () => {
  const selectedChoice = document.querySelector(".choice.selected");
  if (selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
    //Appel de la fonction displayAlert
    displayAlert("Bonne réponse !");
    // Incrémentation du score
    score++;
  } else {
    // Appel de la fonction displayAlert
    displayAlert(
      `Mauvaise réponse ! ${quiz[currentQuestionIndex].answer} était la bonne réponse !`
    );
  }

  // Passage à la question suivante
  currentQuestionIndex++;
  if (currentQuestionIndex < quiz.length) {
    // Appel de la fonction showQuestions
    showQuestions();
  } else {
    // Appel de la fonction showScore
    showScore();
  }
};

// Fonction showScore qui va permettre l'affichage du score
const showScore = () => {
  questionBox.textContent = "";
  choicesBox.textContent = "";
  scoreCard.textContent = `Ton score est de ${score} sur ${quiz.length} !`;
  //Appel de la fonction displayAlert
  displayAlert("Le quizz est terminé !");
  nextBtn.textContent = "Rejouer !";
  quizOver = true;
};

// Fonction DisplayAlert ayant pour paramètre msg (le message)
const displayAlert = (msg) => {
  alert.style.display = "block";
  alert.textContent = msg;
  setTimeout(() => {
    alert.style.display = "none";
  }, 2000);
};

// Fonction shuffleQuestions pour jouer les questions dans un ordre aléatoire
const shuffleQuestions = () => {
  for (let i = quiz.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
  }
  currentQuestionIndex = 0;
  // Appel de la fonction showQuestions
  showQuestions();
};

// Fonction startQuiz pour débuter le quizz
const startQuiz = () => {
  introParagraph.style.display = "none";
  // Appel de la fonction shuffleQuestions
  shuffleQuestions();
};

// Ecoute de l'événement "click" sur le bouton "commencer"
startBtn.addEventListener("click", () => {
  introParagraph.style.display = "none";
  startBtn.style.display = "none";
  container.style.display = "block";
  // Appel de la fonction startQuiz
  startQuiz();
});

// Ecoute de l'événement "click" sur le bouton question suivante
nextBtn.addEventListener("click", () => {
  const selectedChoice = document.querySelector(".choice.selected");
  if (!selectedChoice && nextBtn.textContent === "Question suivante") {
    // Appel de la fonction displayAlert
    displayAlert("Choisis une réponse");
    return;
  }
  if (quizOver) {
    nextBtn.textContent = "Question suivante";
    scoreCard.textContent = "";
    currentQuestionIndex = 0;
    quizOver = false;
    score = 0;
    // Appel de la fonction startQuiz
    startQuiz();
  } else {
    // Appel de la fonction checkAnswer
    checkAnswer();
  }
});
