let loginPasswordData = document.getElementById("loginPasswordData")
let loginEmailData = document.getElementById("loginEmailData")
let loginBtn = document.getElementById("login-btn")

loginBtn.addEventListener("click",()=>{
    let loginEmailDataValue = loginEmailData.value
    let loginPasswordDataValue = loginPasswordData.value
    console.log("login page loades")
    console.log(loginEmailDataValue,loginPasswordDataValue)
    // compare if true and not true
    let dataString = localStorage.getItem("USEROBJ")
    let parsedArray = JSON.parse(dataString)
    let verified ;
    console.log(parsedArray)
    console.log(typeof(parsedArray))
    // parsedArray.foreach((comp)=>{
    //     if(comp.UserPass == loginPasswordDataValue && comp.userMail == loginEmailDataValue){
    //         verified = true ;
    //         // console.log("hhh")
    //     }
    //     else{
    //         // console.log("XXX")
    //         verified = false ;
    //     }
    // })
    // console.log(verified)
    
    // console.log(p/arsed)
    
})