function generate ()  {
    var valoresHexadecimales = 
    ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
    var newColor = "#";


    
    for(var i = 0; i < 8; i++) {
        var x = Math.round(Math.random() * 14);
        var y = valoresHexadecimales[x];
        newColor += y; 
    }

    document.getElementById("container").style.backgroundColor = newColor;

    document.getElementById("output").innerHTML = newColor;
}

generate();

function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }
