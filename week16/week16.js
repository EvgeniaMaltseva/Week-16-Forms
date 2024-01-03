//Задание 1
//Найдите все формы на странице. При нажатии на кнопку выведите количество найденных форм.
//Подсказка: используйте коллекцию document.forms и свойство length

const paragraph = document.getElementById('practicum');

function makeOne() {
	
	//Ваш код
	const collection = document.forms.length;
	//const formDate = collection.length
	//return formDate;
	console.log(collection);
}
document.querySelector('.b-1').onclick = makeOne;

//Задание 2
//Найдите первую форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

const paragraphTwo = document.getElementById('practicum2');

function makeTwo() {

	//Ваш код
	const findFormOne = document.forms[0];
	const nameFormOne = findFormOne.getAttribute('name');
	console.log(nameFormOne);
}
document.querySelector('.b-2').onclick = makeTwo;

//Задание 3
//Найдите последнюю форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

const paragraphThree = document.getElementById('practicum3');

function makeThree() {
	//Ваш код
	const findFormThree = document.forms[3];
	const nameFormThree = findFormThree.getAttribute('name');
	console.log(nameFormThree);
}

document.querySelector('.b-3').onclick = makeThree;

//Задание 4
//Найдите все формы на странице и выведите их названия
//При нажатии на кнопку выведите названия всех найденных форм, разделенных запятыми
//Подсказка: Для решения задания вы можете использовать следующую логику:
//- Получите все формы на странице, используя коллекцию document.forms
//- Создайте пустой массив formNames для хранения названий форм
//- Пройдитесь по каждой форме в коллекции и для каждой формы
//- Получите значение атрибута name с помощью метода getAttribute
//- Добавьте полученное название в массив formNames
//- Преобразуйте массив formNames в строку, разделив названия запятыми, с помощью метода join()
//- Выведите полученную строку названий форм в элемент с id practicum4 при нажатии на кнопку

const paragraphFour = document.getElementById('practicum4');

function makeFour() {
	//Ваш код
	const collection2 = document.forms;
	const formNames = [];
	for (let formName of collection2) {
		formName = formName.getAttribute('name');
		formNames.push(formName);
	};
	const splitArr = formNames.join(',');
	paragraphFour.innerText = splitArr;
}
document.querySelector('.b-4').onclick = makeFour;

//Задание 5
//Найдите третью форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements
//Подсказка: используйте коллекцию document.forms для получения формы по индексу и свойство form.elements.length для получения количества элементов в форме

const paragraphFive = document.getElementById('practicum5');

function makeFive() {
	//Ваш код
	const searchFormThree = document.forms.lastForm;
	console.log(searchFormThree);
	const searchElemFormThree = searchFormThree.elements.length;
	console.log(searchElemFormThree);
}

document.querySelector('.b-5').onclick = makeFive;

//Задание 6
//Найдите вторую форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements

const paragraphSix = document.getElementById('practicum6');

function makeSix() {
	//Ваш код
	const searchFormTwo = document.forms.formTwo;
	console.log(searchFormTwo);
	const searchElemFormTwo = searchFormTwo.elements.length;
	console.log(searchElemFormTwo);
}

document.querySelector('.b-6').onclick = makeSix;

//Задание 7
//Выведите перечисление названий (name) всех элементов второй формы на экран. В задании 6 вы нашли их количество.
//Подсказка:
//- Используйте document.forms для получения коллекции всех форм на странице
//- Найдите вторую форму в коллекции форм, используя индекс 1 (индексы начинаются с 0)
//- Получите коллекцию элементов формы с помощью свойства elements у второй формы
//- Создайте пустую строку elementsList, которая будет хранить перечисление названий элементов
//- Используя цикл for, переберите элементы формы в коллекции formElements
//- Внутри цикла добавьте текущее название элемента формы (свойство name) в elementsList, добавляя дефис перед названием
//- После цикла выведите текст с перечислением элементов в элемент с id practicum7, используя свойство textContent

const paragraphSeven = document.getElementById('practicum7');

