import {Todo} from '../js/classes'
import {todoList} from '../../index'

const todoListComponent = document.querySelector('.todo-list');
const newTodoComponent = document.querySelector('.new-todo');
const deleteTodoComponent = document.querySelector('.clear-completed');
const filtersComponent = document.querySelector('.filters');
const anchorFilterComponent =  document.querySelectorAll('.filtro');
const pendingCountComponent = document.querySelector('.contador-todos');

const contadorTodosPendientes = () =>{
    pendingCountComponent.innerText = todoList.contadorTodos();
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
        todoListComponent.append(div.firstElementChild);
        contadorTodosPendientes();
        return div.firstElementChild;
}

newTodoComponent.addEventListener('keyup',(event)=>{
    if(event.keyCode === 13 && newTodoComponent.value.length > 0){
       const nuevoTodo = new Todo (newTodoComponent.value);
       todoList.nuevoTodo (nuevoTodo);
       crearTodoHtml(nuevoTodo);
       newTodoComponent.value = '';
    }
});

todoListComponent.addEventListener('click',(event)=>{
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
        todoListComponent.removeChild(todoElemento);
        contadorTodosPendientes();
    }
});


deleteTodoComponent.addEventListener('click', () =>{
    todoList.eliminaCompletados();
    for(let i = todoListComponent.children.length-1; i>=0; i--){
        const elemento = todoListComponent.children[i];
        if(elemento.classList.contains('completed')){
            todoListComponent.removeChild(elemento);
        }
    }
});


filtersComponent.addEventListener('click',(event) => {
    const filtro = event.target.text;
    if (!filtro) return

    anchorFilterComponent.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for(const elemento of todoListComponent.children) {
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
