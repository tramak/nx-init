import { Story, Meta } from '@storybook/react';
import { QuestionItem, IQuestionItemProps } from './questionItem';

export default {
  component: QuestionItem,
  title: 'home/question/QuestionItem',
} as Meta;

const Template: Story<IQuestionItemProps> = (args) => <QuestionItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    question: 'Какая минимальная сумма для инвестиций?',
    answer: `
      NFT-токен нематериален. По сути это шифр, цифровой криптографический товар, некоторые сравнивают его с аналогом виртуальной ценной бумаги. Его нельзя обменять, но можно реализовать: фактически такой токен подтверждает право на владение неким эксклюзивным цифровым активом.
      Актив может быть практически любым: видеоролик, комикс, фотография, текст, целый музыкальный альбом или отдельная песня и даже твит.
    `
  }
};
