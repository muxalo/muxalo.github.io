
	//	Вариант создания страницы №1

/*

var object = document.body;

object.innerHTML = '<div class="container"><div class="jumbotron"><h1 style="text-align: center">Тест по программированию</h1><form method="post"><ol style="font-size: 21px"><li><p style="margin: 15px 0">Вопрос №1</p><ul style="font-size: 16px"><li class="list-inline"><label><input type="radio" name="question_1" value="1"><span style="margin-left: 5px">Вариант ответа №1</span></label></li><li class="list-inline"><label><input type="radio" name="question_1" value="2"><span style="margin-left: 5px">Вариант ответа №2</span></label></li><li class="list-inline"><label><input type="radio" name="question_1" value="3"><span style="margin-left: 5px">Вариант ответа №3</span></label></li></ul></li><li><p style="margin: 15px 0">Вопрос №2</p><ul style="font-size: 16px"><li class="list-inline"><label><input type="radio" name="question_2" value="1"><span style="margin-left: 5px">Вариант ответа №1</span></label></li><li class="list-inline"><label><input type="radio" name="question_2" value="2"><span style="margin-left: 5px">Вариант ответа №2</span></label></li><li class="list-inline"><label><input type="radio" name="question_2" value="3"><span style="margin-left: 5px">Вариант ответа №3</span></label></li></ul></li><li><p style="margin: 15px 0">Вопрос №3</p><ul style="font-size: 16px"><li class="list-inline"><label><input type="radio" name="question_3" value="1"><span style="margin-left: 5px">Вариант ответа №1</span></label></li><li class="list-inline"><label><input type="radio" name="question_3" value="2"><span style="margin-left: 5px">Вариант ответа №2</span></label></li><li class="list-inline"><label><input type="radio" name="question_3" value="3"><span style="margin-left: 5px">Вариант ответа №3</span></label></li></ul></li></ol><p style="text-align: center"><a class="btn btn-lg btn-info" href="#" role="button">Проверить мои результаты</a></p></form></div></div>';

*/



	//	Вариант создания страницы №2

/*

var _tempParentElem = document.body;

//	Create Wrapper

var _tempElem = document.createElement('div');

_tempElem.className = 'container';

_tempParentElem = _tempParentElem.insertBefore(_tempElem, _tempParentElem.firstChild);

//	Create Container

_tempElem = document.createElement('div');

_tempElem.className = 'jumbotron';

_tempParentElem = _tempParentElem.insertBefore(_tempElem, null);

//	Create Caption

_tempElem = document.createElement('h1');

_tempElem.innerHTML = 'Тест по программированию';
_tempElem.style.textAlign = 'center';

_tempParentElem.insertBefore(_tempElem, null);

//	Create Form

_tempElem = document.createElement('form');

_tempElem.method = 'post';

_tempParentElem = _tempParentElem.insertBefore(_tempElem, null);

//	Create List Questions

_tempElem = document.createElement('ol');

_tempElem.style.fontSize = '21px';

_tempParentElem = _tempParentElem.insertBefore(_tempElem, null);

var amountOfQuestions = 3;
var amountOfAnswers = 3;

var i = 0;
var j = 0;
var parentElemList = [];

for ( i = 0; i < amountOfQuestions; i++ ) {

		// Create elements 'li' in list 'ol'

		var _listItem = document.createElement('li');

		parentElemList[i] = _tempParentElem.insertBefore(_listItem, null);

		// Create element 'p' in list item 'li'

		var _paragraph = document.createElement('p');

		_paragraph.style.margin = '15px 0';
		_paragraph.innerHTML = 'Вопрос №' + (i + 1);

		parentElemList[i].insertBefore(_paragraph, null);

		// Create element 'ul' in list item 'li'

		var _ulList = document.createElement('ul');

		_ulList.style.fontSize = '16px';

		var tempParent = parentElemList[i].insertBefore(_ulList, null);

		for ( j = 0; j < amountOfAnswers; j++ ) {

			// Create element 'li' in list 'ul'

			var _tempElem = document.createElement('li');

			_tempElem.className = 'list-inline';

			var tempParent1 = tempParent.insertBefore(_tempElem, null);

			// Create element 'label' in list item 'li' of 'ul'

			_tempElem = document.createElement('label');

			tempParent1 = tempParent1.insertBefore(_tempElem, null);

			// Create element 'input' in 'label'

			_tempElem = document.createElement('input');

			_tempElem.type = 'radio';
			_tempElem.name = 'question_' + (i + 1);
			_tempElem.value = j + 1;

			tempParent1.insertBefore(_tempElem, null);

			// Create element 'span' in 'label'

			_tempElem = document.createElement('span');

			_tempElem.style = 'margin-left: 5px';
			_tempElem.innerHTML = 'Вариант ответа №' + (j + 1);

			tempParent1.insertBefore(_tempElem, null);
		}
	}

// Set parent for button ('form')

parentElem = document.getElementsByTagName('form');

// Create element 'p' in 'form'

_tempElem = document.createElement('p');

_tempElem.style = 'text-align: center';

parentElem = parentElem[0].insertBefore(_tempElem, null);

// Create button with element 'a' in 'p'

_tempElem = document.createElement('a');

_tempElem.className = 'btn btn-lg btn-info';
_tempElem.href = '#';
_tempElem.role = 'button';
_tempElem.innerHTML = 'Проверить мои результаты';

parentElem.insertBefore(_tempElem, null);

*/


	//	Вариант создания страницы №3

