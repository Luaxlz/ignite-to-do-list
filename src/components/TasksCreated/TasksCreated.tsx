import { Counter } from '../Counter/Counter';
import styles from './TasksCreated.module.css';

export const CreatedTasks = () => {
  return (
    <div className={styles.TaskCreatedInfo}>
      <p>Tarefas Criadas</p>
      <Counter />
    </div>
  );
};
