function mostrarresultado(texto)
{
     document.getElementById("resultado").value=texto;
}

function mostraralert(texto)
{
    alert(texto);
}

function  sumar()
{
    mostrarresultado(parseInt(document.getElementById("nro1").value) + parseInt(document.getElementById("nro2").value));
}

function  restar()
{
    mostrarresultado(parseInt(document.getElementById("nro1").value) - parseInt(document.getElementById("nro2").value));
}

function  multiplicar()
{
    mostrarresultado(parseInt(document.getElementById("nro1").value) * parseInt(document.getElementById("nro2").value));
}

function  dividir()
{
    mostrarresultado(parseInt(document.getElementById("nro1").value) / parseInt(document.getElementById("nro2").value));
}