//СТРАНИЦА ПРОЕКТА

// Получаем кнопки и секции
const buttons = document.querySelectorAll('.section-button');
const sections = document.querySelectorAll('.section');

// Функция для активации секции и кнопки
function activateSection(buttonId, sectionId) {
    // Активируем соответствующую кнопку
    buttons.forEach(button => {
        if (button.id === buttonId) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    // Активируем соответствующую секцию
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active-section');
            section.style.display = "block";  // Показываем активную секцию
        } else {
            section.classList.remove('active-section');
            section.style.display = "none";  // Скрываем неактивные секции
        }
    });
}

//Обработчики для кнопок
document.getElementById('project-button').addEventListener('click', () => {
    activateSection('project-button', 'project-section');
});

document.getElementById('investment-button').addEventListener('click', () => {
    activateSection('investment-button', 'investment-section');
});

document.getElementById('potential-button').addEventListener('click', () => {
    activateSection('potential-button', 'potential-section');
});

// По умолчанию открыта секция "О проекте"
activateSection('project-button', 'project-section');

// Количество аккаунтов и поинтов по умолчанию
let accountsQuantity = 0;
let pointsQuantity = 0;

function updateDisplay(id, value) {
    document.getElementById(id + '-quantity').innerText = value;
}

function increment(type) {
    if (type === 'accounts') {
        accountsQuantity++;
        updateDisplay('accounts', accountsQuantity);
        document.getElementById('decrement-accounts').disabled = false;
    } else if (type === 'points') {
        pointsQuantity++;
        updateDisplay('points', pointsQuantity);
        document.getElementById('decrement-points').disabled = false;
    }
    updatePayButtonState();
}

function decrement(type) {
    if (type === 'accounts' && accountsQuantity > 0) {
        accountsQuantity--;
        updateDisplay('accounts', accountsQuantity);
        if (accountsQuantity === 0) {
            document.getElementById('decrement-accounts').disabled = true;
        }
    } else if (type === 'points' && pointsQuantity > 0) {
        pointsQuantity--;
        updateDisplay('points', pointsQuantity);
        if (pointsQuantity === 0) {
            document.getElementById('decrement-points').disabled = true;
        }
    }
    updatePayButtonState();
}

function updatePayButtonState() {
    const payButton = document.getElementById('pay-button');
    if (accountsQuantity > 0 || pointsQuantity > 0) {
        payButton.classList.remove('inactive');
        payButton.disabled = false;
    } else {
        payButton.classList.add('inactive');
        payButton.disabled = true;
    }
}

// Изначально отключаем кнопки "минус"
document.getElementById('decrement-accounts').disabled = true;
document.getElementById('decrement-points').disabled = true;

// Изначально кнопка оплаты неактивна
updatePayButtonState();
