//6.Write a function that receives an array as arg and return their sum

let arr = function(array){
    let res=0
    for(let i=0; i<array.length; i++){
        res+=array[i];
    }
    return res
}
console.log(arr([20,30,50,10]))