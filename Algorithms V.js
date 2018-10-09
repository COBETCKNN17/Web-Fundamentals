/** Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].
 */

function one(arr){
     for(var i = 0; i < arr.length; i++){
         if(arr[i] < 0){
             arr[i] = 0;
         }
     }
     return arr;
 }

 one([1,2,-1,-3]);

 /** Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  */
function two(arr){
    for(var i = 0; i < arr.length-1; i++){
        if(arr[i+1]){
            arr[i] = arr[i+1]; 
        }
    }
    // to remove array's final value 
    arr.pop(); 
    arr.push(0); 
    return arr;
}

two([1,2,3]); 

 /** Given an array, return an array with values in a reversed order.  */
function three(arr){
    return arr.reverse(); 
}

three([1,2,3]);

// second solution 
function reverse(arr){
    for(var i = 0; (arr[i] < length / 2); i++){
        // only go to the half-way point only
        var temp = arr[i];
        arr[i] = arr[arr.length-i-1]; 
        arr[arr.length-i-1] = temp; 
    }
    return arr;
}

reverse([2,3,5,1]); 

/** Create a function that changes a given array to list each original element twice, retaining original order.  Have the function return the new array.   */

function four(arr){
    for(var i = 0; i < arr.length; i+1){
        var temp = arr[i];
        arr[i] = arr[i+1];
    }
    return arr;
}

four([1,2,3]);

// figure out how many elements are in the array
// push fake data, then overwrite pieces using temporary values 

function removeValues(arr,start,end){
    arr = arr.splice(start, end-start+1, /** what to replace it with **/, null); 
    return arr; 
}

// double trouble: 
function doubleTrouble(arr){
    for(var i = 0; i < arr.length; i+=2){
        arr.splice(i,0,arr[i]); 
    }
    return arr;
}

var x = [2,3,3,5,4]
console.log(doubleTrouble(x)); 