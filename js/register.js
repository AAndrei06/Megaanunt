let inputs = document.querySelectorAll('.input-field');
let textList = document.querySelectorAll('.name-of-input');
let errors = document.querySelectorAll('.error-message');

for (let i = 0;i < inputs.length;i++)
{
   inputs[i].addEventListener('focus', function() {
         textList[i].style.display = "inline-block";
         inputs[i].style.borderColor = "#00a6dd";
         inputs[i].style.borderWidth = "2px";
   });

      inputs[i].addEventListener('focusout', function() {
         textList[i].style.display = "none";
         inputs[i].style.borderColor = "gray";
         inputs[i].style.borderWidth = "1px";
   });

}
