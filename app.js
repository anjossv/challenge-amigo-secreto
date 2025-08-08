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