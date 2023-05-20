// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {

    let multiples = [];
    for (let i = 1; i < number; i++) {
        // see if i is a multiple of 3
        // if yes, push to array
        // elsif see if i is a multiple of 5 and it's not already in array
        // if yes, push to array
        if ((i % 15 === 0) && !(multiples.includes(i))) {
            multiples.push(i);
        } else if ((i % 5 === 0) && !(multiples.includes(i))) {
            multiples.push(i);
        } else if ((i % 3 === 0) && !(multiples.includes(i))) {
            multiples.push(i);
        }
    }
    let index = 0;
    let sum = 0;

    while (index < multiples.length) {
        sum += multiples[index]
        index++;
    }

    return sum;
}

