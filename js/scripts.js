//declaring variables



function getResults(){
  let choice1=0;
  let choice2=0;
  let choice3=0;

  let choicesArray=document.getElementsByTagName('input');

let q1 = document.getElementById('q1')
let q2 = document.getElementById('q2')
let q3 = document.getElementById('q3')
let q4 = document.getElementById('q4')
let q5= document.getElementById('q5')

console.log(q1, q2, q3, q4, q5)


    

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