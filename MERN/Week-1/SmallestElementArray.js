//4. Find the smallest element in the marks array 
let arr=[10,20,5,15,30]
let smallest=arr[0]
// using for loop
for(let i=1; i<arr.length;i++){
    // comparing the smallest element with the current element
    if(arr[i]<smallest){
        smallest=arr[i]
    }
}
console.log(smallest)