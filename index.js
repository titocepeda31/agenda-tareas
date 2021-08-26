import "./src/css/styles.css";

// importo la clase
import { Todo , TodoList } from "./src/js/classes";
import { render } from "./src/js/components";


// instancio la clase TodoList
export const todoList = new TodoList();




// le paso el objeto completo sin necesidad desglosar el objeto
//todoList.todos.forEach(todo => render(todo));


todoList.todos.forEach(todo => render(todo));

/*for(const element of todoList.todos){
    crearTodoHtml(element);
}

*/