function makeSeven() {
	//Ваш код
	const collection = document.forms;
	const searchFormTwo = collection[1];
	const formElements = searchFormTwo.elements;
	const elementsList = [];
	for(let elem of formElements){
		elementsList.push('- '+ elem.name);
    };
	paragraphSeven.textContent = elementsList;	
}

document.querySelector('.b-7').onclick = makeSeven;

//Задание 8
//Выведите перечисление названий (name) всех элементов первой формы на экран. В задании 5 вы нашли их количество.

const paragraphEight = document.getElementById('practicum8');

function makeEight() {
	//Ваш код
	const collection = document.forms.formOne;
	const findAllElements = collection.elements;
	const elementsList = [];
	for(let elem of findAllElements){
		elementsList.push(elem.name + ' ');
    };
	paragraphEight.textContent = elementsList;
}

document.querySelector('.b-8').onclick = makeEight;

//Задание 9
//Найдите третью форму на странице. Выведите перечисление названий (name) всех элементов формы на экран.

const paragraphNine = document.getElementById('practicum9');

function makeNine() {
	//Ваш код
	const collection = document.forms;
	const searchFormThree = collection[2];
	const formElements = searchFormThree.elements;
	const elementsList = [];
	for(let elem of formElements){
		elementsList.push('- '+ elem.name);
    };
	paragraphNine.textContent = elementsList;	
}

document.querySelector('.b-9').onclick = makeNine;

//Задание 10
//Выведите на экран значенеие radio кнопки четвёртой формы на странице
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения radio кнопки

const paragraphTen = document.getElementById('practicum10');

function makeTen() {
	//Ваш код
	const collection = document.forms;
	const searchLastForm = collection[3];
	const formElements = searchLastForm.elements;
	const radio = formElements.fourthName.value;
	paragraphTen.textContent = radio;	
}

document.querySelector('.b-10').onclick = makeTen;

//Задание 11
//Выведите значения всех опций из первой формы
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения выбранной опции
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Создайте пустую строку optionsValues, которая будет хранить значения всех опций
//- Используйте цикл или метод forEach для перебора опций в коллекции элемента select
//- Внутри цикла получите значение каждой опции с помощью свойства value и добавьте его в optionsValues
//- Выведите значения опций на страницу

const paragraphEleven = document.getElementById('practicum11');

function makeEleven() {
	//Ваш код
	const collection = document.forms[0];
	const selectarr = collection.elements["firstSelect"].options;
	let optionsValues = '';
	for(let option of selectarr) {
		optionsValues = optionsValues + ' ' + (option.value);
	};
	paragraphEleven.textContent = optionsValues;
	}

document.querySelector('.b-11').onclick = makeEleven;

//Задание 12
//Выведите значения атрибутов id всех чекбоксов (количество: 3) из второй формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к чекбоксам с помощью form.elements и сохраните их в переменные
//- Получите значения атрибутов id всех чекбоксов второй формы

const paragraphTwelve = document.getElementById('practicum12');

function makeTwelve() {
	//Ваш код
		const collection = document.forms[1];
		const checkboxes = collection.elements;
		let checkboxIds = '';
     	for (let i = 0; i < checkboxes.length; i++) {
	 	if (checkboxes[i].type === "checkbox") {
			checkboxIds = checkboxIds + ' ' + (checkboxes[i].id); 	
	}
		}
	paragraphTwelve.textContent = checkboxIds; 
}

document.querySelector('.b-12').onclick = makeTwelve;

// Задание 13
//Проверьте была ли выбрана кнопка четвёртой формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к radio кнопке с помощью form.elements и сохраните её в переменную
//- Используйте условный оператор (if) для проверки выбранности кнопки
//- Если кнопка выбрана, выведите сообщение "Кнопка выбрана" на страницу
//- Если кнопка не выбрана, выведите сообщение "Кнопка не выбрана" на страницу

const paragraphThirteen = document.getElementById('practicum13');

function checkButton(e) {
	e.preventDefault();
	//Ваш код
	const collection = document.forms[3];
	const radioButton = collection.elements['fourthName'];
	console.log(radioButton);
	if (radioButton.checked) {
		paragraphThirteen.textContent = "Кнопка выбрана"
	} else {
		paragraphThirteen.textContent = "Кнопка не выбрана"		
	}
}

