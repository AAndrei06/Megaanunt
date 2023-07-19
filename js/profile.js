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


const theme1 = localStorage.getItem("theme");

if (theme1 == "dark") {

	document.body.style.backgroundColor = "#18191a";
	document.querySelector('.profile-container').style.backgroundColor = "#18191a";
	document.querySelector('.profile-info-container').style.backgroundColor = "#242526";
	document.querySelector('.profile-info-container').style.border = "none";
	document.querySelector('.user-name-info').children[0].style.color = "lightgray";
	document.querySelector('.user-email-info').children[0].style.color = "lightgray";
	document.querySelector('.ads-profile').style.color = "whitesmoke";
	document.querySelectorAll('.cart-product').forEach((cart) => {
		cart.style.backgroundColor = "#242526";
		cart.style.boxShadow = "none";
	})

	document.querySelectorAll('.description-of-product-cart').forEach((cart) => {
		cart.style.color = "whitesmoke";
	})
	document.querySelector('.user-name-cart').style.backgorundColor = "#242526";
	document.querySelectorAll('.edit-btn-ad').forEach((btn) => {
		btn.style.backgroundColor = "#2f3031";
	})
	document.querySelectorAll('.delete-btn-ad').forEach((button) => {
		button.style.backgroundColor = "#2f3031";
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
else {

	document.body.style.backgroundColor = "whitesmoke";
	document.querySelector('.profile-container').style.backgroundColor = "whitesmoke";
	document.querySelector('.profile-info-container').style.backgroundColor = "whitesmoke";
	document.querySelector('.profile-info-container').style.border = "1px solid lightgray";
	document.querySelector('.user-name-info').children[0].style.color = "#3c505f";
	document.querySelector('.user-email-info').children[0].style.color = "#3c505f";
	document.querySelector('.ads-profile').style.color = "black";
	document.querySelectorAll('.cart-product').forEach((cart) => {
		cart.style.backgroundColor = "white";
		cart.style.boxShadow = "0px 0px 10px lightgray";
	})

	document.querySelectorAll('.description-of-product-cart').forEach((cart) => {
		cart.style.color = "gray";
	})
	document.querySelector('.user-name-cart').style.backgorundColor = "whitesmoke";
	document.querySelector('.functional-buttons').children[0].style.backgorundColor = "white";
	document.querySelector('.functional-buttons').children[1].style.backgorundColor = "white";
	document.querySelectorAll('.edit-btn-ad').forEach((btn) => {
		btn.style.backgorundColor = "black";
	})
	document.querySelectorAll('.delete-btn-ad').forEach((button) => {
		button.style.backgorundColor = "white";
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

