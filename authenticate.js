function userAuthentication() {
    let login=document.getElementById("login").value

    let password=document.getElementById("password").value

    if(login=="sunil" && password=="123456")
      {
        alert("wel come sunil.."+login)
    window.location="./home.html"

      }
    else
     alert("Access Denied")
}