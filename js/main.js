const elForm = document.querySelector(".js-form");
const elList = document.querySelector(".js-list");
let elInput = document.querySelector(".js-input");
let elTemplate = document.querySelector(".js-template").content;

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  if (elInput.value !== "" && !isNaN(elInput.value)) {
    const newTemplate = elTemplate.cloneNode(true);
    let newSpinner = newTemplate.querySelector(".js-spinner");
    let newText = newTemplate.querySelector(".js-text");

    let elInputVal = elInput.value;

    const interval = setInterval(() => {
      newText.textContent = elInputVal--;

      if (elInputVal < 3) {
        console.log(newSpinner);
        newSpinner.style.backgroundColor = "#ff0000";
      }
    }, 1000);

    elList.appendChild(newSpinner);

    setTimeout(() => {
      clearInterval(interval);
      elList.removeChild(newSpinner);
    }, +elInputVal * 1000);
  }
});

// let time = 70; // inputdan kegan value

// function timeSplit(time) {
//   let min = Math.floor(time / 60);
//   let sec = time - min * 60;

//   return `${min}:${sec}`;
// }

// console.log(timeSplit(time));
