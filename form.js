function checkValidation() {

    //remove all error message elements
    document.querySelectorAll('.errorMessage').forEach(e => e.remove());

    //patterns
    const nameRegExp = /^([а-яё]+|[a-z]+)$/;
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const numberRegExp = /^\d+$/;
    const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    //name
    let name = document.getElementById("name");
    if (name.value === "") {
        document.getElementById("nameError").innerHTML += "<span class='errorMessage'>Введите имя</span>";
    } else {
        let isName = nameRegExp.test(name.value);
        if (isName === false) {
            document.getElementById("nameError").innerHTML += "<span class='errorMessage'>Имя не может содержать цифры, символы и точки с запятой</span>";
        }
    }

    //surname
    let surname = document.getElementById("surname");
    if (surname.value === "") {
        document.getElementById("surnameError").innerHTML += "<span class='errorMessage'>Введите фамилию</span>";
    } else {
        let isSurname = nameRegExp.test(surname.value);
        if (isSurname === false) {
            document.getElementById("surnameError").innerHTML += "<span class='errorMessage'>Фамилия не может содержать цифры, символы и точки с запятой</span>";
        }
    }

    //sex
    var getRadioButtonValue = document.querySelector(
        'input[name="sex"]:checked');

    if (getRadioButtonValue == null) {
        document.getElementById("sexError").innerHTML += "<span class='errorMessage'>Выберите пол</span>";
    }

    //age
    let age = document.getElementById("age");
    if (age.value === "") {
        document.getElementById("ageError").innerHTML += "<span class='errorMessage'>Введите число</span>";
    } else {
        let isAge = numberRegExp.test(age.value);
        if (isAge === false) {
            document.getElementById("ageError").innerHTML += "<span class='errorMessage'>Введите число</span>";
        }
        if (age.value <= 0) {
            document.getElementById("ageError").innerHTML += "<span class='errorMessage'>Число должно быть больше нуля</span>";
        }
    }

    //email
    let email = document.getElementById("email");
    if (email.value === "") {
        document.getElementById("emailError").innerHTML += "<span class='errorMessage'>Введите имейл</span>";
    } else {
        let isEmail = emailRegExp.test(email.value);
        if (isEmail === false) {
            document.getElementById("emailError").innerHTML += "<span class='errorMessage'>Введите имейл в правильном формате</span>";
        }
    }

    //password 

    let password = document.getElementById("password");
    if (password.value === "") {
        document.getElementById("passwordError").innerHTML += "<span class='errorMessage'>Введите пароль</span>";
    } else {
        let isPassword = passwordRegExp.test(password.value);
        if (isPassword === false) {
            document.getElementById("passwordError").innerHTML += "<span class='errorMessage'>Введите пароль в правильном формате, содержащий буквы в верхнем и нижнем регистрах, цифры</span>";
        }
    }

    //country
    let country = document.getElementById("country");
    if (country.value === "") {
        document.getElementById("countryError").innerHTML += "<span class='errorMessage'>Введите название страны</span>";
    } else {
        let isСountry = nameRegExp.test(country.value);
        if (isСountry === false) {
            document.getElementById("countryError").innerHTML += "<span class='errorMessage'>Название страны не может содержать цифры, символы и точки с запятой</span>";
        }
    }

};

//Local Storage 
function store() {
    var inputName = document.getElementById("name");
    var inputSurname = document.getElementById("surname");
    var inputAge = document.getElementById("age");
    localStorage.setItem("name", inputName.value);
    localStorage.setItem("surname", inputSurname.value);
    localStorage.setItem("age", inputAge.value);

}