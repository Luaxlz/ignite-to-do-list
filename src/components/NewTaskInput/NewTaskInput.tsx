import styles from './NewTaskInput.module.css';

export const NewTaskInput = () => {
  return (
    <input
      type='text'
      className={styles.input}
      placeholder='Adicione uma nova tarefa'
    />
  );
};
