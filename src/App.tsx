import styles from './App.module.css';
import Header from './components/Header/Header';
import { CreatedTasks } from './components/TasksCreated/TasksCreated';
import { TasksDone } from './components/TasksDone/TasksDone';
import ClipboardIcon from './assets/Clipboard.svg';
import './global.css';
import { TaskCard } from './components/TaskCard/TaskCard';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTaskInputValue, setNewTaskInputValue] = useState('');
  const [tasksDoneCount, setTasksDoneCount] = useState(0);

  const isNewTaskInputEmpty = newTaskInputValue.length === 0;

  const deleteTask = (taskToDelete: string, isChecked: boolean) => {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task !== taskToDelete;
    });

    if (isChecked) {
      setTasksDoneCount(tasksDoneCount - 1);
    }

    setTasks(tasksWithoutDeletedOne);
  };

  const handleNewTaskInputChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.target.setCustomValidity('');
    setNewTaskInputValue(event.target.value);
  };

  const handleNewTaskInputInvalid = (
    event: InvalidEvent<HTMLTextAreaElement>
  ) => {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  };

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();
    setTasks([...tasks, newTaskInputValue]);
    setNewTaskInputValue('');
  };

  const handleDoneTasksCount = (done: boolean) => {
    if (done === true) {
      setTasksDoneCount(tasksDoneCount + 1);
    } else if (done === false) {
      setTasksDoneCount(tasksDoneCount - 1);
    }
  };

  const tasksCount = tasks.length || 0;

  return (
    <div className={styles.container}>
      <Header />
      <form onSubmit={handleCreateNewTask} className={styles.wrapper}>
        <textarea
          name='newTask'
          placeholder='Adicionar uma nova tarefa'
          value={newTaskInputValue}
          onChange={handleNewTaskInputChange}
          onInvalid={handleNewTaskInputInvalid}
          required
        />
        <button type='submit' disabled={isNewTaskInputEmpty}>
          Criar
          <PlusCircle size={24} weight='bold' />
        </button>
      </form>
      <main className={styles.tasks}>
        <div className={styles.info}>
          <CreatedTasks tasksCount={tasksCount} />
          <TasksDone tasksDoneCount={tasksDoneCount} />
        </div>

        <div className={styles.tasksDisplay}>
          {tasks.length > 0 ? (
            tasks.map((task) => {
              return (
                <TaskCard
                  key={task}
                  task={task}
                  onDeleteTask={deleteTask}
                  onTaskDone={handleDoneTasksCount}
                />
              );
            })
          ) : (
            <>
              <img src={ClipboardIcon}></img>
              <div className={styles.displayText}>
                <h1>Você ainda não tem tarefas cadastradas</h1>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
