// 1
function calculateSum(num1, num2){
    return num1 + num2;
}
console.log(calculateSum(6,12));

// 2
function isEven(n){
    if(n%2==0)
        return true;
    else return false;
}
console.log(isEven(7));

// 3
function findMax(arr){
    let maxElement = arr[0];
    for(let element of arr){
        if (element > maxElement){
            maxElement = element;
        }
    }
    return maxElement;
}
console.log(findMax([1,2,5,-8,2,0]));

// 3
function reverseString(str){
    let arr = str.split('');
    let reversed = arr.reverse().join('');
    return reversed;
}
console.log(reverseString('Python'));


// 4
function filterOddNumbers(arr){
    const filterednumbers = arr.filter(function(number){
        if (number % 2 != 0)
            return number;
    });
    return filterednumbers;
}
const arr = [1,2,3,4,5,6,7,8];
console.log(filterOddNumbers(arr));


// 5
function sumArray(arr){
    let sum = 0;
    arr.forEach(function(number){
        sum += number;
    });
   return sum;
}
console.log( sumArray([1,2,3]));

// 6
function sortArray(arr){
    arr.sort();
    return arr;
}
console.log(sortArray([5,1,8,3,4]));

// 7
function capitalizeFirstLetter(str){
    return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter('mern'));


