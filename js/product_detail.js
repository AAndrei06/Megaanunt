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
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

const cartButtons = document.querySelectorAll('.cart-button');

cartButtons.forEach(button => {
	button.addEventListener('click', cartClick);
});

function cartClick() {
	let button = this;
	button.classList.add('clicked');
}

