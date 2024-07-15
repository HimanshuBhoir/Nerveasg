import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { strategyArray } from '../router';
import { StrategyList } from '../components';

test('renders correct strategies for a given date and id', () => {
    const id = 0;
    const date = '24-Apr-2024';

    const { getByText, queryByText } = render(<StrategyList id={id} date={date} />);

    const strategies = strategyArray[id].Value[date] || [];
    strategies.forEach(strategy => {
      const strategyValue = getByText(strategy);
      expect(strategyValue).toBeInTheDocument();
    });

    const noDataMessage = queryByText(`There are no strategies for\n${date}`);
    expect(noDataMessage).toBeNull();
});
