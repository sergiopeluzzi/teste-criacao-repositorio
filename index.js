function saveLS(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

function getLS() {
    return JSON.parse(localStorage.getItem("user"));
}

function getData() {
    const nomeElement = document.querySelector("#nome").value;
    const idadeElement = document.querySelector("#idade").value;

    return {
        nome: nomeElement,
        idade: idadeElement,
    };
}

function saveData() {
    const data = getLS() || [];
    data.push(getData());

    saveLS(data);
}

function renderSelect() {
    const data = getLS();

    const selectElement = document.querySelector("#select-pessoas");

    data.forEach((user, index) => {
        const optionElement = document.createElement("option");

        optionElement.setAttribute("value", index + 1);
        optionElement.innerHTML = user.nome;

        selectElement.appendChild(optionElement);
    });
}
