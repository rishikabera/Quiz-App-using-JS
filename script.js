const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
 const quesElement= document.getElementById("question");
 const answers= document.querySelectorAll('.answer');
 const quizEl= document.getElementById("quiz");
let score=0;




const quizData=[

{
    question:'What Los Angeles community is noted for celebrities and mansions?',
    a: 'Nob Hill',
    b: 'Beverly Hills',
    c: 'Chestnut Hill',
    d: 'Bunker Hill',
    correct:'b'


},{
question:'Which country has the largest capacity reservoir in the world?',
    a: 'Egypt',
    b: 'United States',
    c: 'Uganda',
    d: 'Brazil',
    correct:'c'
},
{
    question: 'Substances that have fast-moving particles that are far apart, and have no definite volume nor shape are:',
    a:'Gases',
    b:'Liquids',
    c:'Solids',
    correct: 'a'
},
{

    question:'Which state is known as the “Beehive State”?',
    a: 'North Dakota',
    b: 'Oregon',
    c:'Georgia',
    d: 'Utah',
    correct: 'd'
}

];

let currentQuiz=0;

loadQuiz();

function loadQuiz()
{
    const currentQuizData=quizData[currentQuiz];
    
    quesElement.innerHTML= currentQuizData.question;
    a_text.innerHTML=currentQuizData.a;
    b_text.innerHTML=currentQuizData.b;
    c_text.innerHTML=currentQuizData.c;
    d_text.innerHTML=currentQuizData.d;
   
}

function getSelected()
{

    let answer= undefined;
    answers.forEach((ans)=>{

        if(ans.checked)
        {
            answer=ans.id;
        }
    })

    return answer;

}


submitBtn.addEventListener("click",()=>{

    const answer= getSelected();

    if(answer)
    {
        if(answer==quizData[currentQuiz].correct)
        {
            score++;
        }
    }


    currentQuiz++;
    if(currentQuiz<quizData.length){
    loadQuiz();
    }
    else{

        quizEl.innerHTML=
        `<h2>You have answered correctly at ${score}/${quizData.length}</h2>
        <button onclick="location.reload()">Reload</Button>
        `;
        
    }
});