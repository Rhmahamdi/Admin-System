
const usernameInput = document.getElementById("usernameInput"); 
const userEmailInput = document.getElementById("userEmailInput"); 
const userPasswordInput = document.getElementById("userPasswordInput"); 
const signupBtn = document.getElementById("signupBtn"); 

let usersinfo=[];
let adminInfo=[];

if(localStorage.getItem("Admin") == null)
{
    usersinfo = [];
}
else
{
    usersinfo = JSON.parse(localStorage.getItem("Admin"));
}

var username = localStorage.getItem("sessionUsername");


function loginAdmin()
{
    let loginEmail = document.getElementById("loginEmail");
    let loginPassword = document.getElementById("loginPassword");
    let loginBtn = document.getElementById("loginBtn");
    let wrongMsg = document.getElementById("wrongMsg");

    if(loginEmail.value == "" || loginPassword.value == "")
    {
        let fillMsg = document.getElementById("fillMsg");
        fillMsg.classList.replace("d-none", "d-block");
        return false
    }
    adminInfo=[
        {
            name:"Ahmed",
            email: "ahmed@gmail.com",
            password:123
        }
    ]
    for( var i = 0; i < adminInfo.length; i++ )
    {
        if(adminInfo[i].email.toLowerCase()==loginEmail.value.toLowerCase() && adminInfo[i].password == loginPassword.value.toLowerCase())
        {
            // localStorage.getItem('sessionUsername', adminInfo[i].email)
            loginBtn.setAttribute("href", "welcome.html");
            displayWelcomeUser()
        }
        else
        {
            wrongMsg.classList.replace("d-none", "d-block");
        }
    }

}
function displayWelcomeUser()
{
    document.getElementById("username").innerHTML = "Welcome Admin";

}

function logout() {
    localStorage.removeItem('sessionUsername')
}




function Emplogin()
{
    
    let loginEmail = document.getElementById("loginEmail");
    let loginPassword = document.getElementById("loginPassword");
    let loginBtn = document.getElementById("loginBtn");
    let wrongMsg = document.getElementById("wrongMsg");

    if(loginEmail.value == "" || loginPassword.value == "")
    {
        let fillMsg = document.getElementById("fillMsg");
        fillMsg.classList.replace("d-none", "d-block");
        return false
    }
    usersinfo=[
        {
            name:"rahma",
            email: "rahma@gmail.com",
            password:123
        },
        {
            name:"mazen",
            email: "mazen@gmail.com",
            password:123
        },
        {
            name:"omar",
            email: "omar@gmail.com",
            password:123
        },
        {
            name:"yara",
            email: "yara@gmail.com",
            password:123
        }


    ]
    for( var i = 0; i < usersinfo.length; i++ )
    {
        if(usersinfo[i].email.toLowerCase()==loginEmail.value.toLowerCase() && usersinfo[i].password == loginPassword.value.toLowerCase())
        {
            // localStorage.getItem('sessionUsername', adminInfo[i].email)
            loginBtn.setAttribute("href", "employee.html");
        }
        else
        {
            wrongMsg.classList.replace("d-none", "d-block");
        }
    }
}



















//============================================================

function startNow(){
    let bodyy= document.getElementById("body")
    bodyy.innerHTML=`

    <section>
    <div class="container py-5 ">
        <div class="w-50 p-5 m-auto text-center form-container  bg-dark">
            <h2 class="text-white mb-4">Admin</h2>
            <div class="mb-3 ">
                <input type="text" class="form-control bg-transparent text-white" id="loginEmail" placeholder="Enter you email">
            </div>
            <div class="mb-3">
                <input type="password" class="form-control bg-transparent text-white mb-5" id="loginPassword" placeholder="Enter your password">
            </div>
            <p class="text-danger d-none" id="fillMsg"> Kindly Fill the Inputs First !</p>
            <p class="text-danger d-none" id="wrongMsg">your email or password is incorrect</p>
            <a class="btn btn-outline-light text-light w-100 mb-3 text-decoration-none" id="loginBtn" onclick="loginAdmin()">Login</a>
        </div>
    </div>
    `
}


function startWork(){
    let bodyy= document.getElementById("body")
    bodyy.innerHTML=`

    <section>
    <div class="container py-5 ">
        <div class="w-50 p-5 m-auto text-center form-container  bg-dark">
            <h2 class="text-white mb-4">Employee</h2>
            <div class="mb-3 ">
                <input type="text" class="form-control bg-transparent text-white" id="loginEmail" placeholder="Enter you email">
            </div>
            <div class="mb-3">
                <input type="password" class="form-control bg-transparent text-white mb-5" id="loginPassword" placeholder="Enter your password">
            </div>
            <p class="text-danger d-none" id="fillMsg"> Kindly Fill the Inputs First !</p>
            <p class="text-danger d-none" id="wrongMsg">your email or password is incorrect</p>
            <a class="btn btn-outline-light text-light w-100 mb-3 text-decoration-none" id="loginBtn" onclick="Emplogin()">Login</a>
        </div>
    </div>
    `
}


