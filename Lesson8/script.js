// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let textArea = document.getElementById('textarea');
// textArea.value = localStorage.getItem('text');
//
// textArea.oninput = (ev) => {
//     localStorage.setItem('text', ev.target.value);
// }


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

// function setLocalStorage(form) {
//     for (let i = 0; i < form.length; i++) {
//         if (form[i].type === 'radio' && !form[i].checked) {
//           continue;
//         }
//         if (form[i].type === 'checkbox') {
//             localStorage.setItem(form[i].name, form[i].checked);
//             continue;
//         }
//         localStorage.setItem(form[i].name, form[i].value);
//     }
// }
//
// function setForm(form) {
//     for (let i = 0; i < form.length; i++) {
//         let name = form[i].name;
//
//         if (form[i].type === 'radio' && form[i].value === localStorage.getItem(form[i].name)) {
//             form[i].checked = true;
//             continue;
//         }
//         if (form[i].type === 'radio' ) {
//             continue;
//         }
//         if (form[i].type === 'checkbox') {
//             form[i].checked = localStorage.getItem(form[i].name) === 'true' ? true : false;
//         }
//
//         form[i].value = localStorage.getItem(name);
//     }
// }
// setForm(document.form1);
//
// document.form1.oninput = (ev) => {
//     ev.preventDefault();
//     setLocalStorage(document.form1);
// }


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// const textarea = document.getElementById('textarea');
// const saveButton = document.getElementById('saveChanges');
// const up = document.getElementById('up');
// const down = document.getElementById('down');
// let currentValue = localStorage.length;
//
// textarea.value = localStorage.getItem(`text${currentValue-1}`);
//
// saveButton.onclick = function () {
//     localStorage.setItem(`text${currentValue++}`, textarea.value);
// }
//
// let count = 1;
// down.onclick = function () {
//     if (currentValue - count === 0) {
//         alert('The end of history');
//         return;
//     }
//     count++;
//     textarea.value = localStorage.getItem(`text${currentValue - count}`);
// }
//
// up.onclick = function () {
//     if (count === 1) {
//         alert('The end of history');
//         return;
//     }
//     count--;
//     textarea.value = localStorage.getItem(`text${currentValue - count}`);
// }


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
const block = document.getElementById('formData');
const edit = document.getElementById('edit');
const deleteButton = document.getElementById('delete');

function setLocalStorage(form) {
    for (let i = 0; i < form.length; i++) {
        if(form[i].type === 'submit') {
            break;
        }
        localStorage.setItem(form[i].name, form[i].value);
    }
}

function getDataFromLocalStorage (form) {
    for (let i = 0; i < form.length; i++) {
        if (form[i].type === 'submit') break;
        form[i].value = localStorage.getItem(form[i].name);
    }
}

function printDataFromLocalStorage (form) {
    for (let i = 0; i < form.length; i++) {
        if (form[i].type === 'submit') break;
        let p = document.createElement('p');
        p.innerText = localStorage.getItem(form[i].name);
        block.appendChild(p);
    }
}

function isEmpty(form) {
    for (let i = 0; i < form.length; i++) {
        if (form[i].type === 'submit') break;
        if (!form[i].value) return false;
    }
    return true;
}

printDataFromLocalStorage(document.userForm);

document.getElementById('save').onclick = function (ev)  {
    if (!isEmpty(document.userForm)) {
        alert('Заповніть всю форму!')
        return;
    }
    setLocalStorage(document.userForm);
}

edit.onclick = function (ev) {
    ev.preventDefault();
    getDataFromLocalStorage(document.userForm)
}

deleteButton.onclick = function (ev) {
    localStorage.clear();
    block.innerHTML = '';
}
