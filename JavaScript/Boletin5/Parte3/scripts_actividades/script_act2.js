function comprobar() {
    let n = document.getElementById("numero").value;
    let res = document.getElementById("resultado");

    res.style.background = "black";
    res.style.color = "white";

    res.innerHTML = (n % 2 === 0) ? "Es divisible por 2" : "No es divisible por 2";
}