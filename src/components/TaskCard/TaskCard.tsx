import styles from './TaskCard.module.css';
import { useState } from 'react';
import { CheckFat, Trash } from '@phosphor-icons/react';

interface TaskCardProps {
  task: string;
  onDeleteTask: (task: string, isChecked: boolean) => void;
  onTaskDone: (isTaskDone: boolean) => void;
}

export const TaskCard = ({ task, onDeleteTask, onTaskDone }: TaskCardProps) => {
  const [isChecked, setIschecked] = useState(false);

  const handleCheck = () => {
    if (isChecked === true) {
      setIschecked(false);
      onTaskDone(false);
    } else {
      setIschecked(true);
      onTaskDone(true);
    }
  };

  const handleDeleteTask = () => {
    onDeleteTask(task, isChecked);
  };

  return (
    <div className={styles.taskCard}>
      <button
        className={isChecked ? styles.isChecked : styles.checkButton}
        title='Concluir tarefa'
        onClick={handleCheck}>
        {isChecked ? <CheckFat weight='fill' size={16} /> : ''}
      </button>
      <p
        style={{
          textDecoration: isChecked ? 'line-through' : '',
        }}>
        {task}
      </p>
      <button
        className={styles.deleteButton}
        title='Deletar tarefa'
        onClick={handleDeleteTask}>
        <Trash size={22} />
      </button>
    </div>
  );
};
