import React, { useState } from 'react';
import styled from 'styled-components';
import { dateArray } from '../../router';
import { StrategyList } from '../';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const DateSelector = ({ index }) => {
    const [date, setDate] = useState(dateArray[0],null)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDateChange = (date) => {
        setDate(date);
        setIsDropdownOpen(false);
    };

    return (
        <DateStrategyView>
            <DateSelectorContainer>
                <DateButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <span>{date}</span>
                    {isDropdownOpen ? <IoIosArrowUp color='blue' /> : <IoIosArrowDown color='blue'/>}
                </DateButton>
                {isDropdownOpen && (
                    <DateList>
                    {dateArray.map((date) => (
                        <DateItem key={date} onClick={() => handleDateChange(date)}>
                        {date}
                        </DateItem>
                    ))}
                    </DateList>
                )}
            </DateSelectorContainer>
            <StrategyList date={date} id={index} />
        </DateStrategyView>
    );
};

export default DateSelector;

const DateStrategyView = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const DateSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

const DateButton = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 10px;
    background: #f9f9f9;
    border: 1px solid silver;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
    background: whitesmoke;
    }
    @media (max-width: 500px) {
        width: 280px;
    }
`;

const DateList = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    @media (max-width: 500px) {
        width: 290px;
    }
`;

const DateItem = styled.div`
    margin: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px;
    background: #f9f9f9;
    border: 1px solid silver;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
    background: whitesmoke;
    }
`;