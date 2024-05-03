class alumno {
    constructor(nombre,notasMatematicas,notasGeografia,notasHistoria){
        this.nombre=nombre;
        this.notas={};
        this.notas.matematicas=notasMatematicas;
        this.notas.geografia=notasGeografia;
        this.notas.historia=notasHistoria;
    }

    promedioNotas(materia){
        let notasArray = 0;
        this.notas[materia].forEach(nota => {
            notasArray += nota;
        });
        const promedio= notasArray/this.notas[materia].length;
        return promedio;
    }
    aproboMateria(materia) {
        const promedio = this.promedioNotas(materia);
        if (promedio>=6){
            return true;
        }else{
            return false;
        }
    }
    aproboAnio(){
        if(this.aproboMateria("matematicas")&&this.aproboMateria("geografia")&&this.aproboMateria("historia")){
            alert(this.nombre + " aprobó el año!");
        }else{
            alert(this.nombre + " va a tener que repetir, lo lamento.");
        }
    }
    notasPromocion(materia){
        const notasAltas=this.notas[materia].filter((notas)=>notas>=8);
        if(notasAltas.length==0){
            console.log("Ninguna nota alta?\nHay que esforzarse para la proxima.");
        }else{
            console.log("las notas para promocion de " + materia + " fueron " + notasAltas);
        }
    }

}


let cantidadAlumnos=parseInt(prompt("Ingrese el numero de alumnos"));;

for(let i=0;i<cantidadAlumnos;i++){
    let notaMatematicas=[];
    let notaGeografia=[];
    let notaHistoria=[];
    let nombreAlumno = prompt("Ingresa el nombre del alumno.");
    let examenesMate=parseInt(prompt("Cuantos examenes rindio de Matematicas?"));
    let examenesGeo=parseInt(prompt("Cuantos examenes rindio de Geografia?"));
    let examenesHisto=parseInt(prompt("Cuantos examenes rindio de Historia?"));
    do{ 
        let cargar=parseInt(prompt("ingresa las notas de matematicas."));
        notaMatematicas.push(cargar);
        console.log(notaMatematicas);
    }while(notaMatematicas.length<examenesMate);
    do{
        let cargar=parseInt(prompt("ingresa las notas de geografia."));
        notaGeografia.push(cargar);
        console.log(notaGeografia);
    }while(notaGeografia.length<examenesGeo);
    do{  
        let cargar=parseInt(prompt("ingresa las notas de historia."));
        notaHistoria.push(cargar);
        console.log(notaHistoria);
    }while(notaHistoria.length<examenesHisto);

    
const nuevoAlumno= new alumno (nombreAlumno,notaMatematicas,notaGeografia,notaHistoria);
nuevoAlumno.aproboAnio();
nuevoAlumno.notasPromocion("matematicas");

}