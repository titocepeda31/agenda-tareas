export class Todo {

    constructor(tarea){
        this.tarea = tarea;
        // tarea = aprender JS

        this.id = new Date().getTime();
        this.completado = false;
        this.FechaCreacion = new Date();
    }



}