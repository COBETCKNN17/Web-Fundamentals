/** Given an array and a value Y, count and print the number of array values greater than Y. **/

function one(arr, y){
    var sum = 0; 
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > y){
            sum++;
        }
    }
    console.log('The number of array values greater than y is ' + sum); 
}

one([3,4,5,2,4], 2); 

/** Given an array, print the max, min and average values for that array. **/
function two(arr){
    var min = 0;
    var max = 0;
    var sum = 0; 
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
        sum += arr[i];
    }
    var avg = sum / arr.length; 
    console.log("Min: " + min + ". Max: " + max + ". Avg: " + avg); 
}
two([3,5,6,8,4,2]);

/** Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.  **/
function three(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}

three([1,2,-3,-5,5]); 

/** Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). */
function four(arr, start, end){
    for(var i = 0; i < arr.length; i++){
    var index = arr.indexOf(i+1);
      if(i>=start && i<=end){
        arr.splice(index,1);
      }
    }
    console.log("array: " + arr); 
}

four([20,30,40,50,60,70],2,4); 