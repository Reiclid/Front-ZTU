function createInputElements(container, labelText, placeholder, type, divClass) {
    const inputDiv = document.createElement('div');
    inputDiv.classList.add(divClass);

    const inputLabel = document.createElement('label');
    inputLabel.textContent = labelText;

    const inputField = document.createElement('input');
    inputField.type = type;
    inputField.placeholder = placeholder;

    inputDiv.appendChild(inputLabel);
    inputDiv.appendChild(inputField);
    container.appendChild(inputDiv);
}

function createRadioButtons(container, labelText, name, options, divClass) {
    const radioDiv = document.createElement('div');
    radioDiv.classList.add(divClass);

    const radioLabel = document.createElement('label');
    radioLabel.textContent = labelText;

    radioDiv.appendChild(radioLabel);

    options.forEach(option => {
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = name;
        radio.value = option;

        radioDiv.appendChild(radio);
        radioDiv.appendChild(document.createTextNode(option));
    });

    container.appendChild(radioDiv);
}

function createSelectOptions(container, labelText, options, divClass) {
    const selectDiv = document.createElement('div');
    selectDiv.classList.add(divClass);

    const selectLabel = document.createElement('label');
    selectLabel.textContent = labelText;

    const select = document.createElement('select');

    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        select.appendChild(optionElement);
    });

    selectDiv.appendChild(selectLabel);
    selectDiv.appendChild(select);
    container.appendChild(selectDiv);
}

function createCheckboxes(container, labelText, options, divClass) {
    const checkboxDiv = document.createElement('div');
    checkboxDiv.classList.add(divClass);

    const checkboxLabel = document.createElement('label');
    checkboxLabel.textContent = labelText;

    checkboxDiv.appendChild(checkboxLabel);

    options.forEach(option => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = option;

        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(document.createTextNode(option));
    });

    container.appendChild(checkboxDiv);
}

function createButtons(container, divClass) {
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add(divClass);

    const clearButton = document.createElement('button');
    clearButton.type = 'reset';
    clearButton.textContent = 'Очистити';
    buttonsDiv.appendChild(clearButton);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Відправити';
    buttonsDiv.appendChild(submitButton);

    container.appendChild(buttonsDiv);
}

function createForm() {
    const form = document.createElement('form');
    
    // Логін
    createInputElements(form, 'Логін:', 'example@email.com', 'email', 'login-div');
    
    // Пароль
    createInputElements(form, 'Пароль:', 'Введіть пароль', 'password', 'password-div');
    
    // Повторіть пароль
    createInputElements(form, 'Повторіть пароль:', 'Введіть пароль ще раз', 'password', 'confirm-password-div');
    
    // Стать
    createRadioButtons(form, 'Стать:', 'gender', ['чоловік', 'жінка'], 'gender-div');
    
    // Місто
    createSelectOptions(form, 'Вкажіть місто:', ['Житомир', 'Київ', 'Львів'], 'city-div');
    
    // Інтереси
    createCheckboxes(form, 'Інтереси:', ['футбол', 'шахи', 'малювання', 'музика'], 'interests-div');
    
    // Кнопки
    createButtons(form, 'buttons-div');

    document.body.appendChild(form);
}

createForm();
