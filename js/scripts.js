//declaring variables

const form = document.querySelector("#quiz");
const feedback = document.querySelector("#quiz");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const q1 = document.querySelector("input[name=q1]:checked").value;
  const q2 = document.querySelector("input[name=q2]:checked").value;
  const q3 = document.querySelector("input[name=q3]:checked").value;
  const q4 = document.querySelector("input[name=q4]:checked").value;
  const q5 = document.querySelector("input[name=q5]:checked").value;


    

  for(let i=0; i<choicesArray.length;i++) {
    if(choicesArray[i].checked) {
      if(choicesArray[i].value === 'c1') {
        choice1=choice1+1;
      }
      if(choicesArray[i].value === 'c2') {
        choice2=choice2+1;
      }
      if(choicesArray[i].value === 'c3') {
        choice3=choice3+1;
      }
    }  
  }
  let totalScore=Math.max(choice1,choice2,choice3);

    let surveyResponse;
      if(choice1==totalScore) {
      surveyResponse="Ruby";
    }
      if(choice2==totalScore) {
      surveyResponse="JavaScript";
    }
      if(choice3==totalScore) {
      surveyResponse="C#";
    }
    alert("Your Programing Language is " + surveyResponse);

    let output = document.getElementById('#output')

    output.textContent = "Hello!"
  }