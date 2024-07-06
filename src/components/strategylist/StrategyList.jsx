import React from 'react';
import styled from 'styled-components';
import { strategyArray } from '../../router';

const StrategyList = ({ date, id }) => {

    function countAndArrangeStratergies(arr) {
        const countMap = arr.reduce((map, val) => {
            map.set(val, (map.get(val) || 0) + 1);
            return map;
        }, new Map());
        const sortBasedOnCount = [...countMap].map(([value,count]) => ({value,count}));
        sortBasedOnCount.sort((a, b) => a.count - b.count);
        return sortBasedOnCount;
    }

    const strategies = strategyArray[id].Value[date] || [];
    const formatedStrategies = countAndArrangeStratergies(strategies);

    return (
        <StrategyView>
            {formatedStrategies.length > 0 ? (
                formatedStrategies.map((strategy, index) => (
                    <Strategy key={index}>
                        <Value>{strategy.value}</Value>
                        <Count>&bull; {strategy.count} {strategy.count > 1 ? 'strategies' : 'strategy'}</Count>
                    </Strategy>
                ))
            ) : (
                <NoData>
                    <span>There are no strategies for</span>
                    <br />
                    <Bold>{date}</Bold> 
                </NoData>
            )}
        </StrategyView>
    );
};

export default StrategyList;

const StrategyView = styled.div`
    width: 520px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 500px) {
        width: 300px;
    }
`;

const Strategy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid silver;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background: whitesmoke;
  }
`;

const Value = styled.text``;

const Count = styled.text`
    font-weight: 100;
    color: gray;
`;

const NoData = styled.div`
    display: flex;
    flex-direction: column;
    height: 50vh;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-weight: 100;
    @media (max-width: 500px) {
    height: 30vh;
  }
`;

const Bold = styled.text`
    /* padding: 2px; */
    font-weight: 600;
`;