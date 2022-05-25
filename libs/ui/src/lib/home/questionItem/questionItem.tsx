import React, { useState } from 'react';
import cl from 'classnames';
import styles from './questionItem.module.scss';

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
  const [isOpen, setOpen] = useState(false);
  return (
    <li className={styles.item}>
      <div className={styles.itemData}>
        <div className={styles.question} dangerouslySetInnerHTML={{ __html: data.question }} />

        {isOpen && (
          <div className={styles.answer} dangerouslySetInnerHTML={{ __html: data.answer }} />
        )}
      </div>
      <div
        className={cl(styles.button, {
          [styles.open]: isOpen
        })}
        onClick={() => setOpen(value => !value)}
      />
    </li>
  )
};
