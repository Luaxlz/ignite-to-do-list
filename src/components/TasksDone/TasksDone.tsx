import { Counter } from '../Counter/Counter';
import styles from './TasksDone.module.css';

export const TasksDone = () => {
  return (
    <div className={styles.TasksDoneInfo}>
      <p>Concluídas</p>
      <Counter />
    </div>
  );
};
