function generate ()  {
    var valoresHexadecimales = 
    ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
    var newColor = "#";


    //Para cambiar la longitud del valor hexadecimal cambia la condición númerica del bucle for
    for(var i = 0; i < 8; i++) {
        var x = Math.round(Math.random() * 14);
        var y = valoresHexadecimales[x];
        newColor += y; 
    }

    document.getElementById("container").style.backgroundColor = newColor;

    document.getElementById("output").innerHTML = newColor;
}

generate();