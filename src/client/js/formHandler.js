const handleSubmit = (event) => {
  event.preventDefault();

  // check what type of text was put into the form field
  const formText = document.getElementById("name").value;
  const objectData = Client.checkForName(formText);

  if (formText === "") {
    alert("all fields should be completed");
    evt.preventDefault();
    return;
  }

  fetch(`api/feeling?mode=${objectData.mode}&value=${objectData.value}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      saveData(res.respond);
    })
    .catch((err) => console.log("handleSubmit Error:", err));
};

const saveData = (dataObject) => {
  fetch("api/feeling", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataObject),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.ok) {
        updateUI(res.respond);
      }
    })
    .catch((err) => console.log("saveData Error:", err));
};

const updateUI = (response) => {
  cleanForm();
  const newP = document.createElement("p");
  newP.textContent = `text: ${response.text} | polarity: ${response.polarity} | polarity_confidence: ${response.polarity_confidence} | subjectivity: ${response.subjectivity} | subjectivity_confidence: ${response.subjectivity_confidence}`;
  const resultsDiv = document.getElementById("results");
  resultsDiv.appendChild(newP);
};

const cleanForm = () => {
  document.getElementById("name").value = "";
};

export { handleSubmit, saveData };
