const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (validateForm()){
        console.log("Form Validate");
        // showAge();
    } else {
        // showErrors();
        console.log("Error NO Validate");
    }
});

function validateForm(){
    const conditions = [
        reviewDay(),
        reviewMonth(),
        reviewYear(),
        //reviewDate(),
    ];

    const allConditionsMet = conditions.every(condition => condition === true);

    if (allConditionsMet){
        return true;
    } else {
        return false;
    }
}

function reviewDay(){
    if (dayInput.value === ''){
        setError(dayInput, "The field is required");
        return false;
    } else if (validateDay(dayInput.value)){
        setSuccess(dayInput);
        return true;
    } else {
        setError(dayInput, "Must be a valid day");
        return false;
    }
}

function reviewMonth(){
    if (monthInput.value === ''){
        setError(monthInput, "The field is required");
        return false;
    } else if (validateMonth(monthInput.value)){
        setSuccess(monthInput);
        return true;
    } else {
        setError(monthInput, "Must be a valid month");
        return false;
    }
}

function reviewYear(){
    if (yearInput.value === ''){
        setError(yearInput, "The field is required");
        return false;
    } else if (validateYear(yearInput.value)){
        setSuccess(yearInput);
        return true;
    } else {
        setError(yearInput, "Must be a valid year");
        return false;
    }
}

function validateDay (value){
    let regexPattern =/^(0[1-9]|[1-2][0-9]|3[0-1])$/;
    return regexPattern.test(value); 
}

function validateMonth (value){
    let regexPattern =/0[1-9]|1[0-2]/;
    return regexPattern.test(value); 
}

function validateYear (value){
    let regexPattern =/[0-9]{2}/;
    return regexPattern.test(value); 
}

const setSuccess = (element) =>{
    const inputControl = element.parentElement;
    const successLabel = inputControl.querySelector('label');

    deleteIfExists(inputControl, 'span');
 
    element.classList.remove('border-error');
    element.classList.add('border-primary');
    
    successLabel.classList.remove('text-error');
    successLabel.classList.add('text-primary');
} 

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorLabel = inputControl.querySelector('label');

    deleteIfExists(inputControl,'span');

    const childElement = document.createElement('span');
    childElement.textContent = message;
    inputControl.appendChild(childElement);

    element.classList.remove('border-primary');
    element.classList.add('border-error');
    childElement.classList.add('text-error', 'italic', 'text-[10px]', 'traking-tighest');
    errorLabel.classList.remove('text-primary');
    errorLabel.classList.add('text-error');
}

const deleteIfExists = (element,label) => {
    if (document.contains(element.querySelector(label))){
        element.querySelector(label).remove();
    }
}