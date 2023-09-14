let surveyTarget = document.getElementById("surveyTarget");
let resultTarget = document.getElementById("resultTarget");
let pointSpace = document.getElementById("pointSpace");
let flag = false;
let califForm = null;

const start = (surveyTarget, resultTarget) => {
  surveyTarget.style.display = "flex";
  resultTarget.style.display = "none";
};

const verifyCheck = (califForm) => {
  for (var i = 0; i <= 4; i++) {
    if (califForm[i].checked == true) {
      flag = true;
      break;
    } else {
      flag = false;
    }
  }
  return flag;
};

const submit = () => {
  califForm = document.getElementById("califForm");
  var status = verifyCheck(califForm);

  if (status == true) {
    surveyTarget.style.display = "none";
    resultTarget.style.display = "flex";

    let calification = califForm.querySelector(
      'input[name="cal"]:checked'
    ).value;
    pointSpace.innerText = calification;
  } else {
    console.log("No has seleccionado nada");
  }
};

start(surveyTarget, resultTarget);
submitButton.addEventListener("click", submit);
