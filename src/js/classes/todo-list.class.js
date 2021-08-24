export class TodoList {
    constructor(){
        // declaro un arreglo vacio para almacenar todas las otras tareas
        //this.todos = [];
        // La carga la tiene la función ahora
        this.cargarLocalStorage();
    }

    // Metodos

    nuevoTodo(todo){
        // hago referencia al arreglo 'todos' que hay en el constructor    
        this.todos.push(todo);

        // el array de todo es parte de la clase , por lo tanto se llama desde cualquier parte de la clase " THIS.TODOS" 
        this.guardarLocalStorage();
    }

    eliminarTodo(id){

        // uso de array filter
        // hago filtro y sobre escribo el valor del array TODOS
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id){

        for(const todo of this.todos){

            if(id == todo.id){
                // utilizo operador booleano
                todo.completado = !todo.completado;
               // si encuentro el id requerido corto el ciclo for
               this.guardarLocalStorage();
                break;
            }

        }

    }

    eliminaCompletados(){

    // requiero todos los todos no terminados == false    
    this.todos = this.todos.filter(todo => todo.completado == false);
    this.guardarLocalStorage();

    }

    guardarLocalStorage(){
        // para guardar datos en localStorage estos deben ser string
        // para guardar arrays y objetos debemos guardarlos en formato Json
        localStorage.setItem('todos',JSON.stringify(this.todos));
        
    }

    cargarLocalStorage(){
     this.todos = (localStorage.getItem('todos'))
                  ? JSON. parse(localStorage.getItem('todos')) 
                  : [];                  
    }

    contadorTodos(){
        return this.todos.filter(todo => todo.completado == false).length;
    }

}