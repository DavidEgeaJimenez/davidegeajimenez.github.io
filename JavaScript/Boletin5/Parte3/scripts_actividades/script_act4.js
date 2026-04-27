function calcular() {
    let mes = document.getElementById("mes").value.toLowerCase();
    let est;

    switch (mes) {
        case "diciembre": case "enero": case "febrero": est = "Invierno"; break;
        case "marzo": case "abril": case "mayo": est = "Primavera"; break;
        case "junio": case "julio": case "agosto": est = "Verano"; break;
        default: est = "Otoño";
    }

    let res = document.getElementById("resultado");
    res.style.background = "red";
    res.style.color = "yellow";
    res.innerHTML = est;
}