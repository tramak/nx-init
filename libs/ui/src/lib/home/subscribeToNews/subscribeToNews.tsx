import React from 'react';
import { FieldError, useForm } from 'react-hook-form';
import styles from './subscribeToNews.module.scss';

export interface ISubscribeToNewsInput {
  email: string;
}

export const SubscribeToNews: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ISubscribeToNewsInput>();

  const renderValidationError = (fieldName: FieldError | undefined) => {
    if (!fieldName) {
      return null;
    }
    return <div className={styles.validation_error}>{fieldName.message}</div>;
  };

  const onSubmit = (data: ISubscribeToNewsInput) => {
    console.log(data);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div className={styles.news_subscription}>
      <div className={styles.news_subscription__content}>
        <div className={styles.news_subscription__text_main}>
          Оформите подписку, чтобы не пропустить появления новых перспективных активов и получать
          полезные материалы
        </div>
        <input
          {...register('email', {
            required: 'Email is required.',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
              message: 'Enter the correct email address',
            },
          })}
          onKeyDown={onKeyDown}
          type="text"
          placeholder="Ваш Email"
          className={styles.news_subscription__input}
        />
        {renderValidationError(errors.email)}
        <div className={styles.news_subscription__text_submain}>
          Нажимая кнопку Подписаться – вы соглашаетесь с политикой обработки данных
        </div>
        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          className={styles.news_subscription__button}
        >
          Подписаться
        </button>
      </div>
    </div>
  );
};
