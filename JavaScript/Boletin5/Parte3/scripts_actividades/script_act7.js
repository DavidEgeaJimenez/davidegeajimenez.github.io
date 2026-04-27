function mostrar() {
    let nombre = document.getElementById("nombre").value;
    let provincia = document.getElementById("provincia").value;
    let pueblo = document.getElementById("pueblo").value;

    document.getElementById("resultado").innerHTML =
        `${nombre}, eres de ${provincia} de ${pueblo}`;
}