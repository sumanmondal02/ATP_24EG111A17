/*7.Write a function that receives an array & search element as args and return the index of that search element in the array.
It should return "not found" when the search element not found.*/
 
// function expression
let array = function (arr, search){
    for(let i=0; i<arr.length; i++){
        // comparing the current element with the search element
        if(arr[i]===search)
            return i+1
    }
    return "not found"
}

console.log(array([12, 43, 34, 91], 34))
