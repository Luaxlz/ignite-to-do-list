import styles from './TasksDone.module.css';

interface TasksDoneProps {
  tasksDoneCount: number;
}

export const TasksDone = ({ tasksDoneCount }: TasksDoneProps) => {
  return (
    <div className={styles.TasksDoneInfo}>
      <p>Concluídas</p>
      <span className={styles.counter}>
        {tasksDoneCount ? tasksDoneCount : 0}
      </span>
    </div>
  );
};
