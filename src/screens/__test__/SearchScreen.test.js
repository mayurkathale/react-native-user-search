import { act, fireEvent, render, screen } from '@testing-library/react-native';
import StackNavigation from '../../navigation/stack';

describe('Result Screen', () => {
  it('should be rendered after input value in text of home screen', async () => {
    const navigation = { navigate: jest.fn() };
    render(<StackNavigation />);
    const input = await screen.getByTestId('searchText');
    const button = await screen.getByTestId('searchButton');
    fireEvent.changeText(input, 'Emma');
    fireEvent.press(button);
    await act(async () => {
      await new Promise((r) => setTimeout(r, 3000));
      const text = screen.getByText('Emma');
      expect(text).toBeTruthy();
    });
  });
});
