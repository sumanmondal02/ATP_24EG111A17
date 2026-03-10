/*OTP Countdown Simulator (Console App)
        Simulate OTP sending flow in Node.js:
        Show “OTP Sent Successfully”
        Start 10-second countdown
        Allow resend only after countdown ends*/

let seconds=10;
let intervalID=setInterval(()=>{
    seconds--
    console.log(seconds,"seconds remaining")
    if(seconds === 0) {
        console.log("OTP has expired. You can now resend OTP.")
        clearInterval(intervalID)
    }
},1000)
console.log("OTP Sent Successfully")