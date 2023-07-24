'use strict';
//closures

const secureBooking = function() {
    let passengerCount = 0;
    
    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`)
    };
};

const booker = secureBooking();
//our code runs in the GLobal Scope
//When secureBooking is executed --- a new EC is created
//after we return a new FN = stored in the booker
//after execution - secureBooking EC pops off out of the CallSTack

booker();
booker();
booker();

//CLOSURE MAKES A FN remember all the variables that EXISTED at It's BIRTHPLACE
//BOOKER () was created in the EC of secureBOoking()
//so it's able to read the passengerCount var

//like a backpack - that a FN carries with it - carrying all vars that were present when it was created

console.dir(booker);

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener
    ('click', function () {
        header.style.color = 'blue';
    });
}) ();

