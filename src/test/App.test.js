import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import App from '../App'
import { BearishView, BullishView, RangeboundView, VolatileView } from '../views';

jest.mock('../views')

// test('demo', () => {
//   expect(true).toBe(true)
// })

test("App page rendering", () => {

  BearishView.mockImplementation(() => <div>BearishView</div>)
  BullishView.mockImplementation(() => <div>BullishView</div>)
  RangeboundView.mockImplementation(() => <div>RangeboundView</div>)
  VolatileView.mockImplementation(() => <div>VolatileView</div>)

  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByText('Bearish'));
  expect(screen.getByText("BearishView")).toBeInTheDocument();

  fireEvent.click(screen.getByText('Bullish'));
  expect(screen.getByText("BullishView")).toBeInTheDocument();

  fireEvent.click(screen.getByText('Rangebound'));
  expect(screen.getByText("RangeboundView")).toBeInTheDocument();

  fireEvent.click(screen.getByText('Volatile'));
  expect(screen.getByText("VolatileView")).toBeInTheDocument();
})