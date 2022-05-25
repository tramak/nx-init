import React from 'react';
import { QuestionItem } from '../questionItem/questionItem';
import styles from './questions.module.scss';

export interface IQuestion {
  question: string;
  answer: string;
}
export interface IQuestionsProps {
  data?: IQuestion[];
}
export const Questions: React.FC<IQuestionsProps> = (
  {
    data
  }
) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Вопрос / Ответ</h2>

      <ul className={styles.list}>
        {data?.map(item => <QuestionItem data={item} />)}
      </ul>
    </div>
  )
};
