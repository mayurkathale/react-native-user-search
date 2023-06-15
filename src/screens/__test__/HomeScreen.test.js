import { render, screen } from '@testing-library/react-native';
import StackNavigation from '../../navigation/stack';

describe('Home Screen', () => {
  it('should be rendered', async () => {
    const navigation = { navigate: jest.fn() };
    render(<StackNavigation />);
    const button = await screen.getByTestId('searchButton');
    expect(button).toBeTruthy();
  });
});
