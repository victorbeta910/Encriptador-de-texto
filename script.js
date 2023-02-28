window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
document.getElementById("texto_encriptado").style.display = "none";
document.getElementById("alert").style.display = "none";
}

function encriptar() {
    
    let texto1 = document.getElementById("texto").value.toLowerCase();
    if (validations(texto1)=="passed"){
        //alert("aqui entro");
        let textoEncriptado= texto1.replace(/e/igm, "enter");
        textoEncriptado= textoEncriptado.replace(/o/igm, "ober");
        textoEncriptado= textoEncriptado.replace(/i/igm, "imes");
        textoEncriptado= textoEncriptado.replace(/a/igm, "ai");
        textoEncriptado= textoEncriptado.replace(/u/igm, "ufat");
        
        //alert(texto1);
        document.getElementById("texto_encriptado").innerHTML=textoEncriptado;
        //document.getElementById("texto").value="";
        document.getElementById("imagen-persona").style.display = "none";
        document.getElementById("texto_encriptado").style.display = "block";
        //alert("hola");
    }
    else{
        document.getElementById("alert").style.display = "flex";
        //alert("Debe ingresar solo texto, no en minuscula ni caracteres especiales");
    }
        
}

function desencriptar() {
    var texto2 = document.getElementById("texto_encriptado").value.toLowerCase();
    /*var textoDesencriptado= texto2.replace("enter", "e");
    var textoDesencriptado= textoDesencriptado.replace("ober", "o");
    var textoDesencriptado= textoDesencriptado.replace("imes", "i");
    var textoDesencriptado= textoDesencriptado.replace("ai", "a");
    var textoDesencriptado= textoDesencriptado.replace("ufat", "u");
    */
    var textoDesencriptado= texto2.replace(/enter/igm, "e");
    var textoDesencriptado= textoDesencriptado.replace(/ober/igm, "o");
    var textoDesencriptado= textoDesencriptado.replace(/imes/igm, "i");
    var textoDesencriptado= textoDesencriptado.replace(/ai/igm, "a");
    var textoDesencriptado= textoDesencriptado.replace(/ufat/igm, "u");
    
    //alert(texto1);
    //document.getElementById("texto_encriptado").innerHTML=textoDesencriptado;
    //document.getElementById("texto").value=textoDesencriptado;
    document.getElementById("texto_encriptado").value=textoDesencriptado;
        
    //alert("hola");    
}

function copiar() {
    var textoCopiado = document.getElementById("texto_encriptado").value;
    //alert(textoCopiado);
    //location.reload();
    document.getElementById("texto").value=textoCopiado;
    //alert(document.getElementById("texto").value);
    //document.getElementById("texto_encriptado").value="";
}

function validations(check) {
    if (check.match(/[0-9]/g)) {
      return "No admite números";
    } else if (check.match(/[A-Z]/g)) {
      return "Solo letras minúsculas";
    } else if (!check.match(/^[a-z\s]+$/g)) {
      return "No debe tener acentos";
    }
    return "passed";
  }
  


