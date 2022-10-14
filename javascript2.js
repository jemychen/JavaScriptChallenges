// Average
// Write a function to find the average value in an array of numbers

function average(arr) {
    // Loop over each number. Add them together then divide by number of nums
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    let result = total/arr.length;
    return result;
}