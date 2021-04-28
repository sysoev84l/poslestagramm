import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import After100GramsApp from "./App";

test('renders learn react link', () => {
  render(<After100GramsApp/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<After100GramsApp/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
