import "./src/css/styles.css";

// importo la clase 
import { Todo , TodoList } from "./src/js/classes";
import { crearTodoHtml } from "./src/js/componentes";


// instancio la clase TodoList 
export const todoList = new TodoList();




// le paso el objeto completo sin necesidad desglosar el objeto
//todoList.todos.forEach(todo => crearTodoHtml(todo));


todoList.todos.forEach(todo => crearTodoHtml(todo));

/*for(const element of todoList.todos){
    crearTodoHtml(element);
}

*/

