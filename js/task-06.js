// Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
// проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте 
// data - length.
// Если введено подходящее количество символов, то border инпута 
// становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и 
// invalid, которые мы уже добавили в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputRef = document.querySelector("#validation-input[data-length]");

const inputBlur = (event) => {
    console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.add("valid");
        inputRef.classList.remove("invalid");
    } else {
        inputRef.classList.add("invalid");
        inputRef.classList.remove("valid");
    }
    if (event.currentTarget.value.length === 0) {
        inputRef.classList.remove("invalid");
    }
};
inputRef.addEventListener("blur", inputBlur);
