function mostrar() {
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);

    let año = new Date().getFullYear() - edad;

    let texto = `${nombre} tiene ${edad} años y es ${edad >= 18 ? "mayor" : "menor"} de edad. Año nacimiento: ${año}`;

    document.getElementById("resultado").innerHTML = texto;

    return resultado;
}