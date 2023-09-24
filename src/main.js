const form = document.getElementById('form');
const dayInput = document.getElementById('year');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');

form.addEventListener('submit', (e)=>{
    e.preventDefault;
    if (validateForm){
        showAge();
    } else {
        showErrors();
    }
});