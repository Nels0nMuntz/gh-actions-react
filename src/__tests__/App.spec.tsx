import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
//   test('renders the Vite and React logos with links', () => {
//     render(<App />);
//     const viteLogo = screen.getByAltText('Vite logo');
//     const reactLogo = screen.getByAltText('React logo');
    
//     expect(viteLogo).toBeInTheDocument();
//     expect(reactLogo).toBeInTheDocument();
//     expect(viteLogo.closest('a')).toHaveAttribute('href', 'https://vite.dev');
//     expect(reactLogo.closest('a')).toHaveAttribute('href', 'https://react.dev');
//   });

  test('renders the title "Vite + React"', () => {
    render(<App />);
    const title = screen.getByText(/Vite \+ React/i);
    expect(title).toBeInTheDocument();
  });

  test('renders the button with the initial count', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();
  });

  test('increments count when the button is clicked', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 2');
  });

//   test('renders the instructions for editing the file', () => {
//     render(<App />);
//     const instructions = screen.getByText(/Edit src\/App\.tsx and save to test HMR/i);
//     expect(instructions).toBeInTheDocument();
//   });

  test('renders the "read the docs" paragraph', () => {
    render(<App />);
    const paragraph = screen.getByText(/Click on the Vite and React logos to learn more/i);
    expect(paragraph).toBeInTheDocument();
  });
});
