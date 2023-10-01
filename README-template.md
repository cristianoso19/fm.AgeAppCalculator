# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
Hello dudes, this project apparents be easy, but i learned a lot of things about working with dates, validations, animations, and reduce an string with regex.
I'm happy to end this project its take less time becouse i make a bit every day.

### The challenge

Users should be able to:

- ✅View an age in years, months, and days after submitting a valid date through the form
- ✅Receive validation errors if:
  - ✅Any field is empty when the form is submitted
  - ✅The day number is not between 1-31
  - ✅The month number is not between 1-12
  - ✅The year is in the future
  - ✅The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- ✅View the optimal layout for the interface depending on their device's screen size
- ✅See hover and focus states for all interactive elements on the page
- ✅**Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./design/screenshot.webp)

### Links

- Solution URL: [Github.com](https://github.com/cristianoso19/fm.AgeAppCalculator)
- Live Site URL: [Deployed on Vercel](https://your-live-site-url.com)

## My process
* Start with Html 
* Config css and tailwindcss
* Config postcss
* Add javascript functionalities
* Add animations and more visual elements

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [TailwindCSS](https://tailwindcss.com/) - CSS library

### What I learned
#### Animations
The showAge function creates an animation that displays the progression of age in years, months, and days dynamically on an HTML document. This animation is achieved by periodically updating the DOM elements until they reach the values provided in the age object.
```javascript
function showAge(age){
   
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
```
#### Object.prototype.toString.call(object)
In JavaScript, is a method used to get the internal [[Class]] property of an object, which represents the object type. It's a reliable way to determine the actual type of an object. When you call Object.prototype.toString with an object as this context (which is what happens when you do Object.prototype.toString.call(object)), it returns a string representation of the object's type.

``` javascript
const validateDate = (date) => {
    const dateStr = date;
    date = new Date(date);

    // Object.prototype.toString.call(date) is used to check if 'date' is a valid Date object.
    if (Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)) {
        // If 'date' is a valid Date object and not NaN, it checks if it matches the original string representation.
        return date.toISOString().slice(0, 10) === dateStr;
    }
    return false;
}
```
1. Object.prototype.toString.call(date): This checks the type of the date variable. If it's a valid Date object, it will return "[object Date]".

2. !isNaN(date): This part ensures that the date variable is not NaN. If date is a valid Date object, it won't be NaN.

3. date.toISOString().slice(0, 10) === dateStr: After confirming that date is a valid Date object and not NaN, it converts the Date to a string in the format 'YYYY-MM-DD' using toISOString(). It then compares this string with the original dateStr to ensure that they match. If they match, the input was a valid date string, and the function returns true. Otherwise, it returns false.


## Author

- Website - [Cristian Sacta](https://www.jomron.com)
- Frontend Mentor - [@cristianoso19](https://www.frontendmentor.io/profile/cristianoso19)
- Twitter - [@cristianoso19](https://www.twitter.com/cristianoso19)