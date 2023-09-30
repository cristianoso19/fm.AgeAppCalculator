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
    ];

    const allConditionsMet = conditions.every(condition => condition === true);

    if (allConditionsMet){
        reviewDate();
        return true;
    } else {
        return false;
    }
}

function reviewDate(){
    const inputDate = yearInput.value+'-'+monthInput.value+'-'+dayInput.value;
    if (validateDate(inputDate)){
        if (validateFuture(inputDate)){
            const age = calculateAge(inputDate);         
            console.log(`Edad: ${age.years} años, ${age.months} meses, ${age.days} días`)
            showAge(age);
        } else {
            setErrorOnFormat("Must be in the past");
        }
    } else {
        setErrorOnFormat("Invalid date");
    }
}

function showAge(age){
    const yearSpan = document.getElementById('age-year');
    const monthSpan = document.getElementById('age-month');
    const daySpan = document.getElementById('age-day');
    
    let currentYear = 0;
    let currentMonth = 0;
    let currentDay = 0;

    const yearInterval = Math.floor(700/age.years); 
    const monthInterval = Math.floor(700/age.months); 
    const dayInterval = Math.floor(700/age.days); 

    const yearTimer = setInterval(() => {
        if (currentYear <= age.years) {
            yearSpan.textContent = currentYear;
            currentYear += 1;
        } else {
            clearInterval(yearTimer);
        }
    }, yearInterval);

    const monthTimer = setInterval(() => {
        if (currentMonth <= age.months) {
            monthSpan.textContent = currentMonth;
            currentMonth += 1;
        } else {
            clearInterval(monthTimer);
        }
    }, monthInterval);

    const dayTimer = setInterval(() => {
        if (currentDay <= age.days) {
            daySpan.textContent = currentDay;
            currentDay += 1;
        } else {
            clearInterval(dayTimer);
        }
    }, dayInterval);
}

function animateCountdown(age) {

}

function calculateAge(birthdayStr) {
    const birthday = new Date(birthdayStr);
    const actualDate = new Date();
  
    const diff = actualDate - birthday;
    const age = new Date(diff);
  
    return {
      years: age.getUTCFullYear() - 1970,
      months: age.getUTCMonth(),
      days: age.getUTCDate(),
    };
  }

const validateFuture =  (date)=>{
    const inputDate = new Date(date);
    const actualDate = new Date();

    return inputDate<=actualDate;

}

const setErrorOnFormat = (message) => {
    setError(dayInput,"");
    setError(monthInput,"");
    setError(yearInput,message);
}

const validateDate = (date) => {
    // Object.prototype.toString.call(object) is a common technique to get the type of an object in JavaScript in a more precise and reliable way than other approaches, as it works for a variety of object types.
    const dateStr = date;
    date = new Date(date);

    if (Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)) {
        return date.toISOString().slice(0, 10) === dateStr;
    }
      
    return false;
}

const actualDate = () => {
    const actualDate = new Date.now();
    const yearNow = actualDate.getFullYear();
    const monthNow = String(actualDate.getMonth() + 1).padStart(2, '0');
    const dayNow = String(actualDate.getDate()).padStart(2, '0');
    
    return `${yearNow}-${monthNow}-${dayNow}`;

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