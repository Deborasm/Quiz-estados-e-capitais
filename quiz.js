const questions = [
    {
        question: "Qual é a capital do Acre?",
        options: ["Rio Branco", "Porto Alegre", "Recife"],
        answer: "Rio Branco"
    },
    {
        question: "Qual é a capital de Alagoas?",
        options: ["Maceió", "Belo Horizonte", "Salvador"],
        answer: "Maceió"
    },
    {
        question: "Qual é a capital do Amapá?",
        options: ["Macapá", "Manaus", "Curitiba"],
        answer: "Macapá"
    },
    {
        question: "Qual é a capital do Amazonas?",
        options: ["Manaus", "Fortaleza", "Belém"],
        answer: "Manaus"
    },
    {
        question: "Qual é a capital da Bahia?",
        options: ["Salvador", "São Paulo", "Rio de Janeiro"],
        answer: "Salvador"
    },
    {
        question: "Qual é a capital do Ceará?",
        options: ["Fortaleza", "Recife", "Natal"],
        answer: "Fortaleza"
    },
    {
        question: "Qual é a capital do Distrito Federal?",
        options: ["Brasília", "Goiânia", "Campo Grande"],
        answer: "Brasília"
    },
    {
        question: "Qual é a capital do Espírito Santo?",
        options: ["Vitória", "Florianópolis", "Porto Alegre"],
        answer: "Vitória"
    },
    {
        question: "Qual é a capital de Goiás?",
        options: ["Goiânia", "Brasília", "Cuiabá"],
        answer: "Goiânia"
    },
    {
        question: "Qual é a capital do Maranhão?",
        options: ["São Luís", "Teresina", "Belém"],
        answer: "São Luís"
    },
    {
        question: "Qual é a capital do Mato Grosso?",
        options: ["Cuiabá", "Campo Grande", "Porto Velho"],
        answer: "Cuiabá"
    },
    {
        question: "Qual é a capital do Mato Grosso do Sul?",
        options: ["Campo Grande", "Cuiabá", "Palmas"],
        answer: "Campo Grande"
    },
    {
        question: "Qual é a capital de Minas Gerais?",
        options: ["Belo Horizonte", "São Paulo", "Rio de Janeiro"],
        answer: "Belo Horizonte"
    },
    {
        question: "Qual é a capital do Pará?",
        options: ["Belém", "Manaus", "Macapá"],
        answer: "Belém"
    },
    {
        question: "Qual é a capital da Paraíba?",
        options: ["João Pessoa", "Recife", "Fortaleza"],
        answer: "João Pessoa"
    },
    {
        question: "Qual é a capital do Paraná?",
        options: ["Curitiba", "Porto Alegre", "Florianópolis"],
        answer: "Curitiba"
    },
    {
        question: "Qual é a capital de Pernambuco?",
        options: ["Recife", "João Pessoa", "Maceió"],
        answer: "Recife"
    },
    {
        question: "Qual é a capital do Piauí?",
        options: ["Teresina", "São Luís", "Natal"],
        answer: "Teresina"
    },
    {
        question: "Qual é a capital do Rio de Janeiro?",
        options: ["Rio de Janeiro", "São Paulo", "Belo Horizonte"],
        answer: "Rio de Janeiro"
    },
    {
        question: "Qual é a capital do Rio Grande do Norte?",
        options: ["Natal", "Recife", "João Pessoa"],
        answer: "Natal"
    },
    {
        question: "Qual é a capital do Rio Grande do Sul?",
        options: ["Porto Alegre", "Curitiba", "Florianópolis"],
        answer: "Porto Alegre"
    },
    {
        question: "Qual é a capital de Rondônia?",
        options: ["Porto Velho", "Cuiabá", "Manaus"],
        answer: "Porto Velho"
    },
    {
        question: "Qual é a capital de Roraima?",
        options: ["Boa Vista", "Macapá", "Manaus"],
        answer: "Boa Vista"
    },
    {
        question: "Qual é a capital de Santa Catarina?",
        options: ["Florianópolis", "Curitiba", "Porto Alegre"],
        answer: "Florianópolis"
    },
    {
        question: "Qual é a capital de São Paulo?",
        options: ["São Paulo", "Belo Horizonte", "Rio de Janeiro"],
        answer: "São Paulo"
    },
    {
        question: "Qual é a capital de Sergipe?",
        options: ["Aracaju", "Maceió", "Recife"],
        answer: "Aracaju"
    },
    {
        question: "Qual é a capital do Tocantins?",
        options: ["Palmas", "Goiânia", "Manaus"],
        answer: "Palmas"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }

    scoreElement.textContent = `Pontuação: ${score}`;
}

function endQuiz() {
    questionText.textContent = "Quiz finalizado!";
    optionsContainer.innerHTML = "";
    scoreElement.textContent = `Sua pontuação final: ${score}`;
}

loadQuestion();
