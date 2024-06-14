// Меню burger

$(document).ready(function() {
	$('.menu').click(function() {
		$('.menu__burger').toggleClass('deactive');
		$('.menu__close').toggleClass('active');
		$('.nav').toggleClass('active');

		if ($('.nav').hasClass('active')) {
		$('main, footer').addClass('lock');
		} else {
		$('main, footer').removeClass('lock');
		}

	});
});

// END Меню burger

// Блок з вкладками TAB, перемикання між вкладками

function openTab(evt, tabId) {
	 var i, tabContent, tabButtons;

	 // Hide all tab contents
	 tabContent = document.getElementsByClassName("tab-content");
	 for (i = 0; i < tabContent.length; i++) {
		  tabContent[i].style.display = "none";
		  tabContent[i].classList.remove("active");
	 }

	 // Remove active class from all tab buttons
	 tabButtons = document.getElementsByClassName("tab-button");
	 for (i = 0; i < tabButtons.length; i++) {
		  tabButtons[i].classList.remove("active");
	 }

	 // Show the current tab and add active class to the button that opened it
	 document.getElementById(tabId).style.display = "block";
	 document.getElementById(tabId).classList.add("active");
	 evt.currentTarget.classList.add("active");
}

// By default, open the first tab
document.addEventListener("DOMContentLoaded", function() {
	 document.getElementsByClassName("tab-button")[0].click();
});

// END Блок з вкладками TAB, перемикання між вкладками

// Задаємо висоту margin-bottom для header в розмірі 20% від висоти header

function setHeaderMargin() {
	const header = document.getElementById('header');
	const headerHeight = header.offsetHeight;
	header.style.setProperty('--header-height', `${headerHeight}px`);
}

window.onload = setHeaderMargin;

window.onresize = setHeaderMargin;

// END Задаємо висоту margin-bottom для header в розмірі 20% від висоти header

/* dropdown-container */

$(document).ready(function() {
	$('.dropdown-container').each(function() {
		 var $container = $(this);
		 var $showBtn = $container.find('.show-dropdown');
		 var $hideBtn = $container.find('.hide-dropdown');
		 var $dropDownList = $container.find('.drop-down-list');
		 var $title = $container.find('.dropdown-title');

		 $showBtn.click(function() {
			  $dropDownList.slideDown();
			  $showBtn.hide();
			  $hideBtn.show();
			  $title.addClass('active-title'); // Додаємо стиль для заголовка
		 });

		 $hideBtn.click(function() {
			  $dropDownList.slideUp();
			  $hideBtn.hide();
			  $showBtn.show();
			  $title.removeClass('active-title'); // Видаляємо стиль для заголовка
		 });
	});
});

/* END dropdown-container */