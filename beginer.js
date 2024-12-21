/*частинки сторінки*/
let block3 = document.getElementById("selection2")
let block2 = document.getElementById("selection1")
let block4 = document.getElementById("selection3")
let resoults = document.getElementById("res")
let options = document.getElementById("options");
/*кнопки*/
let button1 = document.querySelector(".box1")
let button2 = document.querySelector(".box2")
let start = document.querySelector(".start")
let next = document.querySelector(".next")
let back = document.querySelector(".back")
let finish = document.querySelector(".finish")
let btopics = document.querySelector(".btopics")
/*ховається*/
block3.style.display = "none"
block4.style.display = "none"
resoults.style.display = "none"
options.style.display = "none"; 

next.style.display = "none";
back.style.display = "none";

start.onclick = showQuestions;

function showQuestions (){
    options.style.display = "block";
    next.style.display = "block"
    back.style.display = "block"
    displayQuestion();
    back.onclick = goBack;
    next.onclick = checkAnswer;
}

const questions = [
    {
      question: "I ... 16 years old",
      options: ["am", "is", "are"],
      correctAnswer: 0
    },
    {
      question: "How ... you?",
      options: ["are", "am", "is"],
      correctAnswer: 0
    },
    {
      question: "They ... (to be) my friends",
      options: ["am", "is", "are"],
      correctAnswer: 2
    },
    {
        question: "This ... my favorite book",
        options: ["am", "is", "are"],
        correctAnswer: 1
    },
    {
        question: "The children ... on the playground",
        options: ["am", "is", "are"],
        correctAnswer: 2
    }
  ];

let currentQuestion = 0;
let score = 0;
let selectedOptionIndex = null;

  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
  
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";
    selectedOptionIndex = null;
  
    const optionsContainer = document.createElement("div");
    optionsContainer.style.display = "flex";
    optionsContainer.style.justifyContent = "center";
    optionsContainer.style.gap = "10px";
  
    questions[currentQuestion].options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option-button");
      button.onclick = () => selectOption(index, button);
      optionsContainer.appendChild(button);
    });
  
    optionsElement.appendChild(optionsContainer);
    
    if (back) {
        back.style.display = currentQuestion === 0?"none":"block";
    }
  }

  function selectOption(index, button) {
    const options = document.querySelectorAll(".option-button");
    options.forEach(btn => btn.classList.remove("selected"));
  
    button.classList.add("selected");
    selectedOptionIndex = index;
  }

  function goBack(){
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
  }

  function checkAnswer() {
    if (selectedOptionIndex === null) {
      alert("Виберіть, будь ласка, відповідь");
      return;
    }
  
    if (selectedOptionIndex === questions[currentQuestion].correctAnswer) {
      score++;
    } 
    currentQuestion++;
    if (currentQuestion === 4) {
      next.style.fontSize = "18px"
      next.textContent = "Закінчити тест";
    } else {
      next.textContent = "Далі";
    }

    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }

  function displayResult() {
    const quizElement = document.getElementById("res");
    quizElement.style.display = "block";
    quizElement.innerHTML = `<h2 class="result"> Ваш результат: ${score} з ${questions.length}</h2>`;

    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    next.style.display = "none";
    back.style.display = "none"; 
    
    questionElement.style.display = "none"; 
    optionsElement.style.display = "none"; 

    const btopicsButton = document.createElement('button');
    btopicsButton.className = 'btopics';
    btopicsButton.textContent = 'Повернутися до тем';
    btopicsButton.addEventListener('click', function() {
      document.getElementById("selection1").style.display = "block";
      quizElement.style.display = "none"; 
      btopicsButton.style.display = "none";

    });
    const resultsContainer = document.querySelector('.resoults');
    resultsContainer.parentNode.insertBefore(btopicsButton, resultsContainer.nextSibling);
  }

button1.addEventListener('click', function showhide(){
    block2.style.display = "none"
    block3.style.display = "block"
})
button2.addEventListener('click', function showhide(){
    block2.style.display = "none"
    block4.style.display = "block"
})
start.addEventListener('click', function showhide(){
    block3.style.display = "none"
})




