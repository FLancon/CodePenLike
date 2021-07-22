
    const area = document.querySelector('textarea');
    const livecode = document.querySelector('p');
    const bold = document.getElementById('bold');
    const italic = document.getElementById('italic');
    const counter = document.querySelector('section span');
    const maxLength = area.getAttribute('maxlength');
    const elem = document.getElementById("myBar");
    const livecoding = document.getElementById('livecode');
  
    
area.addEventListener('input', function(){
  livecoding.innerHTML = area.value;
});

area.addEventListener('input', event => {

let valueLength = livecode.textContent.length;
let leftChartLength = maxLength - valueLength;

if(leftChartLength < 0) return;
counter.innerText = leftChartLength;
})


// Bouton bold
bold.addEventListener('click', function(){
  area.value += "<b></b>";
})
// Bouton Italic
italic.addEventListener('click', function(){
  area.value += "<i></i>";
})

area.onfocus = () => {
  document.getElementById('loader').style.setProperty('visibility','visible');
}
area.onblur = () => {
  document.getElementById('loader').style.setProperty('visibility','hidden');
}



function move() {

  let valueLength = livecode.textContent.length;
  let progress = 100*valueLength/maxLength;

  //Modifie la largeur de la ProgressBar "myBar" selon le nombre de caractère "valueLength"
  elem.style.width = (progress) + "%";

  //Modifie la couleur de la ProgressBar "myBar" selon le nombre de de caractère "Value Length" :
  if (progress < 20) {
    elem.style.setProperty('background', "green");
  }

  else if (progress >= 20 && progress < 50) {
    elem.style.setProperty('background', "gold");
  }

  else if (progress >= 50 && progress < 80) {
    elem.style.setProperty('background', "orange");
  }
  else {
    elem.style.setProperty('background', "red");
  }
}
