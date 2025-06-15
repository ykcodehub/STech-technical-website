// let userobj = [] ;
if (localStorage.length > 1){
    console.log("database is activated already ")
}else{
    console.log("activating database")
    localStorage.setItem("USERS",JSON.stringify([]))
    localStorage.setItem("USEROBJ",JSON.stringify([]))
}

let UserFromLDB = (localStorage.getItem("USERS"))
let userobj = JSON.parse(localStorage.getItem("USEROBJ")) ;

console.log(UserFromLDB)
let parsedDb = JSON.parse(UserFromLDB)
// console.log(parsedDb[0])
// console.log(parsedDb[1])



let signUpEmailData = document.getElementById("signUpEmailData");
let signUpPasswordData = document.getElementById("signUpPasswordData");
let signUpPasswordConfirmData = document.getElementById("signUpPasswordConfirmData"); ;
let signUpBtn = document.getElementById("signUpBtn") ;
signUpBtn.addEventListener("click",()=>{
    checkempty();
})
function CheckUserExist(user,password){
    console.log(parsedDb.length)
    let foundDtatus = 0 ;
    for (let i = 0; i < parsedDb.length; i++) {
        if(parsedDb[i] == user){
            foundDtatus = 1 ;  
        }
    }
    if(foundDtatus == 1 ){
        console.log("User already exists")
    }else{
        console.log("User not in database you can proceed")
        let newDb = parsedDb ;
        newDb.push(user)
        localStorage.setItem("USERS",JSON.stringify(newDb))
        console.log("we have pushed new user in database local")
        let newUserObj = {"userMail" : user,"UserPass":password}
        userobj.push(newUserObj)
        localStorage.setItem("USEROBJ",JSON.stringify(userobj))
    }
}
function checkPassword(p1,p2,user){
    console.log("checking password")
    if (p1.length < 4){
        console.log("Short password")
        alert("Password is too short")
    }
    else{
        if(p1 === p2){
            console.log("password same")
            CheckUserExist(user,p1);
        }else{
            alert("Password not matched")
            console.log("Password Not matched")
        }
    }
}
function checkempty (){
    let signUpEmailDataValue = signUpEmailData.value;
    let signUpPasswordDataValue = signUpPasswordData.value;
    let signUpPasswordConfirmDataValue = signUpPasswordConfirmData.value;
    if (signUpEmailDataValue&&signUpPasswordDataValue&&signUpPasswordConfirmDataValue){
        // password length
        console.log("someone clicked signupBtn")
        console.log(signUpEmailDataValue)
        console.log(signUpPasswordDataValue)
        console.log(signUpPasswordConfirmDataValue)
        checkPassword(signUpPasswordDataValue,signUpPasswordConfirmDataValue,signUpEmailDataValue);
    }
    else{
        alert("Plese fill all data feilds")
    }
}

function data(){
    let signUpEmailDataValue = signUpEmailData.value;
    let signUpPasswordDataValue = signUpPasswordData.value;
    let signUpPasswordConfirmDataValue = signUpPasswordConfirmData.value;
}





// banda hai
// ab data base me add karo