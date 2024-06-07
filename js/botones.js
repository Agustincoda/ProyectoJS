import { Alumno } from "./clases.js";

let alumnos = JSON.parse(sessionStorage.getItem("arrayAlumnos")) || [];

export function iniciarBotones() {
    
    function guardarEnMemoria(alumnos) {
        const alumnosJSON = JSON.stringify(alumnos);
        sessionStorage.setItem("arrayAlumnos", alumnosJSON);
    }
    async function mensajeAviso() {
        await fetch('fetch.json')
            .then((response) => response.json())
            .then((data) => {
                const contenedor = document.getElementById("listaAlumnos");
                contenedor.innerHTML = "";
                const mensaje = document.createElement("h2");
                mensaje.innerText = data;
                mensaje.className = "nombreAlumno"
                contenedor.appendChild(mensaje);
            })

            .catch((error) => console.error(error));
    }


    function eliminarInputs() {
        document.getElementById("inputNom").value = "";
        document.getElementById("NotaMat").value = "";
        document.getElementById("NotaGeo").value = "";
        document.getElementById("NotaHis").value = "";
    }
        const botonCargarAlumnos= document.getElementById("botCarga");
        const botonMostrarAlumnos= document.getElementById("botMostrar");
        const botonEliminarLista=document.getElementById("botElimLista");
        const botonAprobado=document.getElementById("botAprob")

    botonCargarAlumnos.addEventListener("click", () => {
        const nombreAlumno = document.getElementById("inputNom").value;
        const notaMatematicas = [parseInt(document.getElementById("NotaMat").value)];
        const notaGeografia = [parseInt(document.getElementById("NotaGeo").value)];
        const notaHistoria = [parseInt(document.getElementById("NotaHis").value)];

        const nuevoAlumno = new Alumno(nombreAlumno, notaMatematicas, notaGeografia, notaHistoria);
        alumnos.push(nuevoAlumno);
        guardarEnMemoria(alumnos);
        eliminarInputs();
    });

     botonMostrarAlumnos.addEventListener("click", () => {
        const listaAlumnos = document.getElementById("listaAlumnos");

        if (listaAlumnos.innerHTML === '') {
           
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
                    mensajeAviso();
                }
            botonMostrarAlumnos.innerText = "Ocultar Lista";
        } else {
            listaAlumnos.innerHTML = '';
            botonMostrarAlumnos.innerText = "Mostrar Lista";
        }
    });




    botonEliminarLista.addEventListener("click", () => {
            const listaAlumnos = sessionStorage.getItem("arrayAlumnos");
            if (listaAlumnos) {
                sessionStorage.removeItem("arrayAlumnos");
                Swal.fire({
                    title: 'Hecho!',
                    text: "La lista de alumnos se borró",
                    icon: "success"
                })
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
                })
            }
            const resultado = document.getElementById("resultadoRevision");
            if (resultado) {
                resultado.innerHTML = "";
            }
        }
    );

    

    botonAprobado.addEventListener("click", () => {
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
                    setTimeout(()=>{contenedor.removeChild(resultadoAprobado)},5000)
                } else {
                    const resultadoDesaprobado = document.createElement("p");
                    resultadoDesaprobado.innerText = "Lamentablemente uno o más alumnos desaprobaron";
                    resultadoDesaprobado.style.color = "#C33C54";
                    contenedor.appendChild(resultadoDesaprobado);
                    setTimeout(()=>{contenedor.removeChild(resultadoDesaprobado)},4000)
                }

                if (todosAprobados == null) {
                    const noHayResultado = document.createElement("p");
                    noHayResultado.innerText = "No hay resultados para evaluar.";
                    contenedor.appendChild(noHayResultado);
                }
            }
        }
    );

}

