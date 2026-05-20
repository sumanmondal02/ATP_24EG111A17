//6.Write a function that receives an array as arg and return their sum
// function expression
let arr = function(array){
    let res=0;
    for(let i=0; i<array.length; i++){
        // adding the current element to the result
        res+=array[i];
    }
    return res
}
console.log(arr([20,30,50,10]))