//===================================================
//Admin Dashbord 

let EmpNameInput = document.getElementById("EmpNameId");
let EmpEmailInput = document.getElementById("EmpEmailId");
let EmpPhoneInput = document.getElementById("EmpPhone");
let EmpSalaryInput = document.getElementById("EmpSalary");
let EmpPositionInput = document.getElementById("EmpPosition");
let myAddBtn =document.getElementById("addEmp");

var allEmployees=[];

if (localStorage.getItem("myEmployees")!= null){
    allEmployees = JSON.parse( localStorage .getItem("myEmployees"))
    displayEmployees()
}


function addEmployee()
{
    let EmpNameVALUE = EmpNameInput.value ;
    let EmpEmailValue = EmpEmailInput.value ;
    let EmpPhoneValue = EmpPhoneInput.value ;
    let EmpSalaryValue = EmpSalaryInput.value ;
    let EmpPositionValue = EmpPositionInput.value ;



    var oneEmployee = 
    {
        name: EmpNameVALUE ,
        email: EmpEmailValue ,
        phone: EmpPhoneValue,
        salary: EmpSalaryValue ,
        position: EmpPositionValue
    }
    allEmployees.push( oneEmployee );
    console.log(allEmployees);
    
    localStorage.setItem ("myEmployees" , JSON.stringify(allEmployees) )

    clearInputs()
    displayEmployees()

}

function clearInputs(){
    EmpNameInput.value ="";
    EmpEmailInput.value ="";
    EmpPhoneInput.value ="";
    EmpSalaryInput.value ="";
    EmpPositionInput.value ="";

}


function displayEmployees(){
    
    var myData=``;

    for( var i=0 ; i< allEmployees.length ;i++)
     {
        myData+= `<tr>
        <td>` + allEmployees[i].name + `</td>
        <td>` + allEmployees[i].email +`</td>
        <td>` + allEmployees[i].phone +`</td>
        <td>` + allEmployees[i].salary +`</td>
        <td>` + allEmployees[i].position +`</td>
        <td><button onclick="updateEmployee(`+i+`)" class="btn-outline-warning"> Update </button></td>
        <td> <button onclick="deleteEmployee(`+i+`)" class=" btn-outline-danger"> Delete </button> </td>
        </tr>`
        
    }
    document.getElementById("tBody").innerHTML=myData;
}

function deleteEmployee( Index )
{
    allEmployees.splice ( Index ,1);
    displayEmployees();
    localStorage.setItem ("myEmployees" ,JSON.stringify(allEmployees));
}


function searchEmployee( userWord ){

    console.log(userWord);

    var myData=``;

    for( var i=0 ; i< allEmployees.length ;i++)
     {
        myData+= `<tr>
        <td>` + allEmployees[i].name + `</td>
        <td>` + allEmployees[i].email +`</td>
        <td>` + allEmployees[i].phone +`</td>
        <td>` + allEmployees[i].salary +`</td>
        <td>` + allEmployees[i].position +`</td>
        <td><button onclick="updateEmployee(`+i+`)" class="btn-outline-warning"> Update </button></td>
        <td> <button onclick="deleteEmployee(`+i+`)" class=" btn-outline-danger"> Delete </button> </td>
        </tr>`
        
    }
    document.getElementById("tBody").innerHTML=myData;
} 


function updateEmployee(i){

    EmpNameInput.value = allEmployees[i].name;
    EmpEmailInput.value = allEmployees[i].email;
    EmpPhoneInput.value = allEmployees[i].phone;
    EmpSalaryInput.value = allEmployees[i].salary;
    EmpPositionInput.value = allEmployees[i].position;
   
    myAddBtn.innerHTML = "update EmployeeData";
    myAddBtn.classList.add("btn-warning");
    myAddBtn.setAttribute("onclick", "updateCurrentEmp("+i+")")
 
 }


 function updateCurrentEmp(Index){

    allEmployees[Index].name=EmpNameInput.value;
    allEmployees[Index].email=EmpEmailInput.value;
    allEmployees[Index].phone=EmpPhoneInput.value;
    allEmployees[Index].salary=EmpSalaryInput.value;
    allEmployees[Index].position=EmpPositionInput.value;
    displayEmployees();
    clearInputs();
    localStorage.setItem("myEmployees", JSON.stringify(allEmployees));
    myAddBtn.innerHTML = "Add Employee";
    myAddBtn.classList.remove("btn-warning");
    myAddBtn.setAttribute("onclick", "addEmployee()")


}


























