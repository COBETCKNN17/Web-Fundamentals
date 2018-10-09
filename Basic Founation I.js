/** Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255. **/
function one(){
    var newArray = [];
    for(i=0; i<=255; i++){
        newArray.push(i); 
    }
    return newArray; 
}

/** Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise. */
function two(){
    var sum = 0;
    for(var i = 0; i <= 1000; i+=2){
        sum+=i; 
    }
    return sum; 
}

/** Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999). */
function three(){
    var sum = 0;
    for(var i = 1; i <= 5000; i+=2){
        sum+=i; 
    }
    return sum; 
}

/** Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14). */
function four(arr){
    var sum = 0;
    for(var i = 0; arr <= arr.length; i++){
        sum+=arr[i]; 
    }
    return sum; 
}

/** Find max - Given an array with multiple values, write a function that returns the maximum number in the array.  */
function five(arr){
    var max = 0; 
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]; 
        }
    }
    return max;
}

five([33,4,1,4]); 

/** Find average - Given an array with multiple values, write a function that returns the average of the values in the array.  */
function six(arr){
    var sum = 0;
    var avg = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    avg = sum / arr.length; 
    return avg; 
}

six([4,2,5,1,4,2,2]); 

/** Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method. */
function seven(){
    var newArray = [];
    for(var i = 1; i < 50; i+=2){
        newArray.push(i);
    }
    return newArray;
}

seven(); 

/** Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. */
function eight(arr, y){
    var counter = 0; 
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > y){
            counter++;
        }
    }
    return counter;
}

eight([2,3,45,2,4,5,2,], 3); 

/** Squares - Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. */
function nine(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i]; 
    }
    return arr;
}

nine([3,4,5,1]); 
/** Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values.  */

function ten(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr; 
}

ten([4,2,4,-2,3]); 

/** Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array.  */
function eleven(arr){
    var min = 0;
    var max = 0;
    var sum = 0;
    var avg = 0;
    var newArray = []; 
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]; 
        }
        if(arr[i] > max){
            max = arr[i]; 
        }
        sum+=arr[i]; 
    }
    avg = arr.length / sum; 
    newArray = [max, min, avg];
    return newArray; 
}

eleven([3,4,2,4,2,1,3,3]); 

/** Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2.  */
function twelve(arr){
    for(var i = 0; i < arr.length; i++){
        var temp = arr[0];
        arr[0] = arr[arr.length-1]; 
        arr[arr.length-1] = temp; 
    }
    return arr; 
}

twelve([2,3,4,2,3]); 

/** Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'.  */
function thirteen(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo"
        }
    }
    return arr;
}
thirteen([3,4,-32,-3,1,3,3]); 