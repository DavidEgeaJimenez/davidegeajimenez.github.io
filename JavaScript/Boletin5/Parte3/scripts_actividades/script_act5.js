function calcular() {
    let mes = document.getElementById("mes").value.toLowerCase();
    let est = "";

    if (["diciembre", "enero", "febrero"].includes(mes)) est = "Invierno";
    else if (["marzo", "abril", "mayo"].includes(mes)) est = "Primavera";
    else if (["junio", "julio", "agosto"].includes(mes)) est = "Verano";
    else est = "Otoño";

    document.getElementById("resultado").innerHTML = est;
}