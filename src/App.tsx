import styles from './App.module.css';
import { CreateButton } from './components/CreateButton/CreateButton';
import Header from './components/Header/Header';
import { NewTaskInput } from './components/NewTaskInput/NewTaskInput';
import { CreatedTasks } from './components/TasksCreated/TasksCreated';
import { TasksDone } from './components/TasksDone/TasksDone';
import ClipboardIcon from './assets/Clipboard.svg';
import './global.css';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <NewTaskInput />
        <CreateButton />
      </div>
      <main className={styles.tasks}>
        <div className={styles.info}>
          <CreatedTasks />
          <TasksDone />
        </div>

        <div className={styles.tasksDisplay}>
          <img src={ClipboardIcon}></img>
          <div className={styles.displayText}>
            <h1>Você ainda não tem tarefas cadastradas</h1>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
