import { act, fireEvent, render, screen } from '@testing-library/react-native';
import StackNavigation from '../../navigation/stack';

describe('Result Screen', () => {
  it('should render table if searched for exising user', async () => {
    const navigation = { navigate: jest.fn() };
    render(<StackNavigation />);
    const input = await screen.getByTestId('searchText');
    const button = await screen.getByTestId('searchButton');
    fireEvent.changeText(input, 'Emma');
    fireEvent.press(button);
    await act(async () => {
      await new Promise(r => setTimeout(r, 3000));
      const text = screen.getByText('Emma');
      expect(text).toBeTruthy();
    });
  });

  it('should render error modal if searched for non-exising user', async () => {
    const navigation = { navigate: jest.fn() };
    render(<StackNavigation />);
    const input = await screen.getByTestId('searchText');
    const button = await screen.getByTestId('searchButton');
    fireEvent.changeText(input, 'asdasdasd');
    fireEvent.press(button);
    await act(async () => {
      await new Promise(r => setTimeout(r, 3000));
      const text = screen.getByText(
        'This user name does not exist! Please specify an existing user name!',
      );
      expect(text).toBeTruthy();
    });
  });
});
