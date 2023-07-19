let category_objects = document.querySelectorAll(".category-option");
let btn = document.querySelector(".button-category");
let dropdownV = document.querySelector('.dropdown-v');
let slideMenuOptions = document.querySelector('.slide-menu-options');
let dropdownOptions = document.querySelectorAll('.category-option');
let slideMenu = document.querySelector('#menu-slide-area-banner');
let menuButton = document.querySelector('.menu-icon-div');
let backArrow = document.querySelector('.fa-arrow-left');
let count = 0;
let show = false;

dropdownOptions[0].style.border = 'none';
slideMenuOptions.children[4].style.border = 'none';

function showMenu(){
	count = 45;

	for (let i = 0;i < category_objects.length;i++){
		category_objects[i].style.transform = `translateY(${count})`;
		category_objects[i].style.top = `${count}px `;
		count = count + 35;
	} 
	dropdownV.style.transform = 'rotate(180deg)';
	dropdownV.style.bottom = "8px";
	show = true;
}

function hideMenu(){
	count = 0;
	for (let i = 0;i < category_objects.length;i++){
		category_objects[i].style.transform = `translateY(${-count})`;
		category_objects[i].style.top = `${count}px `;
	} 
	dropdownV.style.transform = 'rotate(0deg)';
	dropdownV.style.bottom = "12px";
	show = false;
}
btn.addEventListener('click',function(){
	if (show == false){
		showMenu();
	}
	else{
		hideMenu();
	}
})

menuButton.addEventListener('click',function (){
	slideMenu.classList.toggle('active-slide-menu');
})

backArrow.addEventListener('click',function(){
	slideMenu.classList.toggle('active-slide-menu');
})


 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 10,
      mousewheel: {
  			releaseOnEdges: true,
			},
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
		   	120: {
		      slidesPerView: 1,
		      spaceBetween: 10
		    },
		    440: {
		      slidesPerView: 2,
		      spaceBetween: 10
		    },
		    400: {
		      slidesPerView: 2,
		      spaceBetween: 10
		    },
		    470: {
		      slidesPerView: 2,
		      spaceBetween: 10
		    },
		    580: {
		      slidesPerView: 3,
		      spaceBetween: 10
		    },

  	}
    });

	const theme1 = localStorage.getItem("theme");

if (theme1 == "dark"){

		document.body.style.backgroundColor = "#18191a";
		document.querySelector('.recommended-users-block').style.backgroundColor = "#18191a";
		document.querySelector('.text-post-ask').style.color = "lightgray";
		document.querySelector('.container-swipe').style.backgroundColor = "#18191a";
		document.querySelectorAll('.swiper-slide').forEach((swiper) => {
			swiper.style.backgroundColor = "#242526";
			swiper.style.color = "whitesmoke";
		})

		document.querySelectorAll('.product-object-home').forEach((object) => {
			object.style.backgroundColor = "#242526";
			object.style.color = "whitesmoke";
			object.style.border = "none";
			object.style.boxShadow = "0px 0px 2px gray";
		})
		/* Common */

		document.querySelector('.banner-object').style.backgroundColor = "#242526";
		document.querySelector('.banner-object').style.color = "whitesmoke";
		document.querySelectorAll('.about-contact').forEach((element) => {
			element.style.color = "whitesmoke";
		})

		document.querySelector('.input-search-cls').style.backgroundColor = "#444546";
		document.querySelector('.input-search-cls').style.color = "whitesmoke";
		document.querySelector('.search-results-banner').style.backgroundColor = "#444546";
		document.querySelector('.input-search-cls').style.border = "none";
		document.querySelector('.search-results-banner').style.border = "none";
		document.querySelector('.fa-cart-shopping').style.color = "whitesmoke";
		document.querySelector('.button-category').style.backgroundColor = "#47494b";
		document.querySelectorAll('.category-option').forEach((element) => {
			element.style.backgroundColor = "#47494b";
			element.style.color = "whitesmoke";
			element.style.borderColor = "gray";
		})

		document.querySelector('.menu-slide-area-banner').style.backgroundColor = "#242526";
		document.querySelector('.menu-slide-area-banner').style.color = "whitesmoke";
		document.querySelectorAll('.link-menu-option').forEach((link) => {
			link.style.color = "whitesmoke";

		});

		document.querySelectorAll('.category-menu-option').forEach((category) => {
			category.style.color = "whitesmoke";
		})

		document.querySelector(".category-slide-title").style.color = "whitesmoke";
		document.querySelector('.fa-arrow-left').style.color = "whitesmoke";
		/* Common */
	}
else{

		document.body.style.backgroundColor = "whitesmoke";
		document.querySelector('.recommended-users-block').style.backgroundColor = "whitesmoke";
		document.querySelector('.text-post-ask').style.color = "black";
		document.querySelector('.container-swipe').style.backgroundColor = "whitesmoke";
		document.querySelectorAll('.swiper-slide').forEach((swiper) => {
			swiper.style.backgroundColor = "white";
			swiper.style.color = "black";
		})

		document.querySelectorAll('.product-object-home').forEach((object) => {
			object.style.backgroundColor = "white";
			object.style.color = "black";
			object.style.border = "1px solid lightgray";
			object.style.boxShadow = "none";
		})
		/* Common */

		document.querySelector('.banner-object').style.backgroundColor = "white";
		document.querySelector('.banner-object').style.color = "#1b263f";
		document.querySelectorAll('.about-contact').forEach((element) => {
			element.style.color = "#1b263f";
		})

		document.querySelector('.input-search-cls').style.backgroundColor = "whitesmoke";
		document.querySelector('.input-search-cls').style.color = "black";
		document.querySelector('.search-results-banner').style.backgroundColor = "whitesmoke";
		document.querySelector('.input-search-cls').style.border = "1px solid gray";
		document.querySelector('.search-results-banner').style.border = "1px solid gray";
		document.querySelector('.fa-cart-shopping').style.color = "#1b263f";
		document.querySelector('.button-category').style.backgroundColor = "white";
		document.querySelectorAll('.category-option').forEach((element) => {
			element.style.backgroundColor = "white";
			element.style.color = "black";
			element.style.borderColor = "lightgray";
		})

		document.querySelector('.menu-slide-area-banner').style.backgroundColor = "white";
		document.querySelector('.menu-slide-area-banner').style.color = "black";
		document.querySelectorAll('.link-menu-option').forEach((link) => {
			link.style.color = "black";

		});

		document.querySelectorAll('.category-menu-option').forEach((category) => {
			category.style.color = "#1b263f";
		})

		document.querySelector('.fa-arrow-left').style.color = "black";

		/* Common */
}