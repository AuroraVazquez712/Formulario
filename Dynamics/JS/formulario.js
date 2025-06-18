let input_nom= document.getElementById("nombre");
let input_codigo_postal= document.getElementById("codigo_postal");
let input_edad= document.getElementById("edad");
let mainform = document.getElementById("mainform");
let input_genero= document.getElementById("Genero");
let input_interes= document.getElementById("intereses");

mainform.addEventListener("submit", e =>{
    e.preventDefault();
    alert("uy kieto 0_0");

    console.log("El nombre es: " + input_nom.value);
    if (input_codigo_postal.value.length == 5)
    {
        console.log("El código postal es correcto: " +input_codigo_postal);

    }
    else
    {
        console.log("Código Postal Inválido");
    }

    if(isNaN(input_edad.value)== true)
    {
        console.log("La edad no es numérica");
    }
    else
    {
        console.log("La edad es numérica");
    }

    let generos =["Masculino", "Femenino", "Otro"];
    let input_genero=document.querySelector("input[name='Genero']:checked");
    console.log("El género seleccionado es: "+ input_genero.value);

    if (generos.indexOf(input_genero.value)!= -1)
    {
        console.log("Tu genero es válido. Todos los géneros son válidos =)");
    }
    else 
    {
        console.log("El genero es: " +input_genero.value + " no es opción valida");
    }

    let opc_intereses =["tecnologia", "deportes", "musica", "arte"];
    let input_interes=document.querySelector("input[name='intereses']:checked");
    console.log("Los intereses seleccionados son: "+ input_interes.value);

    if (generos.indexOf(input_interes.value)!= -1)
    {
        console.log("Tu interés es válido. Todos los intereses son válidos =)");
    }
    else 
    {
        console.log("El interes es es: " +input_interes.value + " no es opción valida");
    }
});