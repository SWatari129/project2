function getResults() {
  let name = "q1";
  if (document.getElementById('radio1').checked == true) {
    name = "JavaScript";
  } else if (document.getElementById('radio2').checked == true) {
    name = "C#";
  } else if (document.getElementById('radio3').checked == true) {
    name = "Ruby";
  }
  document.getElementById('outputBox').innerHTML = name;
}


document.getElementById("submit").addEventListener("onclick"); {
  preventDefault()
};
