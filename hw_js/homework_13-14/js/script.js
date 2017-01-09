function programmTest() {

	'use strict';

	var test_13 = {
		questions: [
			'Какой формат передачи данных наиболее распостранен?',
			'Выберите правильный вариант фрагмента XML файла:',
			'Выберите правильный вариант фрагмента JSON файла:',
			'Какой объект для работы с XML файлами втроен во все современные браузеры?',
			'Какой объект для работы с JSON файлами втроен во все современные браузеры?',
			'Выберите правильный метод для преобразования объекта в JSON формат:',
			'Выберите правильный метод для создания объекта из JSON формата:',
			'С помощью какого объекта осуществляется доступ к локальному хранилищу в современных браузерах?',
			'Какие данные можно сохранять в локальное хранилище?',
			'С помощью какого метода можно сохранить данные в локальное хранилище?'
		],
		variants: [
			['TXT', 'SQL', ' XML', 'JSON'],
			['<greeting Hello, world!>', '<greeting>Hello, world!</>', '<greeting>Hello, world!</greeting>'],
			['{name: "Иван" }', '{"name": "Иван" }', '{‘name’: ‘Иван’ }'],
			['XML', 'XMLHttpRequers', 'XMLParser', 'Такого объекта нет. Необходимо пользоваться внешними библиотеками.'],
			['Json', 'JSONParser', 'Такого объекта нет. Необходимо пользоваться внешними библиотеками.', 'JSON'],
			['parse()', 'toJSON()', 'stringify()', 'render()'],
			['toJSON()', 'parse()', 'render()', 'stringify()'],
			['localStorage', 'Storage', 'LocalStorage', 'cookies'],
			['Только строки', 'Только текст+числа', 'Любые данные', 'Только примитивные данные: строки, числа, булевые'],
			['saveItem()', 'save()', 'saveToLocalStorage()', 'setItem()'],
		],
		answers: [
			[false, false, false, true],
			[false, false, true],
			[false, true, false],
			[false, false, false, true],
			[false, false, false, true],
			[false, false, true, false],
			[false, true, false, false],
			[true, false, false, false],
			[true, false, false, false],
			[false, false, false, true],
		]
	}

	localStorage.setItem('test #13', JSON.stringify(test_13));

	try {
		var test = JSON.parse(localStorage.getItem('test #13'));
		console.log('Success taken datafile from localStorage');
	} catch (err) {
		var test = test_13;
		console.log('Error taken datafile from localStorage');
	}

		/*	Шаблонизатор */

	var tmpl = $('#test-template').html();
	tmpl = _.template(tmpl);

	$('body').append(tmpl(test));

	return test;

}

$(document).ready(function() {

	var test = programmTest();
	var check = $('#submit');

	check.click( function(e) {

		var count = 0, arrayAnswer = $('input'), userAnswers = [];

		for ( var i = 0; i < test.questions.length; i++) {
			userAnswers[i] = true;
		}

		for ( var i = 0; i < test.questions.length; i++ ) {
			for ( var j = 0; j < test.variants[i].length; j++) {
				if (arrayAnswer[count].checked == true) {
					arrayAnswer[count] = true;
				} else {
					arrayAnswer[count] = false;
				}

				if ( arrayAnswer[count] != test.answers[i][j] ) {
					userAnswers[i] = false ;
				}
				count++;
			}
		}

			/* обнулили счетчик, для подсчета правильных ответов */
		count = 0;

		for ( i = 0; i < userAnswers.length; i++ ) {
			if ( userAnswers[i] == true ) { count++; }
		}

		console.log('Кол-во правильных ответов: ' + count + ' из ' + userAnswers.length);

			/* Запихиваем текст в модальное окно */

		if ( count > 7 ) {
			var header = 'Молодец!';
		}
		if ( count < 2 ) {
			var header = 'Заболел что-ли!? Еще раз отвечай!';
		} else {
			var header = 'Можно лучше...';
		}

		$('.modal-title').html(header);
		$('.modal-body').html('Ты правильно ответил на: ' + count + ' вопросов из ' + userAnswers.length);

		arrayAnswer = $('input');

		for ( i = 0; i < arrayAnswer.length; i++) {
			arrayAnswer[i].checked = false;
		}
	})

});
