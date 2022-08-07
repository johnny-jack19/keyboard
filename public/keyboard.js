let letterKeyboard = true;
let shifted = true;
let caps = false;

const messages = document.getElementById('messages');
const output = document.getElementById('output');

const letters = document.getElementsByClassName('letter');

function lowerAll() {
    Array.from(letters).forEach(letter => {
        letter.innerText = letter.innerText.toLowerCase();
        });
}
function upperAll() {
    Array.from(letters).forEach(letter => {
        letter.innerText = letter.innerText.toUpperCase();
        });
}

Array.from(letters).forEach(letter => {
    letter.addEventListener('click', (e) => {
        if (caps) {
            output.value += letter.id.toUpperCase();
        } else if (shifted) {
            output.value += letter.id.toUpperCase();
            shifted = false;
            document.getElementById('shift').innerText = 'Lower';
            lowerAll();
        } else {
            output.value += letter.id;
        }
    });
});

const numbers = document.getElementsByClassName('number');
Array.from(numbers).forEach(number => {
    number.addEventListener('click', (e) => {
        output.value += number.id;
    });
});

const others = document.getElementsByClassName('other');
Array.from(others).forEach(other => {
    other.addEventListener('click', (e) => {
        output.value += special[other.id];
    });
});

//go
document.getElementById('enter').addEventListener('click', (e) => {
    if (output.value != '') {
        const message = `<p class="message">${output.value}</p>`;
        messages.innerHTML += message;
        output.value = '';
    }
    messages.scrollTop = messages.scrollHeight;
    shifted = true;
    upperAll();
    document.getElementById('shift').innerText = 'Shift';
});

document.getElementById('shift').addEventListener('click', (e) => {
    if (shifted) {
        shifted = false;
        caps = true;
        document.getElementById('shift').innerText = 'Caps';
    } else if (caps) {
        caps = false;
        lowerAll();
        document.getElementById('shift').innerText = 'Lower';
    } else {
        shifted = true;
        upperAll();
        document.getElementById('shift').innerText = 'Shift';
    }
});

document.getElementById('back').addEventListener('click', (e) => {
    let str = output.value;
    output.value = str.slice(0, str.length - 1);
});

document.getElementById('back-2').addEventListener('click', (e) => {
    let str = output.value;
    output.value = str.slice(0, str.length - 1);
});

document.getElementById('option-1').addEventListener('click', (e) => {
    if (letterKeyboard) {
        letterKeyboard = false;
        document.getElementById('row-2').classList.add('hidden');
        document.getElementById('row-3').classList.add('hidden');
        document.getElementById('row-4').classList.add('hidden');
        document.getElementById('row-5').classList.remove('hidden');
        document.getElementById('row-6').classList.remove('hidden');
        document.getElementById('row-7').classList.remove('hidden');
        document.getElementById('option-1').innerText = 'ABC';
    } else {
        letterKeyboard = true;
        document.getElementById('row-5').classList.add('hidden');
        document.getElementById('row-6').classList.add('hidden');
        document.getElementById('row-7').classList.add('hidden');
        document.getElementById('row-2').classList.remove('hidden');
        document.getElementById('row-3').classList.remove('hidden');
        document.getElementById('row-4').classList.remove('hidden');
        document.getElementById('option-1').innerText = '!#1';
    }
});

const special = {
    "plus": '+',
    "divide": '/',
    "equal": '=',
    "underscore": '_',
    "less": '<',
    "greater": '>',
    "bracket-left": '[',
    "bracket-right": ']',
    "curly-left": '{',
    "curly-right": '}',
    "e-mark": '!',
    "at-sign": '@',
    "hash": '#',
    "dollar": '$',
    "percent": '%',
    "carat": '^',
    "and": '&',
    "astrick": '*',
    "p-left": '(',
    "p-right": ')',
    "minus": '-',
    "single-q": "'",
    "double-q": '"',
    "colon": ':',
    "space": ' ',
    "semi-colon": ';',
    "back-tick": '`',
    "q-mark": '?',
    "comma": ',',
    "period": '.'
}