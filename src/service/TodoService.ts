import { TodoType } from '../types/index';
const addTodos = (data: TodoType[]) => {
  localStorage.setItem('todo', JSON.stringify(data));
};

const getTodos = (): TodoType[] => {
  return JSON.parse(localStorage.getItem('todo')!);
};
const TodoService = {
  addTodos,
  getTodos,
};

export default TodoService;