document.querySelector('.b-13').addEventListener('click', checkButton);

//Задание 14
//Проверьте какой вариант выбран в первой форме
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Установите выбранным второй вариант: select.selectedIndex = 1;
//- Используйте свойство value выбранной опции для получения выбранного варианта
//- Используйте условный оператор (if) для проверки выбранного варианта
//- Если выбран первый вариант, выведите сообщение "Выбран первый вариант" на страницу
//- Если выбран второй вариант, выведите сообщение "Выбран второй вариант" на страницу
//- Если выбран третий вариант, выведите сообщение "Выбран третий вариант" на страницу

const paragraphFourteen = document.getElementById('practicum14');

function checkOption() {
	//Ваш код
	const collection = document.forms[0];
	const select = collection.elements["firstSelect"];
	//select.selectedIndex = 1;
	const optionValue = select.options;
	let options = collection.getElementsByTagName("option");
	
    for (let i = 0; i < options.length; i++) {
		if(optionValue[i].selected){
			paragraphFourteen.textContent = 'Выбран' +' ' + (i+1) + ' ' + 'вариант';
		}
    }
}
document.querySelector('.b-14').onclick = checkOption;

//Задание 15
//Добавьте в первую форму выбранную Опцию 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Используйте свойство selectedIndex элемента select, чтобы установить выбранный индекс опции по умолчанию
//- Установите значение selectedIndex равным индексу опции, которую вы хотите выбрать по умолчанию

function makeFifteen() {
	//Ваш код
	const collection = document.forms[0];
	const select = collection.elements["firstSelect"].options;
    select.selectedIndex = 2;
}
makeFifteen();

//Задание 16
//Добавьте во вторую форму выбранный Вариант 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу checkbox с помощью form.elements и сохраните его в переменную
//- Используйте свойство checked элемента checkbox, чтобы установить его выбранным по умолчанию
//- Установите значение checked равным true для выбранного варианта

function makeSixteen() {
	//Ваш код
	const collection = document.forms[1];
	const checkboxes = collection.elements;
	document.getElementById("checkbox3").checked = true;
}

makeSixteen();

//Задание 17
//Проверьте, заполнены ли все поля первой формы перед отправкой
//Подсказка:
//- Получите доступ к каждому полю формы с помощью form.elements и сохраните их в соответствующие переменные
//- Используйте условные операторы (if) для проверки каждого поля на заполненность
//- Если хотя бы одно поле не заполнено, выведите сообщение об ошибке на страницу (элемент для добавления ошибки создан: <p class="error-message" id="errorMessage"></p>)
//- Добавьте слушатель события submit к форме, чтобы выполнить проверку перед отправкой
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

const formOne = document.forms.formOne;

formOne.addEventListener('submit', function (event) {
	event.preventDefault(); //Отмена отправки
	validate();
	//Ваш код
	
});
function validate(){//Считаем значения из полей name и email в переменные nameForm и emailForm
	const nameForm = formOne.elements['firstName'].value;
	const emailForm = formOne.elements['firstEmail'].value;
	const msgErr =  formOne.querySelector('#errorMessage');
	//Если поле name пустое выведем сообщение и предотвратим отправку формы
	if (nameForm.length==0 || emailForm.length==0){
		msgErr.textContent ="*заполните, пожалуйста, все поля";
	}
	}
	//Проверим содержит ли значение введенное в поле email символы @ и .
	// at = emailForm.indexOf("@");
	// dot = emailForm.indexOf(".");
	// //Если поле не содержит эти символы знач email введен не верно
	// if (at < 1 || dot < 1){
	// formOne.getElementById("errorMessage").innerHTML="*email введен не верно";
	// return false;
	//	}

//Задание 18
//Очистите все поля первой формы после отправки
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Используйте метод reset() формы, чтобы очистить все её поля после отправки
//- Добавьте слушатель события addEventListener на первую форму, как вы делали в задании 17
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

formOne.addEventListener('submit', function (event) {
	event.preventDefault(); //Отмена отправки
	//Ваш код
	const collection = document.forms.formOne;
	collection.reset();
});

