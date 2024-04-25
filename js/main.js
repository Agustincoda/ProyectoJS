class alumno {
    constructor(nombre,notasMatematicas,notasGeografia,notasHistoria){
        this.nombre=nombre;
        this.notas={};
        this.notas.matematicas=notasMatematicas;
        this.notas.geografia=notasGeografia;
        this.notas.historia=notasHistoria;
    }
    aproboMateria(notas){
        this.notas.splice(0,2);
        if(this.notas>=6){
            return true;
        }else{
            return false;
        }
    }

    aproboanio(){
        if(aproboMateria(this.notas.matematicas)&&aproboMateria(this.notas.geografia)&&aproboMateria(this.notas.historia)){
            alert(this.nombre + " aprobó el año!");
        }else{
            alert(this.nombre + " va a tener que repetir, lo lamento");
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