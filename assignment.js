// Question: 1 What will be the output and why?

const circle = {
    radius: 20,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};
console.log(circle.diameter());
console.log(circle.perimeter());
/* In the first question output will be 40 for first console.log because diameter() is normal function and is bound to the circle object and "this" refers to the cirlce and this.radius returs 20, this.radius*2 = 20*2 = 40 */

/* for second console.log output will be NaN (Not a Number) because perimeter function is defined as aerrow function therefor it's not bound to circle method and "this" method return the global object that is undefined tharefor this.radius returs undefined and returs NaN */



// Question 2: Write a program to show the current date in DD-MM-YYYY HH:MM:SS format.

/* In JavaScript to show the date and time there is a method named as Date() here is the code for define the dat and time */

const currentDate = new Date();

const dateString = currentDate.toLocaleString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
});

console.log(dateString);

/* currentDate refers to the current date and time while toLocaleString converts the date and time into the string format. we will get output as "02/06/2023, 13:56:51"  */





// Question 3: How to focus an input element on page load in ReactJS? 

import React, { useRef, useEffect } from 'react';

const InputFocus = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return ( <
        input type = "text"
        ref = { inputRef }
        />
    );
};

export default InputFocus;


/* for focus on input element while page load we need to use React Hooks such as useRef and useEffect. the useRef hook is used to create a reference to the input element. The reference is stored in the inputRef variable, which is passed to the ref prop of the input element.useEffect hook is used to run a function after the component has mounted. In this case, the function focuses the input element by calling the focus method on the reference stored in inputRef. The second argument to useEffect, [], ensures that the effect only runs once, on mount */