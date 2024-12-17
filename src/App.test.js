import '@testing-library/jest-dom'
import { render,screen } from '@testing-library/react';
import App from './App';
import Sabzi from './components/Sabzi';


test('Testing App Component',()=>{
  render(<App/>)
  const a = screen.getByText(/Afnan/i);
  expect(a).toBeInTheDocument();
});

test('Checking Sabzi Compoennt',()=>{
  render(<Sabzi />)
  const check = screen.getByText(/List of Items/i)
  expect(check).toBeInTheDocument();
})



test('Checking a to Be A',()=>{
  expect('a').not.toBe('A')
})