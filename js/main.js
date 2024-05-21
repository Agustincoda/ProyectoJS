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
        let sumaNotas = 0;
        this.notas[materia].forEach(nota => {
            sumaNotas += nota;
        });
        const promedio = sumaNotas / this.notas[materia].length;
        return promedio;
    }

    aproboMateria(materia) {
        const promedio = this.promedioNotas(materia);
        return promedio >= 6;
    }

    aproboAnio() {
        if (this.aproboMateria("matematicas") && this.aproboMateria("geografia") && esta.aproboMateria("historia")) {
            alert(this.nombre + " aprobó el año!");
        } else {
            alert(this.nombre + " va a tener que repetir, lo lamento.");
        }
    }
}

const alumnos = [];

// console.log("Datos de los alumnos:");
// alumnos.forEach(alumno => {
// console.log(`Nombre: ${alumno.nombre}`);
// console.log(`Notas de Matemáticas: ${alumno.notas.matematicas}`);
// console.log(`Notas de Geografía: ${alumno.notas.geografia}`);
//  console.log(`Notas de Historia: ${alumno.notas.historia}`);
//  });

function guardarEnMemoria(alumnos) {
    const alumnosJSON = JSON.stringify(alumnos);
    sessionStorage.setItem("arrayAlumnos", alumnosJSON);
}

function mostrarDeMemoria() {
    const listaAlumnos = JSON.parse(sessionStorage.getItem("arrayAlumnos"));    
    
    alumnos.forEach(alumno=>{
    const div= document.createElement("div");
    div.className= "alumno";

    const nombre= document.createElement("h2");
    nombre.innerText= `Nombre: ${alumno.nombre}`;
    nombre.className= "nombreAlumno";

    const notaMatematicas= document.createElement("p");
    notaMatematicas.innerText= `Nombre: ${alumno.notas.matematicas}`;

    const notaGeografia= document.createElement("p");
    notaGeografia.innerText= `Nota de Geografia: ${alumno.notas.geografia}`;

    const notaHistoria= document.createElement("p");
    notaHistoria.innerText= `Nombre: ${alumno.notas.historia}`;
    })

}

function eliminarInputs(){
    document.getElementById("inputNom").value = "";
    document.getElementById("NotaMat").value = "";
    document.getElementById("NotaGeo").value = "";
    document.getElementById("NotaHis").value = "";
}

function quitarLista(){
    const listaAlumnos=sessionStorage.getItem("arrayAlumnos")
    if(listaAlumnos!=null){
    sessionStorage.clear("arrayAlumnos");
        alert("Se borro la lista! Ya podes ingresar un nuevo lote de alumnos");
        console.log("Lista vacia");
    }else{
        alert("No hay nada cargado, revisa que hayas ingresado un alumno al menos");
    }
}
const botonCargarAlumnos = document.getElementById("botCarga");
const botonMostrarAlumnos = document.getElementById("botMostrar");
const botonEliminarLista=document.getElementById("botElimLista")

botonCargarAlumnos.addEventListener("click", () => {

    const nombreAlumno = document.getElementById("inputNom").value;
    const notaMatematicas = parseInt(document.getElementById("NotaMat").value,10);
    const notaGeografia = parseInt(document.getElementById("NotaGeo").value,10);
    const notaHistoria = parseInt(document.getElementById("NotaHis").value,10);

    const nuevoAlumno = new Alumno(nombreAlumno, notaMatematicas, notaGeografia, notaHistoria);
    alumnos.push(nuevoAlumno);
    guardarEnMemoria(alumnos);
    eliminarInputs();
});

botonMostrarAlumnos.addEventListener("click",mostrarDeMemoria);

botonEliminarLista.addEventListener("click",quitarLista)