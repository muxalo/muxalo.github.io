$(document).ready(function() {

	/* Подключение слайдера */

	var slider = $('.carouselPlagin');
	
	slider.carouselPlugin();

	/* Использование шаблона */
	
	var profile = {
		name: 'Канашевич Михаил Александрович',
		photo: 'img/img1.jpg',
		about: 'Просто неплохой парень (многие готовы с этим поспорить)',
		motivation: ['Я считаю, что кодинг - это мое', 'Мои друзья считают, что кодинг - это мое', 'Я люблю кодить'],
		number: '+3805016521XX',
		social: ['https://new.vk.com/kanashevych_m_a'],
		feedback: ['Если нужно, могу решать массы задач в электрической части. Имею опыт работы от электрослесаря до проектировщика автоматизированного управления оборудованием']
	}
	
	$(function () {
		$('#profile').tmpl(profile).appendTo('.wrapper');
	});
	
});



