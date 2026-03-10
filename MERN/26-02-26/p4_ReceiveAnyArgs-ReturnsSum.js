//Write a function that receives any no of arguments and returns the sum of all the arguments
function Sum(...args){
    let sum=0
    for(let i=0; i<args.length; i++){
        sum+=args[i]
    }
    console.log(sum)
}
Sum(10,20,30,40,50,60,70)
Sum(26,32,35,63,21,35,64,88,31)


//Using reduce(accumulator,element,inital)

function SumRed(...args){
    console.log(args.reduce((accumulator,element)=>accumulator+element))
}
SumRed(10,20,30,40,50,60,70)
SumRed(26,32,35,63,21,35,64,88,31)