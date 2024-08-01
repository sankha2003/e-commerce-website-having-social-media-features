const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

let popup = document.getElementById("popup");

function openpopup() {
    //var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "sankhadeepk13@gmail.com" && password === "1234") {
        popup.classList.add("openpopup");
    } else {
        alert("Wrong information");
    }
}

function closepopup() {
    // popup.classList.remove("openpopup");
    window.location.assign("mainpage.html")
//     }
}


function myfunction(){
    var x = document.getElementById("password");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");

    if(x.type === 'password') {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
        }
        else{
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
        }
       
}