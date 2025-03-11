const button = document.querySelector("button");

const buttonClickHandler = (e) => {
  console.log(e);
};

const anotherButtonClickHandler = () => {
  console.log("This was clicked");
};

const boundFn = buttonClickHandler.bind(this);

button.addEventListener("click", buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);

b;
