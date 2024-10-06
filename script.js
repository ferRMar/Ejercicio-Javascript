let mensaje = 'Llene los campos vacíos y/o incorrectos';

function cargarInf() {
    let nomb, apellidoP, apellidoM, age;
    nomb = document.getElementById('nombre').value;
    apellidoP = document.getElementById('apPat').value;
    apellidoM = document.getElementById('apMat').value;
    age = parseInt(document.getElementById('edad').value);

    if(nomb == '' || apellidoP == '' || apellidoM == '' || isNaN(age) || age <= 0){
        alert(mensaje);
        return;
    }
    document.getElementById('textBoxName').innerHTML = nomb;
    document.getElementById('textBoxaPt').innerHTML = apellidoP;
    document.getElementById('textBoxaMt').innerHTML = apellidoM;
    document.getElementById('textBoxAge').innerHTML = age;
    
}

function ocultar() {
    document.getElementById('nombre').value = '';
    document.getElementById('apPat').value = '';
    document.getElementById('apMat').value = '';
    document.getElementById('edad').value = '';

    document.getElementById('textBoxName').innerHTML = '';
    document.getElementById('textBoxaPt').innerHTML = '';
    document.getElementById('textBoxaMt').innerHTML = '';
    document.getElementById('textBoxAge').innerHTML = '';
    document.getElementById('nombre').focus();
}