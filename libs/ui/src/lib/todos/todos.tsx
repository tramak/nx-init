import { ITodos } from '@myorg/types';
import styles from './todos.module.scss';

export interface TodosProps {
  todos: ITodos.Todo[];
}

export function Todos(props: TodosProps) {
  return (
    <ul>
      {props.todos.map((t) => (
        <li key={t.title} className={styles.todo}>{t.title}!!</li>
      ))}
    </ul>
  );
}

export default Todos;
