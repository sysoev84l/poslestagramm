import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import PosleStaGrammApp from "./App";

test('renders learn react link', () => {
  render(<PosleStaGrammApp/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PosleStaGrammApp/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
