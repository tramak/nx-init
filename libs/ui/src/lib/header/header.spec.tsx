import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Header } from './header';

const logout = jest.fn();
const scrollToQuestionList = jest.fn();

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <Header status="" logout={logout} scrollToQuestionList={scrollToQuestionList} />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
