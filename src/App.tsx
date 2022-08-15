import AppLayout from './components/AppLayout';
import { AddTodo } from './features/AddTodo/components/AddTodo';
function App() {
  return (
    <AppLayout>
      <AddTodo />
    </AppLayout>
  );
}
export default App;
