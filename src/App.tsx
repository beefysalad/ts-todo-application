import AppLayout from './components/AppLayout';
import { Todo } from './components/Todo';
import { TodoList } from './components/TodoList';
import { AddTodo } from './features/AddTodo/components/AddTodo';
function App() {
  return (
    <AppLayout>
      <Todo>
        <AddTodo />
        <TodoList />
      </Todo>
    </AppLayout>
  );
}
export default App;
