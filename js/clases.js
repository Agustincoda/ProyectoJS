export class Alumno {
    constructor(nombre, notasMatematicas, notasGeografia, notasHistoria) {
        this.nombre = nombre;
        this.notas = {
            matematicas: notasMatematicas,
            geografia: notasGeografia,
            historia: notasHistoria
        };
    }

    promedioNotas(materia) {
        const sumaNotas = this.notas[materia];
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

