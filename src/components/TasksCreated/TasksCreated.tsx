import styles from './TasksCreated.module.css';

interface CreatedTasksProps {
  tasksCount: number;
}

export const CreatedTasks = ({ tasksCount }: CreatedTasksProps) => {
  return (
    <div className={styles.TaskCreatedInfo}>
      <p>Tarefas Criadas</p>
      <span className={styles.counter}>{tasksCount ? tasksCount : 0}</span>
    </div>
  );
};
