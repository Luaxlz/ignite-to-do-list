import styles from './CreateButton.module.css';
import PlusIcon from '../../assets/plus.svg';

export const CreateButton = () => {
  return (
    <button className={styles.button}>
      Criar
      <img src={PlusIcon}></img>
    </button>
  );
};
