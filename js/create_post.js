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

let createPostInputs = document.querySelectorAll(".input-element-post");
let textList = document.querySelectorAll('.text-list');

for (let i = 0;i < createPostInputs.length;i++)
{
   createPostInputs[i].addEventListener('focus', function() {
         textList[i].style.visibility = "visible";
         createPostInputs[i].style.borderColor = "#00a6dd";
         createPostInputs[i].style.borderWidth = "2px";
   });

      createPostInputs[i].addEventListener('focusout', function() {
         textList[i].style.visibility = "hidden";
         createPostInputs[i].style.borderColor = "gray";
         createPostInputs[i].style.borderWidth = "1px";
   });

}

const theme1 = localStorage.getItem("theme");

if (theme1 == "dark"){

		document.body.style.backgroundColor = "#18191a";
		document.querySelector('.create-post-form').style.backgroundColor = "#242526";
		document.querySelector('.title-of-form-post').style.color = "whitesmoke";

		document.querySelectorAll('.input-element-post').forEach((input) => {
			input.style.backgroundColor = "#3a3b3c";
			input.style.color = "whitesmoke";
			input.style.border = "1px solid gray";
		})
		document.querySelectorAll('.text-list').forEach((text) =>{
			text.style.display = "none";

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
		document.querySelector('.create-post-form').style.backgroundColor = "white";
		document.querySelector('.title-of-form-post').style.color = "#1b263f";
		document.querySelectorAll('.input-element-post').forEach((input) => {
			input.style.backgroundColor = "white";
			input.style.color = "black";
			input.style.border = "1px solid gray";
		})
		document.querySelectorAll('.text-list').forEach((text) =>{
			text.style.display = "block";

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