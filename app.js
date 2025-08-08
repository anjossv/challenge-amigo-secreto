// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//variables
let listanombres = [];
let cantidadNombres = 0;

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
    console.log(listanombres);
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo.trim() === "")
        {
            alert("Por favor, ingrese un nombre");
        }
        else
            {
                listanombres.push(nombreAmigo);
                actualizarListaAmigos();
                limpiarInput();
                cantidadNombres++;
                console.log(cantidadNombres);
            }    
    
}

function actualizarListaAmigos()
{
    //Obtener un elemento de la lista   
    lista = document.getElementById ("listaAmigos");
    //limpiar lista existente 
    lista.innerHTML = "";
    //Recorrer array 
    for (let i = 0; i < listanombres.length; i++) 
    {   
        let li = document.createElement("li")
        li.textContent = listanombres[i]
        lista.appendChild(li)
    }

}
function sortearAmigo()
{
    let nombreSeleccionado = Math.floor(Math.random()*cantidadNombres);
    //validar que la lista tenga nombres
    if (listanombres == "")
    {
        alert("La lista está vacía, por favor ingrese un nombre");
    }
    else if (listanombres.length === 1)
    {
        alert("la lista solo tien un nombre, por favor ingrese otro nombre para realizar el sorteo");
    }
    else
    {
        console.log(listanombres[nombreSeleccionado]);
        return agregarTexto("resultado",`Su amigo secreto es ${listanombres[nombreSeleccionado]}`);
    }
    
}