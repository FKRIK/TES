function adicionar() {
        var arq = document.getElementById("arquivos").value;
        var lista  = document.getElementById("lista").innerHTML;
        lista = lista +"<li>"+arq+"</li>";
        
        document.getElementById("lista").innerHTML = lista;
}