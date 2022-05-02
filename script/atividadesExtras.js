function adicionar() {
    const selDiscExtras = document.getElementById('selDiscExtras');
    var value = selDiscExtras.options[selDiscExtras.selectedIndex].value;
    selDiscExtras.remove(selDiscExtras.selectedIndex);

    // Adicionar nas principais
    var discMatriculadas = document.getElementById("discMatriculadas").innerHTML;
    discMatriculadas = discMatriculadas + "<li id='liDiscExtra' class='liDiscExtra'>"+value+"<button class='btn-extra' onclick='removerExtra()'>X</button></li>";
    document.getElementById("discMatriculadas").innerHTML = discMatriculadas;
}

function removerExtra() {
    // Capta o li das disciplinas extras
    var liDiscExtra = document.getElementById('liDiscExtra');
    // Pega o valor
    var value = document.getElementById('liDiscExtra').innerHTML;
    value = value.substring(value.indexOf('<'), 0);
    console.log(value);
    // Remove das extras
    liDiscExtra.remove();

    // Adiciona nas extras novamente
    var selDiscExtras = document.getElementById('selDiscExtras').innerHTML;
    selDiscExtras = selDiscExtras + "<option>"+value+"</option>";
    document.getElementById("selDiscExtras").innerHTML = selDiscExtras;
}

