import { render, screen } from '@testing-library/react';
import SingIn from './SingIn';

describe('Вход', () => {
  it('test singIn', () => {
    const { baseElement } = render(<SingIn />);
    expect(baseElement).toBeTruthy();

    expect(screen.getByText(/Name:/)).toBeTruthy();
    // screen.debug();
  });
})