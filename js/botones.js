const Alumno = require('./alumnos');
const {
    guardarEnMemoria,
    mostrarDeMemoria,
    eliminarInputs,
    quitarLista,
    mostrarResultado
} = require('./almacenamiento');
const mensajeAviso = require('./mensajes');

document.getElementById("botCarga").addEventListener("click", () => {
    const nombreAlumno = document.getElementById("inputNom").value;
    const notaMatematicas = [parseInt(document.getElementById("NotaMat").value)];
    const notaGeografia = [parseInt(document.getElementById("NotaGeo").value)];
    const notaHistoria = [parseInt(document.getElementById("NotaHis").value)];

    const nuevoAlumno = new Alumno(nombreAlumno, notaMatematicas, notaGeografia, notaHistoria);
    alumnos.push(nuevoAlumno);
    guardarEnMemoria(alumnos);
    eliminarInputs();
});

document.getElementById("botMostrar").addEventListener("click", () => {
    const listaAlumnos = document.getElementById("listaAlumnos");

    if (listaAlumnos.innerHTML === '') {
        mostrarDeMemoria();
        botonMostrarAlumnos.innerText = "Ocultar Lista";
    } else {
        listaAlumnos.innerHTML = '';
        botonMostrarAlumnos.innerText = "Mostrar Lista";
    }
});

document.getElementById("botElimLista").addEventListener("click", quitarLista);
document.getElementById("botAprob").addEventListener("click", mostrarResultado);

