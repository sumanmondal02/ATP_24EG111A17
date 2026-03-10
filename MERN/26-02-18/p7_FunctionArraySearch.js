/*7.Write a function that receives an array & search element as args and return the index of that search element in the array.
It should return "not found" when the search element not found.*/

let array = function (arr, search){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===search)
            return i+1
    }
}

console.log(array([12, 43, 34, 91], 34))
