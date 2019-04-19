$( function() {
	
	//On Scroll Functionality
	$(window).scroll( function() {
		var windowTop = $(window).scrollTop();
		// windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
	});
	
	//Click Logo To Scroll To Top
	$('#logo').on('click', function() {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	
	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 160
		},500);
		e.preventDefault();
	});
	
	//Toggle Menu
	$('.menu-toggle').on('click', function() {
		$('.menu-toggle').toggleClass('closeMenu');
		$('.menu-box').toggleClass('showMenu');
		// $('body').toggleClass('overflow-y');
		
		$('li').on('click', function() {
			$('.menu-box').removeClass('showMenu');
			$('.menu-toggle').removeClass('closeMenu');
		});
	});
	
});

// menu button text toggle

const menuText = document.querySelector('.menu-toggle');
const mobileMenuIcon = document.querySelector('.mobile-menu');
const linkClicked = document.querySelectorAll('.link-click');

function checkMenuText() {
	if(menuText.innerHTML === 'Product Menu') {
		menuText.innerHTML = 'Close Menu';
	} 
	else {
		menuText.innerHTML = 'Product Menu'
	}
}

menuText.addEventListener('click', function() {
	checkMenuText()
})

mobileMenuIcon.addEventListener('click', function(){
	checkMenuText()
})


for(var i = 0; i<linkClicked.length; i++) {

	linkClicked[i].addEventListener('click', function(){
		checkMenuText()
	})
}



//  menu button text toggle end