function add(numbers) {
    if (!numbers) {
        return 0; // return 0 for an empty string
    }

    // replace newlines with commas, then split the string into an array of numbers
    const numArray = numbers.replace(/\n/g, ",").split(",");

    // parse each string to a number and calculate the sum
    const sum = numArray.reduce((total, num) => {
        const parsedNum = parseInt(num, 10);
        return total + (isNaN(parsedNum) ? 0 : parsedNum); // Ignore invalid numbers
    }, 0);

    return sum;
}

// Examples
console.log(add("")); // Output: 0
console.log(add("1")); // Output: 1
console.log(add("1,5")); // Output: 6
console.log(add("1\n2,3")); // Output: 6
