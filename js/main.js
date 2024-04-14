function aproboAlumno(nombre, total) {
    if (total >= 6) {
        alert(nombre + " pasó de año!");
    } else {
        alert(nombre + " tiene que repetir el año");
    }
}

function recuperar(nota, nombreAlumno){
    let notaRecuperatorio= parseInt(prompt("Que nota obtuvo " + nombreAlumno +" en el recuperatorio?"));
    if(notaRecuperatorio>nota){
         nota = notaRecuperatorio;
         return nota;
        }else{
            return nota;
        }
}

let cantidadAlumnos=parseInt(prompt("ingrese el numero de alumnos"));;

for(let i=0;i<cantidadAlumnos;i++){
    let nombreAlumno = prompt("Ingresa el nombre del alumno");
    let notaMatematicas = parseInt(prompt("Cual fue su nota en matematicas?"));
    if(notaMatematicas<6){
        notaMatematicas= recuperar(notaMatematicas, nombreAlumno);
    }
    let notaGeografia = parseInt(prompt("Cual fue su nota en geografia?"));
    if(notaGeografia<6){
        notaGeografia= recuperar(notaGeografia, nombreAlumno);
    }
    let notaHistoria = parseInt(prompt("Cual fue su nota en historia?"));    
    if(notaHistoria<6){
        notaHistoria= recuperar(notaHistoria, nombreAlumno);
    }
    let total= notaMatematicas + notaGeografia + notaHistoria; 

    aproboAlumno(nombreAlumno,total/3);

}