/*

var body = document.body;

var insert = function() {
	this.innerHTML = '<div class="container"><div class="jumbotron"><h1 style="text-align: center">Тест по программированию</h1><form method="post"><ol style="font-size: 21px"><li><p style="margin: 15px 0">Вопрос №1</p><ul style="font-size: 16px"><li class="list-inline"><label><input type="radio" name="question_1" value="1"><span style="margin-left: 5px">Вариант ответа №1</span></label></li><li class="list-inline"><label><input type="radio" name="question_1" value="2"><span style="margin-left: 5px">Вариант ответа №2</span></label></li><li class="list-inline"><label><input type="radio" name="question_1" value="3"><span style="margin-left: 5px">Вариант ответа №3</span></label></li></ul></li><li><p style="margin: 15px 0">Вопрос №2</p><ul style="font-size: 16px"><li class="list-inline"><label><input type="radio" name="question_2" value="1"><span style="margin-left: 5px">Вариант ответа №1</span></label></li><li class="list-inline"><label><input type="radio" name="question_2" value="2"><span style="margin-left: 5px">Вариант ответа №2</span></label></li><li class="list-inline"><label><input type="radio" name="question_2" value="3"><span style="margin-left: 5px">Вариант ответа №3</span></label></li></ul></li><li><p style="margin: 15px 0">Вопрос №3</p><ul style="font-size: 16px"><li class="list-inline"><label><input type="radio" name="question_3" value="1"><span style="margin-left: 5px">Вариант ответа №1</span></label></li><li class="list-inline"><label><input type="radio" name="question_3" value="2"><span style="margin-left: 5px">Вариант ответа №2</span></label></li><li class="list-inline"><label><input type="radio" name="question_3" value="3"><span style="margin-left: 5px">Вариант ответа №3</span></label></li></ul></li></ol><p style="text-align: center"><a class="btn btn-lg btn-info" href="#" role="button">Проверить мои результаты</a></p></form></div></div>';
}

body.insert = insert;

body.insert();

*/



	//	Вариант создания страницы №4

var body = document.body;

var insert = function() {

	var _tempElem = document.createElement('div');

	_tempElem.className = 'container';

	var _tempParentElem = this.insertBefore(_tempElem, this.firstChild);

	//	Create Caption

	_tempElem = document.createElement('h1');

	_tempElem.innerHTML = 'Тест по программированию';
	_tempElem.style.textAlign = 'center';

	_tempParentElem.insertBefore(_tempElem, null);

	//	Create Form

	_tempElem = document.createElement('form');

	_tempElem.method = 'post';

	_tempParentElem = _tempParentElem.insertBefore(_tempElem, null);

	//	Create List Questions

	_tempElem = document.createElement('ol');

	_tempElem.style.fontSize = '21px';

	_tempParentElem = _tempParentElem.insertBefore(_tempElem, null);

	var amountOfQuestions = 3;
	var amountOfAnswers = 3;

	var i = 0;
	var j = 0;
	var parentElemList = [];

	for ( i = 0; i < amountOfQuestions; i++ ) {

			// Create elements 'li' in list 'ol'

			var _listItem = document.createElement('li');

			parentElemList[i] = _tempParentElem.insertBefore(_listItem, null);

			// Create element 'p' in list item 'li'

			var _paragraph = document.createElement('p');

			_paragraph.style.margin = '15px 0';
			_paragraph.innerHTML = 'Вопрос №' + (i + 1);

			parentElemList[i].insertBefore(_paragraph, null);

			// Create element 'ul' in list item 'li'

			var _ulList = document.createElement('ul');

			_ulList.style.fontSize = '16px';

			var tempParent = parentElemList[i].insertBefore(_ulList, null);

			for ( j = 0; j < amountOfAnswers; j++ ) {

				// Create element 'li' in list 'ul'

				var _tempElem = document.createElement('li');

				_tempElem.className = 'list-inline';

				var tempParent1 = tempParent.insertBefore(_tempElem, null);

				// Create element 'label' in list item 'li' of 'ul'

				_tempElem = document.createElement('label');

				tempParent1 = tempParent1.insertBefore(_tempElem, null);

				// Create element 'input' in 'label'

				_tempElem = document.createElement('input');

				_tempElem.type = 'radio';
				_tempElem.name = 'question_' + (i + 1);
				_tempElem.value = j + 1;

				tempParent1.insertBefore(_tempElem, null);

				// Create element 'span' in 'label'

				_tempElem = document.createElement('span');

				_tempElem.style = 'margin-left: 5px';
				_tempElem.innerHTML = 'Вариант ответа №' + (j + 1);

				tempParent1.insertBefore(_tempElem, null);
			}
		}

	// Set parent for button ('form')

	parentElem = document.getElementsByTagName('form');

	// Create element 'p' in 'form'

	_tempElem = document.createElement('p');

	_tempElem.style = 'text-align: center';

	parentElem = parentElem[0].insertBefore(_tempElem, null);

	// Create button with element 'a' in 'p'

	_tempElem = document.createElement('a');

	_tempElem.className = 'btn btn-lg btn-info';
	_tempElem.href = '#';
	_tempElem.role = 'button';
	_tempElem.innerHTML = 'Проверить мои результаты';

	parentElem.insertBefore(_tempElem, null);

}

body.insert = insert;

body.insert();