//Задание 19
//При выборе определенной опции из выпадающего списка измените цвет фона страницы
//Подсказка:
//- Получите доступ к элементу select с помощью document.getElementById или другим методом выборки элементов и сохраните его в переменную
//- Используйте событие onchange для отслеживания изменений в выборе опции
//- В обработчике события, используя условные операторы (if), проверьте выбранную опцию
//- В зависимости от выбранной опции, измените цвет фона страницы, используя свойство document.body.style.backgroundColor

// const selectElement = document.getElementById("firstSelect");//Ваш код
// console.log(selectElement);
// console.log(selectElement.length);
// //selectElement.selectedIndex = 0;
// //console.log(selectElement.selectedIndex);
// selectElement.onchange = function changeColor () {
//  	//Ваш код
// 	for (let i = 0; i < selectElement.length; i++) {
// 		if(selectElement[i].selected || selectElement[i] === 0){
// 	//if (selectElement[i] === 0) {
// 		document.body.style.backgroundColor = "red";
// 	} else if (selectElement.selectedIndex === 1) {
// 		document.body.style.backgroundColor = "green";
// 	} else {
// 		document.body.style.backgroundColor = "blue";
// 	}
// }
// 	};
const selectElement = document.getElementById("firstSelect");//Ваш код
selectElement.onchange = function changeColor () {
	//Ваш код
const selectedIndex = formOne.elements['firstSelect'].value;
if (selectElement.selectedIndex === 0) {
	document.body.style.backgroundColor = "red";
} else if (selectElement.selectedIndex === 1) {
	document.body.style.backgroundColor = "green";
} else {document.body.style.backgroundColor = "blue";
}
    };
		
//Задание 20
//Добавьте валидацию для поля Email
//Подсказка:
//- Получите доступ к первой форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к полю Email с помощью form.elements и сохраните его в переменную
//- Используйте событие oninput для отслеживания изменений в поле Email
//- В обработчике события, используя регулярное выражение (RegExp), проверьте введенное значение поля Email
//- В зависимости от результата проверки, измените стиль поля Email (например, установите класс с ошибкой) и отобразите сообщение об ошибке в элементе <p> (добавьте элемент самостоятельно) с помощью свойства textContent.

//const emailInput = //Ваш код
//const errorMessage = document.getElementById('errorMessage');
const collection = document.forms.formOne;
const emailForm = collection.elements['firstEmail'];
console.log(emailForm);
const msgErr =  collection.querySelector('#errorMessage');
emailForm.oninput = function () {
	//Ваш код
	if (emailForm.value.length === 0){
		msgErr.textContent = "*заполните, пожалуйста, все поля";
	};
	//const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	//Если поле не содержит эти символы, значит email введен не верно
	let isValid = validRegex.test(emailForm.value);
	if (!isValid){
	msgErr.textContent = "*email введен не верно";
    emailForm.style.borderColor = "red";
    } else { msgErr.textContent = " ";
	emailForm.style.borderColor = "green";
	}
};
//Задание 21
//При отправке второй формы выполняется проверка всех чекбоксов. Если ни один из чекбоксов не выбран, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result21".

document.querySelector('.b-21').onclick = function (event) {
	const checkboxes = document.forms.formTwo.querySelectorAll('input[type="checkbox"]');
	let isChecked = false;

	checkboxes.forEach(function (checkbox) {
		if (checkbox.checked) {
			isChecked = true;
		}
	});

	if (!isChecked) {
		//Ваш код
		event.preventDefault();
		document.getElementById('result21').textContent = 'Проверка не пройдена';
	} else {
		document.getElementById('result21').textContent = 'Проверка пройдена';
	}
};

//Задание 22
//При отправке третьей формы выполняется проверка поля Имя на заполненность. Если поле Имя пустое, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result22".

document.querySelector('.b-22').onclick = function (event) {
	const nameInput = document.forms.formThree.elements.thirdName;

	if (nameInput.value.trim() === '') {
		//Ваш код
		event.preventDefault();
		document.getElementById('result22').textContent = 'Проверка не пройдена';
	} else {
		document.getElementById('result22').textContent = 'Проверка пройдена';
	}
};

