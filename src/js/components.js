import {Todo} from '../js/classes'
import {todoList} from '../../index'

const ulTodoList = document.querySelector('.todo-list');
const TxtInput = document.querySelector('.new-todo');
const btnEliminar = document.querySelector('.clear-completed');
const UlFilter = document.querySelector('.filters');
const anchorFiltros =  document.querySelectorAll('.filtro');
const contadorPendientes = document.querySelector('.contador-todos');

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
        contadorTodosPendientes();
        return div.firstElementChild;
}

TxtInput.addEventListener('keyup',(event)=>{
    if(event.keyCode === 13 && TxtInput.value.length > 0){
       const nuevoTodo = new Todo (TxtInput.value);
       todoList.nuevoTodo (nuevoTodo);
       crearTodoHtml(nuevoTodo);
       TxtInput.value = '';
    }
});

ulTodoList.addEventListener('click',(event)=>{
    const TipoElemento = event.target.type;
    const NombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const IdElemento = event.target.parentElement.parentElement.getAttribute('data-id');

    if (NombreElemento == 'input' && TipoElemento =='checkbox') {
        todoList.marcarCompletado(IdElemento);
        contadorTodosPendientes();
        todoElemento.classList.toggle('completed');
    } else if(NombreElemento=='button' && TipoElemento =='submit') {
        todoList.eliminarTodo(IdElemento);
        ulTodoList.removeChild(todoElemento);
        contadorTodosPendientes();
    }
});


btnEliminar.addEventListener('click', () =>{
    todoList.eliminaCompletados();
    for(let i = ulTodoList.children.length-1; i>=0; i--){
        const elemento = ulTodoList.children[i];
        if(elemento.classList.contains('completed')){
            ulTodoList.removeChild(elemento);
        }
    }
});


UlFilter.addEventListener('click',(event) => {
    const filtro = event.target.text;
    if (!filtro) return

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for(const elemento of ulTodoList.children) {
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
