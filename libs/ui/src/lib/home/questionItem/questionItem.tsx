import React from 'react';
import cl from 'classnames';
import styles from '../questions/questions.module.scss';

export interface IQuestion {
  question: string;
  answer: string;
}

export interface IQuestionItemProps {
  data: IQuestion;
}
export const QuestionItem: React.FC<IQuestionItemProps> = (
  {
    data
  }
) => {
  return (
    <li className={styles.item}>
      <div className={styles.itemData}>
        <div className={styles.question}  dangerouslySetInnerHTML={{ __html: data.question }} />
        <div className={styles.answer} dangerouslySetInnerHTML={{ __html: data.answer }} />
      </div>
      <div className={styles.open} />
    </li>
  )
};
