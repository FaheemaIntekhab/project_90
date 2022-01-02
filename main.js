function addUser(){
    player1_name = document.getElementById("player1_login").value;
    player2_name = document.getElementById("player2_login").value;

    localStorage.setItem("player1_login", player1_login);
    localStorage.setItem("player2_login", player2_login);

    window.location = "index.html";
}