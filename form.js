function checkValidation() {

    //remove all error message elements
    document.querySelectorAll('.errorMessage').forEach(e => e.remove());

    //patterns
    const nameRegExp = /^[-a-zA-Z\u0410-\u044F`]+$/;
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const numberRegExp = /^\d+$/;
    const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    //name
    let name = String(document.getElementById("name").value).trim();
    if (name === "") {
        document.getElementById("nameError").innerHTML += "<span class='errorMessage'>Введите имя</span>";
    } else {
        let isName = nameRegExp.test(name);
        if (isName === false) {
            document.getElementById("nameError").innerHTML += "<span class='errorMessage'>Имя не может содержать цифры, символы и точки с запятой</span>";
        }
    }

    //surname
    let surname = String(document.getElementById("surname").value).trim();
    if (surname === "") {
        document.getElementById("surnameError").innerHTML += "<span class='errorMessage'>Введите фамилию</span>";
    } else {
        let isSurname = nameRegExp.test(surname);
        if (isSurname === false) {
            document.getElementById("surnameError").innerHTML += "<span class='errorMessage'>Фамилия не может содержать цифры, символы и точки с запятой</span>";
        }
    }

    //sex
    var sex = document.querySelector(
        'input[name="sex"]:checked');

    if (sex == null) {
        document.getElementById("sexError").innerHTML += "<span class='errorMessage'>Выберите пол</span>";
    }

    //age
    let age = String(document.getElementById("age").value).trim();
    if (age === "") {
        document.getElementById("ageError").innerHTML += "<span class='errorMessage'>Введите число</span>";
    } else {
        let isAge = numberRegExp.test(age);
        if (isAge === false) {
            document.getElementById("ageError").innerHTML += "<span class='errorMessage'>Введите число</span>";
        }
        if (age <= 0) {
            document.getElementById("ageError").innerHTML += "<span class='errorMessage'>Число должно быть больше нуля</span>";
        }
    }

    //email
    let email = String(document.getElementById("email").value).trim();
    if (email === "") {
        document.getElementById("emailError").innerHTML += "<span class='errorMessage'>Введите имейл</span>";
    } else {
        let isEmail = emailRegExp.test(email);
        if (isEmail === false) {
            document.getElementById("emailError").innerHTML += "<span class='errorMessage'>Введите имейл в правильном формате</span>";
        }
    }

    //password 
    let password = String(document.getElementById("password").value).trim();
    if (password === "") {
        document.getElementById("passwordError").innerHTML += "<span class='errorMessage'>Введите пароль</span>";
    } else {
        let isPassword = passwordRegExp.test(password);
        if (isPassword === false) {
            document.getElementById("passwordError").innerHTML += "<span class='errorMessage'>Введите пароль в правильном формате, содержащий буквы в верхнем и нижнем регистрах, цифры</span>";
        }
    }

    //country
    let country = String(document.getElementById("country").value).trim();
    if (country === "") {
        document.getElementById("countryError").innerHTML += "<span class='errorMessage'>Введите название страны</span>";
    } else {
        let isСountry = nameRegExp.test(country);
        if (isСountry === false) {
            document.getElementById("countryError").innerHTML += "<span class='errorMessage'>Название страны не может содержать цифры, символы и точки с запятой</span>";
        }
    }

    let elements = document.getElementsByClassName('errorMessage');
    if (elements.length == 0) {
        store(name, surname, age, email, password, country, sex.value);
        window.location.href = './advice.html';
    }

};

//Local Storage 
function store(name, surname, age, email, password, country, sex) {
    localStorage.setItem("name", name);
    localStorage.setItem("surname", surname);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("country", country);
    localStorage.setItem("sex", sex);
}