//Задание 23
//При выборе опции "Я хочу зарегистрироваться" в четвёртой форме кнопка должна быть разблокирована. В противном случае, сделайте кнопку отправки формы заблокированной.
//Подсказка: используйте свойство disabled
const findLastForm = document.forms.lastForm;
const findButton = findLastForm.elements.fourthButton;
findButton.disabled = true;


//Задание 24
//Найдите все поля ввода на странице и установите им атрибут "placeholder" со значением "Введите данные"
//Подсказка: для установки атрибута используйте методы forEach и setAttribute

document.querySelector('.b-24').onclick = function () {
	//Ваш код
	const collection = document.forms;
	const findAllElements = collection.elements;
    const findAllInputs = document.querySelectorAll('input');
	console.log(findAllInputs);
    findAllInputs.forEach((input) => {
    input.setAttribute("placeholder", "Введите данные")
	})
};

//Задание 25
//При фокусе на любом поле ввода измените его границу на цвет "#00ff00". При потере фокуса восстановите стандартную границу.

document.querySelector('.b-25').onclick = function () {
	const inputs = document.querySelectorAll('input');

	inputs.forEach(function (input) {
		input.addEventListener('focus', function () {
			//Ваш код
			this.classList.add('focused')
			input.style.borderColor = "#00ff00";
			
		});

		input.addEventListener('blur', function () {
			//Ваш код
			this.classList.remove('focused')
			input.style.borderColor = "rgb(209, 209, 209)";
		});
	});
};

//Задание 26
//При нажатии на кнопку "Задание 26" отобразите в элементе с id "result26" значение placeholder из поля имя в третьей форме

document.querySelector('.b-26').onclick = function (event) {
	event.preventDefault();
	//Ваш код
	const findFormThree = document.forms[2];
	const findElement = findFormThree.elements.thirdName;
	const findValue = findElement.getAttribute('placeholder');
	const findElement26 = document.getElementById('result26');
	findElement26.append(findValue);
};

//Задание 27
//При изменении значения любого из полей второй формы отобразите сообщение с текстом "Изменение внесено" в элементе с id "result27"

const formTwoInputs = document.querySelectorAll('.secondForm input');

formTwoInputs.forEach(function (input) {
	input.addEventListener('input', function () {
		//Ваш код
		const findElement27 = document.getElementById('result27');
		findElement27.append("Изменение внесено");	
	});
});

//Задание 28
//При выборе любой из опций выпадающего списка в первой форме отобразите сообщение с текстом "Опция выбрана" в элементе с id "result28"

const selectFormThree = document.getElementById('firstSelect');

selectFormThree.addEventListener('change', function () {
	//Ваш код
	const collection = document.forms[0];
	const selectarr = collection.elements["firstSelect"].options;
	for(let option of selectarr) {
	if (option.selected) {
	const findElement28 = document.getElementById('result28');
	findElement28.append('Опция выбрана');	
	}
}
});

//Задание 29
//При заполнении всех полей третьей формы выведите их значения в консоль. Используйте JavaScript без использования объекта FormData.

const formThree = document.forms.formThree;
const nameInputThree = formThree.elements.thirdName;
const emailInputThree = formThree.elements.thirdEmail;

function handleSubmitTwentyNine(event) {
	event.preventDefault();

	if (nameInputThree.value && emailInputThree.value) {
		//Ваш код
		console.log(nameInputThree.value);
		console.log(emailInputThree.value);
	} else {
		console.log('Пожалуйста, заполните все поля формы.');
	}
}

formThree.addEventListener('submit', handleSubmitTwentyNine);

//Задание 30
//При отправке второй формы выведите значения выбранных вариантов в консоль

const formTwo = document.forms.formTwo;
const resultElement = document.getElementById('result30');

formTwo.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault();

	const checkboxes = formTwo.querySelectorAll('input[type="checkbox"]:checked');
	const selectedOptions = Array.from(checkboxes).map((checkbox) => checkbox.labels[0].textContent);

	//Ваш код
	for (let option of selectedOptions) {
		console.log(option);
	}
	
}
