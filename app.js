// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//variables
let listanombres = [];

//Agregar texto a elemento HTML
function agregarTexto(id, texto)
{
    let elemento = document.getElementById(id);
    elemento.innerHTML = texto;
}

// Limpiar input
function limpiarInput()
{
    document.getElementById("amigo").value = "";
}

// Agrega un amigo a la lista de nombres
function agregarAmigo() 
{
        let nombreAmigo = document.getElementById("amigo").value;
        listanombres.push(nombreAmigo);
        agregarTexto("listaAmigos", `${listanombres}`);
        limpiarInput();
        return nombreAmigo;
}