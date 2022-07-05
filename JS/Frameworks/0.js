// function validateForm() {
//     var nx = document.getElementById("KEY").value;
//     localStorage.setItem("username", nx);
//     var x = document.forms["myForm"]["key"].value;
//     if (x == "21RE000" || x == "21RE002") {
//         window.location.href = "intro-story/story-intro1.html";
//         return false;
//     }
//     else {
//         alert("This Page is Not Meant For You!");
//         return false;
//     }
// }

function login() {
    var nx = document.getElementById("KEY").value;
    localStorage.setItem("username", nx);
    if (nx >= "21RE000" && nx <= "21RE100") {
        window.location.href = "intro-story/story-intro1.html";
        return false;
    }
    else {
        alert("This Page is Not Meant For You!");
        return false;
    }
}