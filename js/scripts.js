window.addEventListener("load", function () {
  const form = document.querySelector("#quiz");
  const feedback = document.getElementById("feedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    feedback.innerHTML = "";

    const q1 = document.querySelector("input[name=q1]:checked").value;
    const q2 = document.querySelector("input[name=q2]:checked").value;
    const q3 = document.querySelector("input[name=q3]:checked").value;
    const q4 = document.querySelector("input[name=q4]:checked").value;
    const q5 = document.querySelector("input[name=q5]:checked").value;

    choicesArray = [q1, q2, q3, q4, q5];

    function getResults() {
      let choice1 = 0;
      let choice2 = 0;
      let choice3 = 0;

      for (let i = 0; i < choicesArray.length; i++) {
        if (choicesArray.length > 0) {
          if (choicesArray[i] === "c1") {
            choice1++;
          }
          if (choicesArray[i] === "c2") {
            choice2++;
          }
          if (choicesArray[i] === "c3") {
            choice3++;
          }
        }
      }

      if (choice1 > choice2 && choice3) {
        return "Ruby";
      } else if (choice2 > choice1 && choice3) {
        return "JavaScript";
      } else {
        return "C#";
      }
    }

    let answer = getResults();
    feedback.innerHTML += `Your Programing Language is ${answer}`;
  });
});


    
  // let totalScore=Math.max(choice1,choice2,choice3);

  //   let surveyResponse;
  //     if(choice1==totalScore) {
  //     surveyResponse="Ruby";
  //   }
  //     if(choice2==totalScore) {
  //     surveyResponse="JavaScript";
  //   }
  //     if(choice3==totalScore) {
  //     surveyResponse="C#";
  //   }
  //   alert("Your Programing Language is " + surveyResponse);

  //   let output = document.getElementById('#output')

  //   output.textContent = "Hello!"
  // }