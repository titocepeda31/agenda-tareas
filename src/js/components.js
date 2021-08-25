import {Todo} from '../js/classes'
import {todoList} from '../../index'


// referencias en html

const ulTodoList = document.querySelector('.todo-list');
const TxtInput = document.querySelector('.new-todo');
const btnEliminar = document.querySelector('.clear-completed');
const UlFilter = document.querySelector('.filters');
const anchorFiltros =  document.querySelectorAll('.filtro');
const contadorPendientes = document.querySelector('.contador-todos');





// FUNCIONES


// imprime el numero de todos pendientes

const contadorTodosPendientes = () =>{
    contadorPendientes.innerText = todoList.contadorTodos();
}




export const crearTodoHtml = (todo) =>{
  const htmlTodo = `  
        <li class="${(todo.completado)?'completed':''}" data-id="${todo.id}">
        <div class="view">
        <input class="toggle" type="checkbox" ${(todo.completado)?'checked':''}>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
        </li>`;
        const div = document.createElement('div');
        div.innerHTML = htmlTodo;
        ulTodoList.append(div.firstElementChild);
         // actualizo el numero de pendientes
        contadorTodosPendientes();
        return div.firstElementChild;
}




// Eventos

TxtInput.addEventListener('keyup',(event)=>{
    // se valida que sea enter y que el input no esté vacio
    if(event.keyCode === 13 && TxtInput.value.length > 0){
       const nuevoTodo = new Todo (TxtInput.value);
       todoList.nuevoTodo (nuevoTodo);
       crearTodoHtml(nuevoTodo);
       TxtInput.value = '';
    }
});

ulTodoList.addEventListener('click',(event)=>{

    // identifico sobre que elemento estoy haciendo click  , div , boton , label etc

    const TipoElemento = event.target.type;
    const NombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const IdElemento = event.target.parentElement.parentElement.getAttribute('data-id');

    //console.log(NombreElemento,TipoElemento);

    if(NombreElemento == 'input' && TipoElemento =='checkbox'){
        todoList.marcarCompletado(IdElemento);
        contadorTodosPendientes();
        // toggle agrega y quita clase al elemento
        todoElemento.classList.toggle('completed');
    }else if(NombreElemento=='button' && TipoElemento =='submit'){

        // elimino todo del array JS
        todoList.eliminarTodo(IdElemento);
        // elimino el todo del html
        ulTodoList.removeChild(todoElemento);

        // actualizo el numero de pendientes

        contadorTodosPendientes();
    }

});


btnEliminar.addEventListener('click', () =>{

    // ELIMINA ELEMENTOS DE UN ARRAY
    todoList.eliminaCompletados();
    // PARA GENERAR EL BORRADO SE DEBE HACER CON UN FOR Y DE ABAJO PARA ARRIBA
    // YA QUE CON FOR OF NO FUNCIONA , SOLO BORRA DE UN SOLO ELEMENO

    // ELIMINA LOS ELEMENTOS DEL HTML
    for(let i = ulTodoList.children.length-1; i>=0; i--){
        const elemento = ulTodoList.children[i];
        // identifico los elementos con clase completed
        if(elemento.classList.contains('completed')){
            // remuevo los elementos con clase completed
            ulTodoList.removeChild(elemento);
        }
    }

});


UlFilter.addEventListener('click',(event)=>{
    const filtro = event.target.text;
    if(!filtro){return}

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');


    for(const elemento of ulTodoList.children){

       elemento.classList.remove('hidden');
       const completado = elemento.classList.contains('completed');

       switch(filtro){

        case 'Pendientes':
            if(completado) elemento.classList.add('hidden');
        break;

        case 'Completados':
            if(!completado) elemento.classList.add('hidden');
        break;

       }

    }

});


