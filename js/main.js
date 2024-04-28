class alumno {
    constructor(nombre,notasMatematicas,notasGeografia,notasHistoria){
        this.nombre=nombre;
        this.notas={};
        this.notas.matematicas=notasMatematicas;
        this.notas.geografia=notasGeografia;
        this.notas.historia=notasHistoria;
    }
    aproboMateria(materia) {
        const ultimaNotaCargada = this.notas.materia[ (this.notas.materia.length) -1 ];
        if (ultimaNotaCargada>6){
            return true;
        }else{
            return false;
        }
    }
    aproboanio(){
        if(this.aproboMateria(this.notas.matematicas)&&this.aproboMateria(this.notas.geografia)&&this.aproboMateria(this.notas.historia)){
            alert(this.nombre + " aprobó el año!");
            console.log (this.nombre + " aprobó el año!");
        }else{
            alert(this.nombre + " va a tener que repetir, lo lamento");
            console.log(this.nombre + " va a tener que repetir, lo lamento");
        }
    }
}


let cantidadAlumnos=parseInt(prompt("ingrese el numero de alumnos"));;
let notaMatematicas=[];
let notaGeografia=[];
let notaHistoria=[];
for(let i=0;i<cantidadAlumnos;i++){
    let nombreAlumno = prompt("Ingresa el nombre del alumno");
    
    do{
        let cargar=parseInt(prompt("ingresa las notas de matematicas"));
        notaMatematicas.push(cargar);
    }while(notaMatematicas.length!=3);
    do{
        let cargar=parseInt(prompt("ingresa las notas de geografia"));
        notaGeografia.push(cargar);
    }while(notaGeografia.length!=3);
    do{
        let cargar=parseInt(prompt("ingresa las notas de historia"));
        notaHistoria.push(cargar);
    }while(notaHistoria.length!=3);

    
const nuevoAlumno= new alumno (nombreAlumno,notaMatematicas,notaGeografia,notaHistoria);
nuevoAlumno.aproboanio();


}