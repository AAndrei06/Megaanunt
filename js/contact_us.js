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

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.querySelector('.user-profile-image-create').src = user.photoURL;
    }else{
        window.location = "login.html";
    }
});

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

let createPostInputs = document.querySelectorAll(".focus-element");
let textList = document.querySelectorAll('.text-list');
let error_messages = document.querySelectorAll('.error-message');

const theme1 = localStorage.getItem("theme");

for (let i = 0;i < createPostInputs.length;i++)
{
   createPostInputs[i].addEventListener('focus', function() {
         textList[i].style.visibility = "visible";
         createPostInputs[i].style.borderColor = "#00a6dd";
         createPostInputs[i].style.borderWidth = "2px";
         error_messages[i].style.visibility = "hidden";
         document.querySelector('.btn-send-email').innerHTML = "Trimite";
         if (theme1 == "dark")
         {
	         document.querySelectorAll('.text-list').forEach((text) => {
				text.style.visibility = "hidden";
			})
	     }


   });

      createPostInputs[i].addEventListener('focusout', function() {
         textList[i].style.visibility = "hidden";
         createPostInputs[i].style.borderColor = "gray";
         createPostInputs[i].style.borderWidth = "1px";
   });

}

function validateEmail(email){
	return String(email)
	.toLowerCase()
	.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}


function sendMail(){
	let params = {
		name:document.getElementById("name-id").value,
		email:document.getElementById("email-id").value,
		message:document.getElementById("message-id").value,
	}

	let checks = 0;

	if (params.name.length == 0){
		error_messages[0].style.visibility = "visible";
		document.getElementById('name-id').style.borderColor = "red";
		document.querySelector('.btn-send-email').innerHTML = "Eroare";
		checks++;
	}

	if (!validateEmail(params.email)){
		error_messages[1].style.visibility = "visible";
		document.getElementById('email-id').style.borderColor = "red";
		document.querySelector('.btn-send-email').innerHTML = "Eroare";
		checks++;
	}

	if (params.message.length == 0){
		error_messages[2].style.visibility = "visible";
		error_messages[2].style.position = "relative";
		error_messages[2].style.bottom = "5px";
		document.getElementById('message-id').style.borderColor = "red";
		document.querySelector('.btn-send-email').innerHTML = "Eroare";
		checks++;
	}

	const serviceID = "service_1fxlqmt";
	const templateID = "template_rcxsuof";
	if (checks == 0)
	{
		emailjs.send(serviceID,templateID,params).then(res => {
			document.querySelector('.btn-send-email').innerHTML = "Trimis";
			document.getElementById("name-id").value = "";
			document.getElementById("email-id").value = "";
			document.getElementById("message-id").value = "";
		})
	}


}





if (theme1 == "dark"){

		document.body.style.backgroundColor = "#18191a";
		document.querySelector('.about-us-information').style.backgroundColor = "#242526";
		document.querySelector('.about-us-information').style.color = "whitesmoke";
		document.querySelector('.contact-posibilities').style.color = "lightgray";
		document.querySelector('.line-in-the-middle').children[0].style.color = "lightgray";
		document.querySelector('.line-in-the-middle').children[0].style.backgroundColor = "#242526";
		document.querySelector('.contact-us-form-email').style.backgroundColor = "#242526";

		document.querySelectorAll('.input-element').forEach((input) => {
			input.style.marginTop = "10px";
		})

		document.querySelectorAll('.focus-element').forEach((input) => {
			input.style.backgroundColor = "#3a3b3c";
			input.style.color = "whitesmoke";
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
		document.querySelector('.about-us-information').style.backgroundColor = "white";
		document.querySelector('.about-us-information').style.color = "black";
		document.querySelector('.contact-posibilities').style.color = "#3b4a59";
		document.querySelector('.line-in-the-middle').children[0].style.color = "black";
		document.querySelector('.line-in-the-middle').children[0].style.backgroundColor = "white";
		document.querySelector('.contact-us-form-email').style.backgroundColor = "white";

		document.querySelectorAll('.input-element').forEach((input) => {
			input.style.marginTop = "0px";
		})

		document.querySelectorAll('.focus-element').forEach((input) => {
			input.style.backgroundColor = "white";
			input.style.color = "black";
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
