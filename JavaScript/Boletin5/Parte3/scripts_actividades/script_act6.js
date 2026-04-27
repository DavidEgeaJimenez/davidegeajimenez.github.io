function calcular() {
    let nombre = document.getElementById("nombre").value;
    let dinero = parseFloat(document.getElementById("dinero").value);
    let iva;

    if (dinero >= 5000) iva = 0.10;
    else if (dinero > 3000) iva = 0.15;
    else iva = 0.21;

    let total = dinero + dinero * iva;

    document.getElementById("resultado").innerHTML = `${nombre} paga ${total}€`;
}