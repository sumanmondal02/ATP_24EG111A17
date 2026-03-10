//5.Write a function that receives 3 number args and return the big number.

function bigOf3Num(a, b, c){
    if(a>b){
        if(a>c){
            return a;
        }
        else
            return c;
    }
    else
        if(b>c){
            return b;
        }
        else
            return c;
}

console.log(bigOf3Num(20, 50, 40));