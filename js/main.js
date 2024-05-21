// function cargaDeAlumnos(cantidadAlumnos) {
//     for (let i = 0; i < cantidadAlumnos; i++) {
//         let nombreAlumno = prompt("Ingresa el nombre del alumno.");
//         let examenesMate = parseInt(prompt("Cuantos examenes rindio de Matematicas?"));
//         let examenesGeo = parseInt(prompt("Cuantos examenes rindio de Geografia?"));
//         let examenesHisto = parseInt(prompt("Cuantos examenes rindio de Historia?"));
        
//         let notaMatematicas = [];
//         let notaGeografia = [];
//         let notaHistoria = [];
        
//         while (notaMatematicas.length < examenesMate) {
//             let cargar = parseInt(prompt("Ingresa las notas de matematicas."));
//             notaMatematicas.push(cargar);
//         }
        
//         while (notaGeografia.length < examenesGeo) {
//             let cargar = parseInt(prompt("Ingresa las notas de geografia."));
//             notaGeografia.push(cargar);
//         }
        
//         while (notaHistoria.length < examenesHisto) {
//             let cargar = parseInt(prompt("Ingresa las notas de historia."));
//             notaHistoria.push(cargar);
//         }


//     }
// }
    class Alumno {
        constructor(nombre, notasMatematicas, notasGeografia, notasHistoria) {
            this.nombre = nombre;
            this.notas = {
                matematicas: notasMatematicas,
                geografia: notasGeografia,
                historia: notasHistoria
            };
        }

        promedioNotas(materia) {
            const sumaNotas = this.notas[materia].reduce((acc, nota) => acc + nota, 0);
            const promedio = sumaNotas / this.notas[materia].length;
            return promedio;
        }

        aproboMateria(materia) {
            const promedio = this.promedioNotas(materia);
            return promedio >= 6;
        }

        aproboAnio() {
            return this.aproboMateria("matematicas") && this.aproboMateria("geografia") && this.aproboMateria("historia");
        }
    }

    let alumnos = JSON.parse(sessionStorage.getItem("arrayAlumnos")) || [];

    function guardarEnMemoria(alumnos) {
        const alumnosJSON = JSON.stringify(alumnos);
        sessionStorage.setItem("arrayAlumnos", alumnosJSON);
    }

    function mostrarDeMemoria() {
        const listaAlumnos = JSON.parse(sessionStorage.getItem("arrayAlumnos"));
        if (listaAlumnos) {
            const contenedor = document.getElementById("listaAlumnos");
            contenedor.innerHTML = ""; // Limpiar contenido previo
            listaAlumnos.forEach(alumno => {
                const div = document.createElement("div");
                div.className = "alumno";

                const nombre = document.createElement("h2");
                nombre.innerText = `Nombre: ${alumno.nombre}`;
                nombre.className = "nombreAlumno";

                const notaMatematicas = document.createElement("p");
                notaMatematicas.innerText = `Nota de Matemáticas: ${alumno.notas.matematicas.join(", ")}`;

                const notaGeografia = document.createElement("p");
                notaGeografia.innerText = `Nota de Geografía: ${alumno.notas.geografia.join(", ")}`;

                const notaHistoria = document.createElement("p");
                notaHistoria.innerText = `Nota de Historia: ${alumno.notas.historia.join(", ")}`;

                div.appendChild(nombre);
                div.appendChild(notaMatematicas);
                div.appendChild(notaGeografia);
                div.appendChild(notaHistoria);

                contenedor.appendChild(div);
            });
        } else {
            console.log("No hay alumnos en memoria.");
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
            alert("Se borró la lista! Ya puedes ingresar un nuevo lote de alumnos");
            console.log("Lista vacía");
            const contenedor = document.getElementById("listaAlumnos");
            contenedor.innerHTML = "";
            alumnos = []; 
        } else {
            alert("No hay nada cargado, revisa que hayas ingresado un alumno al menos");
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
                contenedor.appendChild(resultadoAprobado);
            } else {
                const resultadoDesaprobado = document.createElement("p");
                resultadoDesaprobado.innerText = "Lamentablemente uno o más alumnos desaprobaron";
                contenedor.appendChild(resultadoDesaprobado);
            }

            if(todosAprobados==null){
                const noHayResultado = document.createElement("p");
                noHayResultado.innerText = "No hay resultados para evaluar.";
                contenedor.appendChild(noHayResultado);
            }
        }
    }

    const botonCargarAlumnos = document.getElementById("botCarga");
    const botonMostrarAlumnos = document.getElementById("botMostrar");
    const botonEliminarLista = document.getElementById("botElimLista");
    const botonRevisarNotas = document.getElementById("botAprob");

    botonCargarAlumnos.addEventListener("click", (event) => {
        event.preventDefault();

        const nombreAlumno = document.getElementById("inputNom").value;
        const notaMatematicas = [parseInt(document.getElementById("NotaMat").value)];
        const notaGeografia = [parseInt(document.getElementById("NotaGeo").value)];
        const notaHistoria = [parseInt(document.getElementById("NotaHis").value)];

        const nuevoAlumno = new Alumno(nombreAlumno, notaMatematicas, notaGeografia, notaHistoria);
        alumnos.push(nuevoAlumno);
        guardarEnMemoria(alumnos);
        eliminarInputs();
    });

    botonMostrarAlumnos.addEventListener("click", mostrarDeMemoria);
    botonEliminarLista.addEventListener("click", quitarLista);
    botonRevisarNotas.addEventListener("click", mostrarResultado);



