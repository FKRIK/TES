
function registrar() {
    var nota = document.getElementById("nota").value;
        var addnota  = document.getElementById("condicao").innerHTML;
        addnota = addnota +"<td>"+addnota+"</td>";
        document.getElementById("condicao").innerHTML = addnota;

    if (nota >= 6)
    
        document.getElementById("condicao").innerHTML = "Aprovado"
    
    else
    
        document.getElementById("condicao").innerHTML = "Reprovado"
    
}
  