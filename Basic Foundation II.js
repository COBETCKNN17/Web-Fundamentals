/** Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big".   */
function one(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big"
        }
    }
    return arr;
}
one([3,4,-32,-3,1,3,3]); 

/** Print Low, Return High - Create a function that takes array of numbers.  The function should print the lowest value in the array, and return the highest value in the array. */
function two(arr){
    var min = 0;
    var max = 0; 
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]; 
        }
        if(arr[i] > max){
            max = arr[i]; 
        }
        console.log("min: " + min);
        return max; 
    }
}

/** Print One, Return Another - Build a function that takes array of numbers.  The function should print second-to-last value in the array, and return first odd value in the array. */
function three(arr){
    console.log("second to last value: " + arr[arr.length-2]); 
    for(var i = 0; i < arr.length; i++){
        if(arr[i] %2 !==0){
            return arr[i]; 
        }
    }
}

three([3,2,4,2,4,12,3]); 

/** Double Vision - Given array, create a function to return a new array where each value in the original has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing original. */
function four(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * 2;
    }
    return arr;
}

four([3,2,4,2,4,12,3]); 

/** Count Positives - Given array of numbers, create function to replace last value with number of positive values.  */
function five(arr){
    var counter = 0; 
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            counter++; 
        }
    }
    arr[arr.length-1] = counter;
    return arr; 
}

five([3,2,4,5,3]); 

/** Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!" */
function six(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i]%2 !==0 && arr[i] === arr[i+1] && arr[i] === arr[i+2]){
            console.log("That's odd!");
        }
        if(arr[i]%2 ===0 && arr[i] === arr[i+1] && arr[i] === arr[i+2]){
            console.log("even more so"); 
        }
    }
}

six([3,3,3,4,4,4,4]); 

/** Increment the Seconds - Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).  Afterward. console.log each array value and return arr.
 */

 function seven(arr){
     for(var i = 0; i < arr.length; i++){
         if(arr[i] %2 == 0){
             arr[i] = arr[i] + 1; 
         }
         console.log("current element is " + arr[i]);
     }
     return arr; 
 }

 seven([3,2,4,2,1,3]); 

 /**Previous Lengths - You are passed an array containing strings.  Working within that same array, replace each string with a number - the length of the string at previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. */
***
 function eight(arr){
     for(var i = 1; i < arr.length; i++){
         arr[i] = arr[0]; 
     }
     return arr; 
 }

 function eight(['hello', 'dojo', 'awesome']); 

 /** Add Seven to Most - Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array. */
 function nine(arr){
     arr.splice(0,1); 
     for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] + 7; 
     }
     return arr; 
 }

 nine([1,2,4]); 

 /** Reverse Array - Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  Do this without creating an empty temporary array.  */
 function ten(arr){
    for(var i = 0; (i < (arr.length / 2)); i++){
        // only go to the half-way point only
        var temp = arr[i];
        arr[i] = arr[arr.length-i-1]; 
        arr[arr.length-i-1] = temp; 
    }
    return arr;
}

ten([1,2,3,4,5]); 

/** Outlook: Negative - Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
 */
function eleven(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = arr[i] * -1;
        }
    }
    return arr;
}

eleven([-1,2,-3]); 

/** Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array elements are "food", then print "I'm hungry" once.
 */

function twelve(arr){
	var foodCounter = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === "food"){
			console.log("yummy");
			foodCounter++;
		} 
		if(foodCounter == 0){
			console.log("I'm hungry");
		}
	}
}

/** Swap Toward the Center - Given array, swap first and last, third and third-to-last, etc.  Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1]. */
function thirteen(arr){
    for(var i = 0; (i < (arr.length / 2)); i++){
        // only go to the half-way point only
        var temp = arr[i];
        arr[i] = arr[arr.length-i-1]; 
        arr[arr.length-i-1] = temp; 
    }
    return arr;
}

thirteen([1,2,3,4,5]); 

/** Scale the Array - Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr.  For example, scaleArray([1,2,3],3) should return [3,6,9]. */
function fourteen(arr, num){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * num; 
    }
    return arr; 
}

fourteen([2,3,3], 4); 