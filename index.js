let submitData = (nameInput, emailInput) => {
  let inputData = {
    name: nameInput,
    email: emailInput
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(inputData)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(data => {
      document.body.innerHTML = data["id"]
    })
    .catch((error) => {
      document.body.innerHTML = error.message
    })
}
