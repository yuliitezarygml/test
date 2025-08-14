(function ($) {
	"use strict";

	// Инициализация EmailJS
	emailjs.init("o5JNchL9PlgkyvQHR");

	const form = document.getElementById("form");
	const btn = document.getElementById("button");

	form.addEventListener("submit", function (event) {
		event.preventDefault();
		btn.disabled = true;

		// Получаем текущее время
		const now = new Date();
		const timeString = now.toLocaleTimeString('ru-RU', { 
			hour: '2-digit', 
			minute: '2-digit' 
		});

		// Формируем параметры для шаблона
		const templateParams = {
			name: document.querySelector("#name").value,
			email: document.querySelector("#email").value,
			phone: document.querySelector("#phone").value,
			subject: document.querySelector("#subject").value,
			message: document.querySelector("#message").value,
			time: timeString
		};

		const serviceID = "service_nndbp6p";
		const templateID = "template_iclv3fj";

		emailjs.send(serviceID, templateID, templateParams)
			.then(() => {
				swal({
					title: 'Отправлено!',
					text: 'Ваше сообщение успешно отправлено',
					icon: 'success',
					button: 'OK'
				});
				form.reset();
			})
			.catch((error) => {
				swal({
					title: 'Ошибка!',
					text: 'Произошла ошибка при отправке: ' + error.message,
					icon: 'error',
					button: 'OK'
				});
				console.error('Ошибка отправки:', error);
			})
			.finally(() => {
				btn.disabled = false;
			});
	});

})(jQuery);



