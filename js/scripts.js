//declaring variables
  // let choicesArray=document.getElementsByTagName('input');

  // let form = document.querySelector("#quiz")
  // let submit  = document.querySelector("#submit")
  // let reset  = document.querySelector("#reset")

  // console.log(form)

window.addEventListener('load', function() {
  let choicesArray=document.getElementsByTagName('input');
  let form = document.querySelector("#quiz")
  let submit  = document.querySelector("#submit")
  let reset  = document.querySelector("#reset")

}) 

form.addEventListener('submit', e => {
    e.preventDefault();

    let choice1=0;
    let choice2=0;
    let choice3=0;

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
})

form.addEventListener('reset', e => {
  choice1=0;
  choice2=0;
  choice3=0;
})

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
  
  