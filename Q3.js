function addNumbers(array){
    let sum = 0;
    for(let i=0; i < array.length; i++){
        sum += array[i]
    }
    return sum;
}

function findMaxNumber(){
    return Math.max(...arguments);
}

function addOnlyNumbers(mixedArray){
    let sum = 0;
    for(let i=0; i < mixedArray.length; i++){
        if (typeof mixedArray[i] === "number"){
            sum += mixedArray[i];            
        } else {
            let num = parseFloat(mixedArray[i]);
            if (!isNaN(num)){
                sum += num;
            }
        }
    }
    return sum;
}

function getDigits(str){
    // Use regular expression to find all digits in the string
    let digits = str.match(/\d/g);

    // Check if any digits were found
    if (digits){
        // Concatenate all found digits into a single string of numbers
        return digits.join("");
    } else {
        // If no digits were found, return an empty string
        return "";
    }
}

function reverseString(str){
    // Step 1: Use the split() method to return a new array
    let split = str.split("");

    // Step 2: Use the reverse() method to reverse the new array
    let reversed = split.reverse();

    // Step 3: Use the join() method to join all elements
    let joined = reversed.join("")
    
    return joined;
}

function getCurrentDate(){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let now = new Date();
    let dayOfWeek = days[now.getDay()]; 
    let month = months[now.getMonth()]; 
    let day = now.getDate(); 
    let year = now.getFullYear(); 

    return `${dayOfWeek}, ${month} ${day}, ${year}`;
}