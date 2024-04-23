class alumno {
    constructor(nombre,nota1,nota2,nota3){
        this.nombre=nombre;
        this.notas=[nota1,nota2,nota3];
    }
    recuperar(nota){
    let notaRecuperatorio= parseInt(prompt("Que nota obtuvo " + nombre +" en el recuperatorio?"));
    if(notaRecuperatorio>nota){
        nota = notaRecuperatorio;
        return nota;
    }else{
            return nota;
        }
        notas.push(nota)
    }
}

function aproboAlumno(nombre, nota1,nota2,nota3) {
    if (aproboMateria(nota1)&&aproboMateria(nota2)&&aproboMateria(nota3)){
        alert(nombre + " paso de grado!");
    } else {
        alert(nombre + " tiene que repetir el grado");
    }
}


function aproboMateria(nota){
    if (nota>=6){
        return true;
    }else{
        return false;
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
    

    aproboAlumno(nombreAlumno,notaGeografia,notaHistoria,notaMatematicas);

}