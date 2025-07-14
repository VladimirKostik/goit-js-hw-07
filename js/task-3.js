const nameInput = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

const nameChange = () => {
  const trimmedValue = nameInput.value.trim();

  if (trimmedValue === "") {
    span.textContent = "Anonymous";
    span.style.color = "black";
  } else {
    span.textContent = trimmedValue;
    span.style.color = "#2E2F42";
  }
};

nameInput.addEventListener("input", nameChange);