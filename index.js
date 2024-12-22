function add(numbers) {
    if (!numbers) {
      return 0; // Return 0 for an empty string
    }
  
    let delimiter = /,|\n/; // Default delimiters: comma and newline
  
    // Check if the input specifies a custom delimiter
    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      delimiter = new RegExp(numbers.substring(2, delimiterEndIndex)); // Extract and create a regex for the custom delimiter
      numbers = numbers.substring(delimiterEndIndex + 1); // Remove the delimiter line
    }
  
    // Split the string into an array of numbers using the determined delimiter
    const numArray = numbers.split(delimiter);
  
    // Track negative numbers for validation
    const negatives = [];
  
    // Calculate the sum while checking for negative numbers
    const sum = numArray.reduce((total, num) => {
      const parsedNum = parseInt(num, 10);
      if (isNaN(parsedNum)) {
        return total; // Ignore invalid numbers
      }
      if (parsedNum < 0) {
        negatives.push(parsedNum); // Collect negative numbers
      }
      return total + parsedNum;
    }, 0);
  
    // Throw an exception if there are negative numbers
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
  
    return sum;
  }
  

  // test
  try {
    console.log(add(""));
    console.log(add("1"));
    console.log(add("1,5"));
    console.log(add("1\n2,3"));
    console.log(add("//;\n1;2"));
    console.log(add("//|\n4|5|6"));
    console.log(add("-1,2,-3"));
  } catch (e) {
    console.error(e.message);
  }
  