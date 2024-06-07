const Alumno = require('./alumnos');

let alumnos = JSON.parse(sessionStorage.getItem("arrayAlumnos")) || [];

function guardarEnMemoria(alumnos) {
    const alumnosJSON = JSON.stringify(alumnos);
    sessionStorage.setItem("arrayAlumnos", alumnosJSON);
}

async function mostrarDeMemoria() {
    const listaAlumnos = JSON.parse(sessionStorage.getItem("arrayAlumnos"));
    if (listaAlumnos) {
        const contenedor = document.getElementById("listaAlumnos");
        contenedor.innerHTML = "";
        listaAlumnos.forEach(alumno => {
            const div = document.createElement("div");
            div.className = "alumno";

            const nombre = document.createElement("h2");
            nombre.innerText = `Nombre: ${alumno.nombre}`;
            nombre.className = "nombreAlumno";
            const notaMatematicas = document.createElement("p");
            notaMatematicas.innerText = `Nota de Matemáticas: ${alumno.notas.matematicas}`;

            const notaGeografia = document.createElement("p");
            notaGeografia.innerText = `Nota de Geografía: ${alumno.notas.geografia}`;

            const notaHistoria = document.createElement("p");
            notaHistoria.innerText = `Nota de Historia: ${alumno.notas.historia}`;

            div.appendChild(nombre);
            div.appendChild(notaMatematicas);
            div.appendChild(notaGeografia);
            div.appendChild(notaHistoria);

            contenedor.appendChild(div);
        });
    } else {
        await mensajeAviso();
    }
}

function eliminarInputs() {
    document.getElementById("inputNom").value = "";
    document.getElementById("NotaMat").value = "";
    document.getElementById("NotaGeo").value = "";
    document.getElementById("NotaHis").value = "";
}

function quitarLista() {
    const listaAlumnos = sessionStorage.getItem("arrayAlumnos");
    if (listaAlumnos) {
        sessionStorage.removeItem("arrayAlumnos");
        Swal.fire({
            title: 'Hecho!',
            text: "La lista de alumnos se borró",
            icon: "success"
        });
        console.log("Lista vacía");
        const contenedor = document.getElementById("listaAlumnos");
        contenedor.innerHTML = "";
        alumnos = [];
    } else {
        Swal.fire({
            title: 'Espera!',
            text: "Estas queriendo borrar una lista vacia",
            icon: "warning",
            confirmButtonText: "Volver atras"
        });
    }
    const resultado = document.getElementById("resultadoRevision");
    if (resultado) {
        resultado.innerHTML = "";
    }
}

function mostrarResultado() {
    const listaAlumnos = JSON.parse(sessionStorage.getItem("arrayAlumnos"));
    if (listaAlumnos) {
        const contenedor = document.getElementById("resultadoRevision");
        contenedor.innerHTML = "";
        const todosAprobados = listaAlumnos.every(alumno => {
            const todosAlumnos = new Alumno(alumno.nombre, alumno.notas.matematicas, alumno.notas.geografia, alumno.notas.historia);
            return todosAlumnos.aproboAnio();
        });

        if (todosAprobados) {
            const resultadoAprobado = document.createElement("p");
            resultadoAprobado.innerText = "¡Todos los alumnos aprobaron!";
            resultadoAprobado.style.color = "#26C485";
            contenedor.appendChild(resultadoAprobado);
        } else {
            const resultadoDesaprobado = document.createElement("p");
            resultadoDesaprobado.innerText = "Lamentablemente uno o más alumnos desaprobaron";
            resultadoDesaprobado.style.color = "#C33C54";
            contenedor.appendChild(resultadoDesaprobado);
        }

        if (todosAprobados == null) {
            const noHayResultado = document.createElement("p");
            noHayResultado.innerText = "No hay resultados para evaluar.";
            contenedor.appendChild(noHayResultado);
        }
    }
}

module.exports = {
    guardarEnMemoria,
    mostrarDeMemoria,
    eliminarInputs,
    quitarLista,
    mostrarResultado
};
